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
import { CourseContext } from '@/contexts'
import { reference } from "./reference";
import { formatDate } from "@/helpers";

export const PaymentForm = () => {
  const [paymentData, setPaymentData] = useState(null)
  const router = useRouter()
  const { course } = useContext(CourseContext)
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "in",
    format: [12, 12]
  })
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
          doc.text(`
            Felicidades, has comprado satisfactoriamente el curso:
            ${course.course_name}

            Datos de curso:
            Costo: $ ${course.course_price} mxn
            Fecha de inicio: ${formatDate(course.course_start_date)}
            Fecha de término: ${formatDate(course.course_finish_date)}
            URL de curso:
            https://www.test.him.edu.mx/video/${course.course_url}.html
            Contraseña: ${course.course_password}
          `,1, 1);
          if(res.status3D === 200){
            doc.save(`${course.course_name}.pdf`)
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
              <span>Precio: ${course.course_price} MXN</span>
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
