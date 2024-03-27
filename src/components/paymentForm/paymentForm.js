import { useEffect, useContext, useState } from "react"
import axios from "axios"
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from "next/router"
import Image from "next/image"
import Swal from "sweetalert2"
import styles from "./paymentForm.module.css"
import { data, cerKey } from "./consts"
import visa from "../../assets/visaLogo.png"
import mastercard from "../../assets/mastercard.png"
import { cypherData, dataToObject } from "./cyperData"
import { CourseContext, UserContext } from '@/contexts'
import { reference } from "./reference"
import { addPayment } from "@/services"
import { generatePDF } from "./generatePDF"
import { uploadFile, updateTaxData, uploadTaxCard } from '@/services'
import { setItem, getItem, removeItem } from "@/helpers"

export const PaymentForm = () => {
  const [fileName, setFileName] = useState('')
  const [paymentData, setPaymentData] = useState(null)
  const [isSelected, setIsSelected] = useState(false)
  //const [dataToObject, setDataToObject] = useState(null)
  const [formData, setFormData] = useState(null)
  const [modality, setModality] = useState(null)
  const [range, setRange] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()
  const { course } = useContext(CourseContext)
  const { user } = useContext(UserContext)
  const fecha = new Date();
  const fechaFormateada = fecha.toISOString().slice(0, 19).replace('T', ' ');
  const randomFileName = ()=> {
    return `${uuidv4()}.pdf`
  }
  /*let dataToObject*/
  const showModal = ()=>{
    setIsModalOpen(!isModalOpen)
    return localStorage.getItem('cyperData')
  }
  console.log('fuera de onSuccess', dataToObject)
  useEffect(()=>{
    if (typeof window !== 'undefined') {
      setModality(getItem('modality'))
      /*dataToObject = JSON.parse(localStorage.getItem('cyperData'))
      console.log('dataToObject',dataToObject)*/
    }
  },[isModalOpen])
  useEffect(() => {
    if(course && course.course_max_range){
      setRange(course.course_max_range - 1)
    }
    if(!course){
      router.push('/ensenanza/offer')
    }
    if(course && user && user.student_role === 'PERSONAL_HIMFG'){
      setPaymentData({
        ...data,
        Amount: `1.00`,
        ControlNumber: `${reference(course.course_id)}`
      })
    }else if(course && user && user.student_role === 'ESTUDIANTE'){
      setPaymentData({
        ...data,
        Amount: `1.00`,
        ControlNumber: `${reference(course.course_id)}`
      })
    }else if(course && user && user.student_role === 'EXTERNO'){
      setPaymentData({
        ...data,
        Amount: `1.00`,
        ControlNumber: `${reference(course.course_id)}`
      })
    }
    setTimeout(() => {
      Payment.setEnv("pro")
    }, 1000)
  },[])
  const getCypherData = async(data)=>{
    try {
      const resp = await axios.post(
        'http://carolinamagos-001-site1.anytempurl.com/aes/decrypt',
        data
      )
      return resp.data
    } catch (error) {
      console.log(error)
    }
  }
  const updateMaxRange = async()=>{
    try {
      const resp = await axios.put(
        `${process.env.BASE_URL_API}api/courses/edit-max-range/${course.course_id}`,
      {
          course_max_range: range
      })
      return resp
      
    } catch (error) {
      console.log(error)
    }
  }
  const startPayment = () => {
    showModal()
    setTimeout(()=>{
      console.log(dataToObject)
    },1000)
    if (Payment && user.student_role === 'EXTERNO') {
      Payment.setEnv("pro");
      let xOBJ;
      xOBJ = cypherData(paymentData, cerKey);
      Payment.startPayment({
        Params: xOBJ,
        onClosed: function (res) {
          localStorage.removeItem('cyperData')
          console.log(res);
        },
        onError: function (res) {
          localStorage.removeItem('cyperData')
          console.log(res);
        },
        onSuccess: async function (res) {
          let cypherMessage
          let cyperMessageToObject
          //let modality = 
          /*console.log('data cifrada', dataToObject)
          console.log('respuesta', res)*/
          if(res.data){
            let datatoValue = {
              vi: dataToObject.vi,
              salt: dataToObject.salt,
              passPhrase: dataToObject.passPhrase,
              cypherData: res.data
            }
            cypherMessage = await getCypherData(datatoValue)
          }
          if(cypherMessage !== undefined){
            console.log(cypherMessage)
            cyperMessageToObject = JSON.parse(cypherMessage.plainText)
            console.log('Objeto a evaluar', cyperMessageToObject)
          }
            if(cyperMessageToObject !== undefined && cyperMessageToObject.resultadoPayw === 'A'){
              if(formData!==null){
                uploadTaxCard({
                  file: formData.pdfFile,
                  fileName:fileName
                })
                updateTaxData({
                  data: formData.student_tax_data,
                  user_id: user.student_id
                })
                addPayment({
                  data:{
                    course_id: course.course_id,
                    student_id: user.student_id,
                    payment_successfull: 1,
                    payment_amount: paymentData.Amount,
                    payment_reference: paymentData.ControlNumber,
                    payment_invoice: "FACTURACION",
                    payment_date: fechaFormateada,
                    payment_modality: modality
                  }
                })
              }
              else{
                addPayment({
                  data:{
                    course_id: course.course_id,
                    student_id: user.student_id,
                    payment_successfull: 1,
                    payment_amount: paymentData.Amount,
                    payment_reference: paymentData.ControlNumber,
                    payment_invoice: "SIN_FACTURACION",
                    payment_date: fechaFormateada,
                    payment_modality: modality
                  }
                })
              }
              await updateMaxRange()
              generatePDF({
                course: course,
                student: user,
                reference: paymentData.ControlNumber
              })
              router.push('/ensenanza/offer')
            }
        },
        onCancel: function (res) {
          localStorage.removeItem('cyperData')
          Swal.fire({
            title: "Operación cancelada",
            icon: "error",
            showCloseButton: true,
            showConfirmButton: false,
            position: "center",
          });
        },
      });
    }
  }
  const startFreePayment = async()=>{
    if(user.student_role === 'PERSONAL_HIMFG' && course.course_price !== 0){
      addPayment({
        data:{
          course_id: course.course_id,
          student_id: user.student_id,
          payment_successfull: 1,
          payment_amount: 0,
          payment_reference: paymentData.ControlNumber,
          payment_invoice: "SIN_FACTURACION",
          payment_date: fechaFormateada,
          payment_modality: modality
        }
      })
      Swal.fire({
        title: "Documentación enviada a revisión",
        text:'Una vez revisada, se te hará llegar la confirmación de acceso al curso via email',
        icon: "success",
        showCloseButton: true,
        showConfirmButton: false,
        position: "center",
      })
    }
    if((user.student_role === 'PERSONAL_HIMFG') && course.course_price === 0){
      addPayment({
        data:{
          course_id: course.course_id,
          student_id: user.student_id,
          payment_successfull: 1,
          payment_amount: 0.00,
          payment_reference: paymentData.ControlNumber,
          payment_invoice: "SIN_FACTURACION",
          payment_date: fechaFormateada,
          payment_modality: modality
        }
      })
      Swal.fire({
        title: "Inscripción exitosa",
        text:'Se descargará un PDF con los datos del curso',
        icon: "success",
        showCloseButton: true,
        showConfirmButton: false,
        position: "center",
      })
      generatePDF({
        course: course,
        student: user,
        reference: paymentData.ControlNumber
      })
    }
    if(user.student_role === 'ESTUDIANTE' && course.course_price !== 0){
      addPayment({
        data:{
          course_id: course.course_id,
          student_id: user.student_id,
          payment_successfull: 1,
          payment_amount: 0,
          payment_reference: paymentData.ControlNumber,
          payment_invoice: "SIN_FACTURACION",
          payment_date: fechaFormateada,
          payment_modality: modality
        }
      })
      Swal.fire({
        title: "Documentación enviada a revisión",
        text:'Una vez revisada, se te hará llegar la confirmación de acceso al curso via email',
        icon: "success",
        showCloseButton: true,
        showConfirmButton: false,
        position: "center",
      })
    }
    if((user.student_role === 'ESTUDIANTE') && course.course_price === 0){
      addPayment({
        data:{
          course_id: course.course_id,
          student_id: user.student_id,
          payment_successfull: 1,
          payment_amount: 0.00,
          payment_reference: paymentData.ControlNumber,
          payment_invoice: "SIN_FACTURACION",
          payment_date: fechaFormateada,
          payment_modality: modality
        }
      })
      Swal.fire({
        title: "Inscripción exitosa",
        text:'Se descargará un PDF con los datos del curso',
        icon: "success",
        showCloseButton: true,
        showConfirmButton: false,
        position: "center",
      })
      generatePDF({
        course: course,
        student: user,
        reference: paymentData.ControlNumber
      })
    }
    if(user.student_role === 'EXTERNO'){
      addPayment({
        data:{
          course_id: course.course_id,
          student_id: user.student_id,
          payment_successfull: 1,
          payment_amount: 0.00,
          payment_reference: paymentData.ControlNumber,
          payment_invoice: "SIN_FACTURACION",
          payment_date: fechaFormateada,
          payment_modality: modality
        }
      })
      Swal.fire({
        title: "Inscripción exitosa",
        text:'Se descargará un PDF con los datos del curso',
        icon: "success",
        showCloseButton: true,
        showConfirmButton: false,
        position: "center",
      })
      generatePDF({
        course: course,
        student: user,
        reference: paymentData.ControlNumber
      })
    }
    await updateMaxRange()
    router.push('/ensenanza/offer')
  }
  const handleImageChange =(evt)=>{
    const newFileName = randomFileName()
    setFileName(newFileName)
    setFormData({
      [evt.target.name]: evt.target.files[0],
      student_tax_data:`https://archivos.him.edu.mx/constancias-cursos/${newFileName}`
    })
  }
  return (
    <>
      <div className={`${styles.paymentWrapper} flexContainer`}>
        <div className={`${styles.paymentDetails} boxShadow`}>
          <h3>Detalles de la compra</h3>
          {!course ? null : (
            <>
              <figure>
                {!course.course_image ? (
                  <Image
                    src="https://res.cloudinary.com/diuxbqmn5/image/upload/v1676678760/banner-80_zhlxd1.webp"
                    alt='Imágen no disponible'
                    width={100}
                    height={100}
                  />
                ) : (
                  <Image
                  src={course.course_image}
                  width={100} height={100}
                  alt='Imágen no disponible'
                  />
                )}
              </figure>
              <span>Curso: {course.course_name}</span>
              <span>
                Precio: 
                <span className={styles.coursePrice}>
                   {
                    user.student_role === 'PERSONAL_HIMFG' || user.student_role === 'ESTUDIANTE'
                    ?
                    `Gratuito`
                    :
                    `$${course.course_price} mxn`
                   }
                   {
                    /*user.student_role === 'EXTERNO'
                    ?
                    `$${course.course_price} mxn`
                    :
                    null*/
                   }
                </span>
              </span>
              <form className={styles.invoiceSelectedForm}>
                {
                  user.student_role === 'EXTERNO' && course.course_price !== 0?
                  <div>
                    <input type='checkbox' onChange={()=>setIsSelected(!isSelected)}/>
                    <label>Facturación</label>
                  </div>
                  :
                  null
                }
                {
                  isSelected && course.course_price !== 0?
                  <>
                    <label>Inserte su constancia de situación fiscal en formato PDF</label>
                    <input
                    type='file'
                    required
                    name='pdfFile'
                    onChange={handleImageChange}
                    />
                  </>
                  :
                  null
                }
              </form>
              {
                user.student_role === 'ESTUDIANTE' && course.course_price !== 0
                ?
                <button onClick={startFreePayment}>Mandar documentación a revisión</button>
                :
                null
              }
              {
                user.student_role === 'ESTUDIANTE' && course.course_price == 0
                ?
                <button onClick={startFreePayment}>Inscripción gratuita</button>
                :
                null
              }
              {
                user.student_role === 'PERSONAL_HIMFG' && course.course_price !== 0
                ?
                <button onClick={startFreePayment}>Mandar documentación a revisión</button>
                :
                null
              }
              {
                (user.student_role === 'PERSONAL_HIMFG') && course.course_price === 0
                ?
                <button onClick={startFreePayment}>Inscripción gratuita</button>
                :
                null
              }
              {
                user.student_role === 'EXTERNO' && course.course_price === 0
                ?
                <button onClick={startFreePayment}>Inscripción gratuita</button>
                :
                null
              }
              {
                user.student_role === 'EXTERNO' && course.course_price !== 0
                ?
                <button onClick={startPayment}>Pagar</button>
                :
                null
              }
            </>
          )}
        </div>
      </div>
      <div className={`${styles.debitCards} flexContainer`}>
        <figure>
          <Image
            src={visa}
            alt='VISA'
          />
        </figure>
        <figure>
          <Image
            src={mastercard}
            alt='Mastercard'
          />
        </figure>
      </div>
    </>
  );
};
