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
                LINEAMIENTOS PARA MÉDICOS RESIDENTES EN ROTACIÓN
            </span>
            <br />
            <ul className={styles.ruleList}>
                <li>
                    1) Deberá cumplir con lo dispuesto en el Reglamento de Médicos Residentes de la Dirección de
                    Enseñanza y Desarrollo Académico. No se proporcionarán prestaciones económicas, material
                    didáctico, fotocopias, uniformes ni estacionamiento; la alimentación y el lugar de descanso se
                    proporcionará únicamente durante las guardias. Cualquier falta al reglamento será causa de
                    suspensión definitiva de su estancia en el hospital.
                </li>
                <li>
                    2) Toda actividad clínica e intervención diagnóstica o terapéutica, así como realización de notas o
                    llenado de formatos del Expediente Clínico, deberá ser supervisada por un médico adscrito del
                    HIMFG o un residente de esta institución de mayor o igual jerarquía. Dichas intervenciones
                    deberán ser consignadas en el expediente clínico con nombre completo y firma de ambas
                    partes.
                </li>
                <li>
                    3) Deberá portar la credencial otorgada por la Dirección de Enseñanza y Desarrollo Académico,
                    en un lugar visible en todo momento, EN CASO CONTRARIO SE SUSPENDERA SU ESTANCIA EN
                    ESTE HOSPITAL. No hay reposición de la credencial y en caso de pérdida, se deberá levantar un
                    acta en el Ministerio Público y posterior a esto se procederá a entregar el documento de
                    conclusión.
                </li>
                <li>
                    4) Deberá conducirse con respeto y atención a todo el personal médico y no médico de la
                    institución presentándose con zapatos deportivos tipo tenis, azules, negros o color neutro;
                    pijama quirúrgica azul, negra o de color neutro y bata con el escudo de su institución. Está
                    prohibido el uso de playeras o sudaderas como parte del uniforme.
                </li>
                <li>
                    Para ingresar a quirófano, deberán usar el uniforme quirúrgico otorgado por el área de
                    quirófanos.
                </li>
                <li>
                    Es OBLIGATORIO el uso de cubrebocas en todo momento dentro del hospital.
                </li>
                <li>
                    El cabello largo deberá ser recogido durante las actividades asistenciales con los
                    pacientes.
                </li>
                <li>
                    Esta prohibido el uso de joyería y uñas largas con esmalte, gelish, acrílicos y otros
                    productos que impidan el adecuado lavado de manos
                </li>
                <li>
                    5) Los médicos no podrán iniciar actividades clínicas asistenciales hasta realizar el curso de
                    higiene de manos y medidas preventivas de infecciones nosocomiales realizado por el
                    Departamento de Epidemiología Hospitalaria.
                </li>
                <li>
                    6) No deberá de dar informes sobre diagnóstico, pronóstico o estado actual de los pacientes, a
                    menos que sea realizado bajo supervisión de un médico adscrito del HIMFG o médico
                    residente de esta institución que sea de mayor jerarquía.
                </li>
                <li>
                    7) No se autoriza que el residente rotante extraiga o utilice información de algún paciente o un
                    grupo de pacientes de este Instituto (para publicación, realizar carteles para congresos, etc.) a
                    menos de que cuente con permiso por escrito del Jefe del Departamento o Subdirector de
                    área correspondiente
                </li>
                <li>
                    8) No se autoriza tomar vacaciones durante el periodo de la rotación, ni se autorizarán permisos
                    extraordinarios que no sean avalados por escrito en forma oficial por las autoridades de
                    enseñanza de la institución de procedencia
                </li>
                <li>
                    9) Deberá de realizar el trámite de ingreso y finalización de la rotación de forma completa en la
                    Dirección de Enseñanza y Desarrollo Académico. La evaluación final la llevará a cabo el
                    profesor del servicio receptor con el visto bueno de la Dirección de Enseñanza y Desarrollo
                    Académico en el formato oficial de evaluación; se elaborará el oficio de conclusión y éste junto
                    con el formato oficial de evaluación será entregado a cambio de la credencial de
                    identificación.
                </li>
            </ul>
        </>,
        showCloseButton:true,
        showConfirmButton:false,
        customClass:{
            htmlContainer: styles.htmlContainer
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