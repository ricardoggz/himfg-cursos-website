import { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import jsPDF from "jspdf";
import Swal from "sweetalert2";
import styles from "./paymentForm.module.css";
import { data, cerKey } from "./consts";
import visa from "../../assets/visaLogo.png";
import mastercard from "../../assets/mastercard.png";
import { cypherData } from "./cyperData";
import { CourseContext, UserContext } from '@/contexts'
import { reference } from "./reference";
import { formatDate } from "@/helpers";
import { addPayment } from "@/services";

export const PaymentForm = () => {
  const [paymentData, setPaymentData] = useState(null)
  const router = useRouter()
  const { course } = useContext(CourseContext)
  const { user } = useContext(UserContext)
  const doc = new jsPDF();
  useEffect(() => {
    if(!course){
      router.push('/ensenanza/offer')
    }
    if(course){
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
            doc.setFontSize(40);
            doc.setFont("helvetica", "bold");
            doc.text(`Registro exitoso`, 30, 30);
            doc.setFontSize(15);
            const docWidth = doc.internal.pageSize.getWidth();
            const docHeight = doc.internal.pageSize.getHeight();
            doc.line(0, 60, docWidth, 60);
            doc.setFont("helvetica", "italic");
            const splitDescription = doc.splitTextToSize(
            `
            Felicidades, ha adquirido correctamente el curso:
            ${course.course_name}
            
            Inicia: ${formatDate(course.course_start_date)}
            
            Termina: ${formatDate(course.course_finish_date)}
        
            ${
              !course.course_url ? ''
              :
              `Puede verlo en:
              https://him.edu.mx/video/${course.course_url}.html`
            }
        
            ${
              !course.course_password ? ''
              :'Contraseña de acceso: ' + course.course_password
            }
            `,
              docWidth - 20
            );
            doc.text(splitDescription, 10, 80);
            doc.setFontSize(20);
            doc.setFont("helvetica");
            //doc.text('characterData.type.name', docWidth - 20, 45, { align: "right" });
            doc.line(0, docHeight - 60, docWidth, docHeight - 60);
            if(user){
              doc.text(`Tu Nombre: ${user.student_name}`, 10, docHeight - 40);
              doc.text(`Tu email: ${user.student_email}`, 10, docHeight - 30);
              doc.text(`Tu contraseña: ${user.student_password}`, 10, docHeight - 20);
            }
            if(res.status3D === "200"){
              doc.save(`${course.course_name}.pdf`)
              addPayment({
                data:{
                  course_id: course.course_id,
                  student_id: user.student_id,
                  payment_successfull: 1,
                  payment_reference: paymentData.ControlNumber
                }
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
                   ${course.course_price} MXN
                </span>
              </span>
              <button onClick={startPayment}>Pagar curso</button>
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
