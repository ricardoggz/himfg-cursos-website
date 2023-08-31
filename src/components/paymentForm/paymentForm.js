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

export const PaymentForm = () => {
  const [paymentData, setPaymentData] = useState(null)
  const [amount, setAmount] = useState(null)
  const router = useRouter()
  const { course } = useContext(CourseContext)
  const { user } = useContext(UserContext)
  useEffect(() => {
    if(!course){
      router.push('/ensenanza/offer')
    }
    if(course && user && user.student_grade === 'Médico' && user.student_license && course.course_employee_price){
      setPaymentData({
        ...data,
        Amount: `${course.course_employee_price}.00`,
        ControlNumber: `${reference(course.course_id)}`
      })
    }else if(course && user && user.student_grade === 'Estudiante' && user.student_license && course.course_student_price){
      setPaymentData({
        ...data,
        Amount: `${course.course_student_price}.00`,
        ControlNumber: `${reference(course.course_id)}`
      })
    }else if(course){
      setPaymentData({
        ...data,
        Amount: `1.00`,
        ControlNumber: `${reference(course.course_id)}`
      })
    }
    setTimeout(() => {
      Payment.setEnv("pro");
    }, 1000);
  }, []);
  const startPayment = () => {
    if (Payment) {
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
            if(res.status3D === "200"){
              addPayment({
                data:{
                  course_id: course.course_id,
                  student_id: user.student_id,
                  payment_successfull: 1,
                  payment_amount: paymentData.Amount,
                  payment_reference: paymentData.ControlNumber
                }
              })
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
  };
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
                  <Image src={course.course_image} width={100} height={100} />
                )}
              </figure>
              <span>Curso: {course.course_name}</span>
              <span>
                Precio: 
                <span className={styles.coursePrice}>
                   {
                    user.student_license && user.student_grade === 'Estudiante' && course.course_student_price 
                    ?
                    `$${course.course_student_price}`
                    :
                    null
                   }
                   {
                    user.student_license && user.student_grade === 'Médico' && course.course_employee_price
                    ?
                    `$${course.course_employee_price}`
                    :
                    null
                   }
                   {
                    course.course_employee_price===null && course.course_student_price===null
                    ?
                    `$${course.course_price}`
                    :
                    null
                   }
                </span>
              </span>
              <button onClick={startPayment}>Comprar</button>
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
