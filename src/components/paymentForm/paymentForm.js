import { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Swal from "sweetalert2";
import styles from "./paymentForm.module.css";
import { data, cerKey } from "./consts";
import visa from "../../assets/visaLogo.png";
import mastercard from "../../assets/mastercard.png";
import { cypherData } from "./cyperData";
import { CourseContext } from '@/contexts'
import { reference } from "./reference";

export const PaymentForm = () => {
  const [paymentData, setPaymentData] = useState(null)
  const router = useRouter()
  const { course } = useContext(CourseContext)
  useEffect(() => {
    if(!course){
      router.push('/ensenanza/offer')
    }
    if(course){
      setPaymentData({
        ...data,
        Amount: `${course.course_price}.00`,
        ControlNumber: `${reference(course.course_id)}`
      })
    }
    setTimeout(() => {
      Payment.setEnv("pro");
    }, 1000);
  }, []);
  console.log(paymentData)
  const startPayment = (evt) => {
    evt.preventDefault();
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
          var resp = JSON.stringify(res, undefined, 4);
          console.log(resp);
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
          <Image src={visa} />
        </figure>
        <figure>
          <Image src={mastercard} />
        </figure>
      </div>
    </>
  );
};
