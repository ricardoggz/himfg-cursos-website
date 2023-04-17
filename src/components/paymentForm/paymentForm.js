import { useEffect, useState } from "react"
import styles from './paymentForm.module.css'
import { data } from './consts'

export const PaymentForm = ()=>{
    const [ course, setCourse ] = useState(null)
    useEffect(()=>{
        setCourse(JSON.parse(localStorage.getItem('course')))
    },[])
    useEffect(()=>{
        Payment.setEnv('pro')
    },[])
    const startPayment = (evt)=>{
        evt.preventDefault()
        if(Payment){
            //Payment.setEnv('pro')
            let xOBJ
            xOBJ=Payment.encrypt({
                params: data
            })
            Payment.startPayment({
                params: {
                    crypt: xOBJ
                },
                onClosed: function (res) {
                    console.log(res)
                },
                onError: function (res) {
                    console.log(res)
                },
                onSuccess: function (res) {
                    var resp = JSON.stringify(res, undefined, 4);
                    console.log(resp);
                },
                onCancel: function (res) {
                    console.log(res)
                }
            });
        }
    }
    return (
        <form
            className={`${styles.paymentForm} boxShadow`}
            onSubmit={startPayment}
        >
            <label>Nombre(s):</label>
            <input type='text' required/>
            <label>Apellido(s):</label>
            <input type='text' required/>
            <label>Calle:</label>
            <input type='text' required/>
            <label>Número exterior:</label>
            <input type='text' required/>
            <label>Colonia:</label>
            <input type='text' required/>
            <label>Delegación/Municipio:</label>
            <input type='text' required/>
            <label>Ciudad:</label>
            <input type='text' required/>
            <label>Estado:</label>
            <input type='text' required/>
            <label>País:</label>
            <input type='text' required/>
            <label>Número de teléfono:</label>
            <input type='number' required/>
            <label>Código postal:</label>
            <input type='text' required/>
            <label>Email:</label>
            <input type='email' required/>
            <button>Enviar</button>
        </form>
    )
}