import { useState } from 'react'
import axios from 'axios'
import { useOnChange } from '@/hooks'
import styles from './styles.module.css'
import { Container, Title } from "@/components"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

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
    const privacityAd = ()=> withReactContent(Swal).fire({
        html: 
        <div>
            <span>Aviso de privacidad</span>
        </div>,
        showCloseButton:true,
        showConfirmButton:false,
        customClass:{
            htmlContainer: styles.fileList
        },width:800

    })
    const rules = ()=> withReactContent(Swal).fire({
        html: 
        <>
            <span>
                HOSPITAL INFANTIL DE MÉXICO FEDERICO GÓMEZ
                DIRECCIÓN DE ENSEÑANZA Y DESARROLLO ACADÉMICO
                REGLAMENTO SERVICIO SOCIAL, ESTANCIAS Y MÉDICOS
                INTERNOS DE PREGRADO
            </span>
            <br />
            <ul className={styles.ruleList}>
                <li>1) Cumplir las actividades establecidas en el Servicio o Departamento asignado</li>
                <li>2) Portar en todo momento su credencial en un lugar visible.</li>
                <li>
                    3) Cumplir debidamente las indicaciones de las personas designadas para impartir el
                    adiestramiento o paradirigir el desarrollo de las actividades (tutores o encargados).
                </li>
                <li>
                    4) Asistir a las actividades académico/asistenciales hospitalarias que se le indiquen, en
                    los horarios establecidos y de acuerdo a las necesidades de la Institución, así como
                    permanecer en la institución, durante el tiempo establecido por el servicio asignado.
                </li>
                <li>
                    5) Dar cabal cumplimiento a los Códigos de Ética y de Conducta referidos en la página
                    web del HIMFG,así como a este Reglamento.
                </li>
                <li>
                    6) Cumplir con las políticas institucionales denominadas “Protección y manejo por
                    cualquier medio, íntegro y responsable de toda la información personal emanada del
                    proceso de atención sanitaria al que se ven sujetos nuestros pacientes” y “Lineamientos
                    normativos para regular el uso de las Tecnologías de la Información y de la Comunicación
                    (TIC’s) durante la atención médica”, en donde se manifiesta que la información recabada
                    durante el proceso de atención médica deberá manejarse con total confidencialidad por
                    los profesionales de la salud en todos sus niveles, por lo tanto, no podrán compartirse
                    videos, imágenes o documentos emanados de dicho proceso de atención por ningún
                    medio, ya sea escrito, electrónico o telefónico y por ningún tipo de red social (Facebook,
                    Twitter, Instagram, TikTok o alguna otra).
                </li>
                <li>
                    7) Las constancias de actividades académicas de los alumnos (terminación o liberación)
                    serán proporcionadas únicamente por la Dirección de Enseñanza y Desarrollo Académico,
                    previa solicitud por escrito y por lo menos con una semana de anticipación, después de
                    haber recibido la solicitud del Departamento o Servicio de Rotación.
                </li>
                <li>
                    8) Deberá seguir las indicaciones de sus superiores en todo momento como parte de la
                    estructura jerárquica del HIMFG
                </li>
                <li>
                    9) Los alumnos están enterados de que una infección nosocomial incrementa
                    importantemente el riesgo de mortalidad de los pacientes, costos hospitalarios y estancia
                    hospitalaria. Por tal razón deberán de cumplir OBLIGATORIAMENTE CON LA HIGIENE DE MANOS antes y después del contacto con un paciente, su entorno o sus dispositivos y
                    técnicas antisépticas en todo procedimiento que realicen. Así mismo todas las personas
                    que tengan el cabello largo, deberán de traerlo RECOGIDO (actividades asistenciales con
                    el paciente en área de hospitalización y consulta externa). Uso OBLIGATORIO de
                    cubrebocas. El incumplimiento de lo anterior condicionará la suspensión inmediata de la
                    estancia por el hospital, sin responsabilidad alguna para la institución.
                </li>
                <li>
                    10) El alumno deberá notificar a su inmediato superior cuando requiera ausentarse de sus labores
                    para asistir a una determinada actividad académica o de investigación o por cuestiones de salud
                    justificando en todo momento su ausencia y de no ser así se dará de baja inmediatamente.
                </li>
                <li>
                    11) Ningún alumno puede ser portavoz de informes a la prensa o de carácter oficial, sobre
                    icos o científicos de la Institución.
                </li>
                <li>
                    12) Está estrictamente prohibido aceptar o solicitar remuneración o dádivas de pacientes o de
                    acerlo es causa inmediata de baja.
                </li>
                <li>
                    13) Está prohibido el uso o introducción de drogas y bebidas alcohólicas a las instalaciones. El
                    Hospital Infantil de México es un área libre de humo de tabaco, el fumar dentro de sus
                    instalaciones constituye un delito. En caso de sorprenderlo se sancionará de acuerdo a la ley.
                </li>
                <li>
                    14) En caso de renuncia -independientemente del motivo- deberá siempre notificarse
                    por escrito a la Dirección de Enseñanza y Desarrollo Académico.
                </li>
            </ul>
        </>,
        showCloseButton:true,
        showConfirmButton:false,
        customClass:{
            htmlContainer: styles.ruleList
        },width:800

    })
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
                    <span
                    onClick={privacityAd}
                    className={styles.privacity}
                    > aviso de privacidad </span>
                    y
                    <span className={styles.privacity} onClick={rules}> reglamento</span>
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