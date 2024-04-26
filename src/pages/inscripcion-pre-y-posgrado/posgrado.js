import { useState } from 'react'
import axios from 'axios'
import { useOnChange } from '@/hooks'
import styles from './styles.module.css'
import { Container, Title } from "@/components"

export default function PosGradeForm(){
    const [file, setFile] = useState(null)
    const [inputData, onChange, onReset] = useOnChange()
    const handleFileChange=(evt)=>{
        setFile(evt.target.files[0])
    }
    const handleSubmit = async()=>{
        try {
            const data ={

            }
            const response = await axios.post(
                'https://archivos.him.edu.mx/inscripciones-pre-grado/upload.php',
                data
            )
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Container>
            <Title>Cédula identificación del Residente Rotante - datos del médico rotante</Title>
            <form
                className={`flexContainer ${styles.inscriptionForm}`}
                onSubmit={handleSubmit}
            >
                <label>
                    <input type='checkbox' required/>
                    Acepto el
                    <span> aviso de privacidad </span>
                    y
                    <span> reglamento</span>
                </label>
                <label>Fecha</label>
                <input type='date' name='start_date' onChange={onChange}/>
                <label>Fotografía</label>
                <input type='file' name='start_date' onChange={onChange}/>
                <label>Nombre</label>
                <input type='text' name='start_date' onChange={onChange}/>
                <label>Nacionalidad</label>
                <input type='text' name='start_date' onChange={onChange}/>
                <label>Fecha de nacimiento</label>
                <input type='date' name='start_date' onChange={onChange}/>
                <label>Especialidad</label>
                <input type='text' name='start_date' onChange={onChange}/>
                <label>Grado</label>
                <input type='text' name='start_date' onChange={onChange}/>
                <label>Institución de procedencia</label>
                <input type='text' name='start_date' onChange={onChange}/>
                <label>Teléfono y extensión de la Jefatura de Enseñanza de Procedencia</label>
                <input type='text' name='start_date' onChange={onChange}/>
                <label>Periódo de rotación (fecha de inicio)</label>
                <input type='date' name='start_date' onChange={onChange}/>
                <label>Periódo de rotación (fecha de termino)</label>
                <input type='date' name='start_date' onChange={onChange}/>
                <label>Servicio al que va rotar</label>
                <input type='text' name='start_date' onChange={onChange}/>
                <label>Teléfono celular</label>
                <input type='number' name='start_date' onChange={onChange}/>
                <label>Teléfono local</label>
                <input type='number' name='start_date' onChange={onChange}/>
                <label>Domicilio permanente</label>
                <input type='text' name='start_date' onChange={onChange}/>
                <label>Correo electrónico</label>
                <input type='email' name='start_date' onChange={onChange}/>
                <label>Nombre y teléfono de algún familiar (contacto de emergencia)</label>
                <input type='text' name='start_date' onChange={onChange}/>
                <div className={styles.inscriptionButtons}>
                    <button className={styles.buttonSubmit}>Enviar datos</button>
                    <button className={styles.buttonReset}>Borrar datos</button>
                </div>
            </form>
        </Container>
    )
}