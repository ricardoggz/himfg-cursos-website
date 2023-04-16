import Script from "next/script";
import Head from "next/head";
import { PaymentForm } from "../components";

const PaymentCourse = ()=>{
  return (
    <>
      <Head>
        <title>Pago</title>
      </Head>
        <Script
          src='https://multicobros.banorte.com/orquestador/lightbox/checkout.js'
          strategy="beforeInteractive"
        />
        <Script
          src='https://multicobros.banorte.com/orquestador/resources/js/jquery-3.3.1.js'
          strategy="beforeInteractive"
        />
      <PaymentForm />
    </>
  )
}

export default PaymentCourse
