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
        Amount: `${course.course_employee_price}.00`,
        ControlNumber: `${reference(course.course_id)}`
      })
    }else if(course && user && user.student_role === 'ESTUDIANTE'){
      setPaymentData({
        ...data,
        Amount: `${course.course_student_price}.00`,
        ControlNumber: `${reference(course.course_id)}`
      })
    }else if(course && user && user.student_role === 'EXTERNO'){
      setPaymentData({
        ...data,
        Amount: `${course.course_price}.00`,
        ControlNumber: `${reference(course.course_id)}`
      })
    }
    setTimeout(() => {
      Payment.setEnv("pro")
    }, 1000)
  },[])

  useEffect(()=>{
    if(course && course.course_price===0 && user && paymentData){
      startFreePayment()
    }
  },[paymentData])
  const getCypherData = async(data)=>{
    try {
      const resp = await axios.post(
        'https://cemesatelcyper-001-site1.mtempurl.com/aes/decrypt',
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
  const sendEmail = async()=>{
    try {
      const resp = await axios.post(`${process.env.BASE_URL_API}api/emails/send-email`,{
        course_name: course.course_name,
        course_start_date: course.course_start_date,
        course_finish_date: course.course_finish_date,
        course_place: course.course_place,
        course_url: course.course_url,
        course_password:course.course_password,
        student_email: user.student_email,
        student_password: user.student_password,
        payment_reference: paymentData.ControlNumber
      })
      console.log(resp.data.message)
    } catch (error) {
      console.log(error)
    }
  }
  const startPayment = () => {
    showModal()
    setTimeout(()=>{
      console.log(dataToObject)
    },1000)
    if (Payment && user/*.student_role === 'EXTERNO'*/) {
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
            console.log(cyperMessageToObject.resultadoPayw)
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
              if(user.student_role !== 'EXTERNO'){
                Swal.fire({
                  title: "Registro en proceso - Documentación en revisión",
                  text:`Su documentación ha sido mandada,
                  una vez revisada, se le harán llegar los datos de de acceso a
                  la siguiente dirección de correo: ${user.student_email}, favor de revisar
                  su bandeja de entrada, spam o correo no deseado`,
                  icon: "warning",
                  showCloseButton: true,
                  showConfirmButton: false,
                  position: "center",
                })
              }
              if(user.student_role==='EXTERNO'){
                await sendEmail()
                Swal.fire({
                  title: "Pago exitoso",
                  text:`Se han envíado los datos de de acceso a la siguiente dirección de correo: ${user.student_email}, favor de revisar
                  su bandeja de entrada, spam o correo no deseado
                  `,
                  icon: "success",
                  showCloseButton: true,
                  showConfirmButton: false,
                  position: "center",
                })
                /*generatePDF({
                  course: course,
                  student: user,
                  reference: paymentData.ControlNumber
                })*/
              }
              router.push('/direccion/ensenanza')
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
    if(user.student_role !== 'EXTERNO'){
      Swal.fire({
        title: "Registro en proceso - Documentación en revisión",
        text:`Su documentación ha sido enviada,
        una vez revisada, se le harán llegar los datos de acceso a
        la siguiente dirección de correo: ${user.student_email}.
        Favor de revisar su bandeja de entrada, spam o correo no deseado.`,
        icon: "warning",
        showCloseButton: true,
        showConfirmButton: false,
        position: "center",
      })
    }
    if(user.student_role === 'EXTERNO'){
      Swal.fire({
        title: "Registro exitoso",
        text:`Se han enviado los datos de de acceso a la siguiente dirección de correo: ${user.student_email}, favor de revisar
        su bandeja de entrada, spam o correo no deseado`,
        icon: "success",
        showCloseButton: true,
        showConfirmButton: false,
        position: "center",
      })
      await sendEmail()
      /*generatePDF({
        course: course,
        student: user,
        reference: paymentData.ControlNumber
      })*/
    }
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
    await updateMaxRange()
    router.push('/direccion/ensenanza')
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
      {
        course && course.course_price === 0 ?
        null
        :
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
                    user.student_role === 'ESTUDIANTE'
                    ?
                    `$${course.course_student_price} mxn`
                    :
                    null
                   }
                   {
                    user.student_role === 'PERSONAL_HIMFG'
                    ?
                    `$${course.course_employee_price} mxn`
                    :
                    null
                   }
                   {
                    user.student_role === 'EXTERNO'
                    ?
                    `$${course.course_price} mxn`
                    :
                    null
                   }
                </span>
              </span>
              <form className={styles.invoiceSelectedForm}>
                {
                  course.course_price !== 0?
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
                user.student_role === 'ESTUDIANTE' && course.course_student_price == 0
                ?
                <button onClick={startFreePayment}>Inscripción Gratuita</button>
                :
                null
              }
              {
                user.student_role === 'ESTUDIANTE' && course.course_student_price !== 0
                ?
                <button onClick={startPayment}>Pagar</button>
                :
                null
              }
              {
                user.student_role === 'PERSONAL_HIMFG' && course.course_employee_price !== 0
                ?
                <button onClick={startPayment}>Pagar</button>
                :
                null
              }
              {
                (user.student_role === 'PERSONAL_HIMFG') && course.course_employee_price === 0
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
      }
    </>
  );
};
