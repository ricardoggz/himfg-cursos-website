import { useEffect, useContext, useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import Swal from "sweetalert2"
import styles from "./paymentForm.module.css"
import { data, cerKey } from "./consts"
import visa from "../../assets/visaLogo.png"
import mastercard from "../../assets/mastercard.png"
import { cypherData } from "./cyperData"
import { CourseContext, UserContext } from '@/contexts'
import { reference } from "./reference"
import { addPayment } from "@/services"
import { generatePDF } from "./generatePDF"
import { uploadFile, updateTaxData } from '@/services'

export const PaymentForm = () => {
  const [paymentData, setPaymentData] = useState(null)
  const [isSelected, setIsSelected] = useState(false)
  const [formData, setFormData] = useState(null)
  const router = useRouter()
  const { course } = useContext(CourseContext)
  const { user } = useContext(UserContext)
  const fecha = new Date(); // Obtén la fecha actual
  // Utiliza la función `toISOString()` para obtener una cadena en formato 'YYYY-MM-DDTHH:mm:ss.sssZ'
  const fechaFormateada = fecha.toISOString().slice(0, 19).replace('T', ' ');
  useEffect(() => {
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
  }, [])
  console.log(formData)
  const startPayment = () => {
    if (Payment && user.student_role === 'EXTERNO') {
      Payment.setEnv("pro");
      let xOBJ;
      xOBJ = cypherData(paymentData, cerKey);
      Payment.startPayment({
        Params: xOBJ,
        onClosed: function (res) {
          console.log(res);
        },
        onError: function (res) {
          console.log(res);
        },
        onSuccess: function (res) {
            if(res.resultadoPayw === "A"){
              if(formData!==null){
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
                    payment_date: fechaFormateada
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
                    payment_date: fechaFormateada
                  }
                })
              }
              generatePDF({
                course: course,
                student: user,
                reference: paymentData.ControlNumber
              })
              router.push('/ensenanza/offer')
            }
        },
        onCancel: function (res) {
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
  const startFreePayment = ()=>{
    if(user.student_role === 'PERSONAL_HIMFG' || user.student_role === 'ESTUDIANTE'){
      addPayment({
        data:{
          course_id: course.course_id,
          student_id: user.student_id,
          payment_successfull: 1,
          payment_amount: 0,
          payment_reference: paymentData.ControlNumber
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
      router.push('/ensenanza/offer')
    }
  }
  const handleImageChange = async(evt)=>{
    try {
      const response = await uploadFile({file: evt.target.files[0]})
      setFormData({
        [evt.target.name]: response
      })
      return response
    } catch (error) {
      console.log(error)
    }
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
                  user.student_role === 'EXTERNO' ?
                  <div>
                    <input type='checkbox' onChange={()=>setIsSelected(!isSelected)}/>
                    <label>Facturación</label>
                  </div>
                  :
                  null
                }
                {
                  isSelected ?
                  <>
                    <label>Inserte una fotografía de su constancia de situación fiscal</label>
                    <input type='file' required name='student_tax_data' onChange={handleImageChange}/>
                  </>
                  :
                  null
                }
              </form>
              {
                user.student_role === 'PERSONAL_HIMFG' || user.student_role === 'ESTUDIANTE'
                ?
                <button onClick={startFreePayment}>Mandar documentación a revisión</button>
                :
                <button onClick={startPayment}>Comprar</button>
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
