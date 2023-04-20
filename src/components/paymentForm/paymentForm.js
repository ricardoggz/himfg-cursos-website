import { useEffect, useState } from "react"
import Image from "next/image"
import styles from './paymentForm.module.css'
import { data } from './consts'
import visa from '../../assets/visaLogo.png'
import mastercard from '../../assets/mastercard.png'

export const PaymentForm = ()=>{
    const [ course, setCourse ] = useState(null)
    useEffect(()=>{
        setCourse(JSON.parse(localStorage.getItem('course')))
        setTimeout(()=>{
            Payment.setEnv('pro')
        },1000)
    },[])
    const startPayment = (evt)=>{
        evt.preventDefault()
        if(Payment){
            Payment.setEnv('pro')
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
        <>
            <div className={`${styles.paymentWrapper} flexContainer`}>
                <div className={`${styles.paymentDetails} boxShadow`}>
                    <h3>Detalles de la compra</h3>
                    {
                        !course ?
                        null
                        :
                        <>
                            <figure>
                                {
                                    !course.course_image?
                                    <Image
                                        src='https://res.cloudinary.com/diuxbqmn5/image/upload/v1676678760/banner-80_zhlxd1.webp'
                                        width={100}
                                        height={100}
                                    />
                                    :
                                    <Image
                                        src={course.course_image}
                                        width={100}
                                        height={100}
                                    />
                                }
                            </figure>
                            <span>
                                Curso: {course.course_name}
                            </span>
                            <span>
                                Precio: ${course.course_price} MXN
                            </span>
                        </>
                    }
                </div>
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
                    <button>Pagar</button>
                </form>
            </div>
            <div className={`${styles.debitCards} flexContainer`}>
                <figure>
                    <Image src={visa}/>
                </figure>
                <figure>
                    <Image src={mastercard}/>
                </figure>
            </div>
        </>
    )
}