import axios from "axios"
import Image from "next/image"
import Swal from "sweetalert2"
import { reference } from "./reference"
import { useRouter } from "next/router"
import { data, cerKey } from "./consts"
import { useEffect, useState } from "react"
import visa from "../../assets/visaLogo.png"
import styles from "./paymentForm.module.css"
import mastercard from "../../assets/mastercard.png"
import { cypherData, dataToObject } from "./cyperData"
import { GeneratePDF } from "./generatePDF"

export const PaymentForm = () => {
  const [paymentData, setPaymentData] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()
  const onChange = (evt) => {
    setPaymentData({
      ...data,
      [evt.target.name]: `${evt.target.value}.00`,
      ControlNumber: reference(456),
    })
  }
  const showModal = () => {
    setIsModalOpen(!isModalOpen)
    return localStorage.getItem('cyperData')
  }
  useEffect(() => {
    setTimeout(() => {
      Payment.setEnv("pro")
    }, 1000)
  }, [])
  const getCypherData = async (data) => {
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
  const startPayment = (evt) => {
    evt.preventDefault()
    showModal()
    if (Payment) {
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
          if (res.data) {
            let datatoValue = {
              vi: dataToObject.vi,
              salt: dataToObject.salt,
              passPhrase: dataToObject.passPhrase,
              cypherData: res.data
            }
            cypherMessage = await getCypherData(datatoValue)
          }
          if (cypherMessage !== undefined) {
            console.log(cypherMessage)
            cyperMessageToObject = JSON.parse(cypherMessage.plainText)
            console.log('Objeto a evaluar', cyperMessageToObject)
            console.log(cyperMessageToObject.resultadoPayw)
          }
          if (cyperMessageToObject !== undefined && cyperMessageToObject.resultadoPayw === 'A') {
            Swal.fire({
              title: "Su donación ha sido procesada con éxito",
              text: `Gracias por su apoyo`,
              icon: "success",
              showCloseButton: true,
              showConfirmButton: false,
              position: "center",
            });
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
  return (
    <>
      <div className={`${styles.paymentWrapper}`}>
        <div>
          <form className={`${styles.paymentForm} boxShadow borderRadius`} onSubmit={startPayment}>
            <div className={`${styles.paymentImage} borderRadius`}>
              <img src='https://www.canchammx.com//packages/cancham/images/logo.png'/>
            </div>
            <label>
              <a href='https://himfg.edu.mx/archivos/tesoreria/formato-de-donacion.docx'>
                Descargue el formato de donación
              </a>
            </label>
            <label>Nombre:</label>
            <input type='text' name='donativo_carta_motivo'/>
            <label>Ingrese su formato de donación firmado:</label>
            <input type='file' name='donativo_carta_motivo'/>
            <label>Inserte la cantidad a donar:</label>
            <input type='number' name='Amount' required onChange={onChange} />
            <label>¿Requiere factura?</label>
            <div>
              <label>Sí</label>
              <input type='radio' name='donativo_factura'/>
            </div>
            <div>
              <label>No</label>
              <input type='radio' name='donativo_factura'/>
            </div>
            <button className={styles.paymentButton}>
              <img src='https://himfg.edu.mx/archivos/graficos/banorte/BANORTE.jpg' />
              <span>Donar</span>
            </button>
          </form>
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
