import { useState } from 'react'
import axios from 'axios'
import { useOnChange } from '@/hooks'
import styles from './styles.module.css'
import { Container, Title } from "@/components"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

export default function PreGradeForm(){
    const [file, setFile] = useState(null)
    const [inputData, onChange, onReset] = useOnChange()
    const handleFileChange=(evt)=>{
        setFile({
            ...file,
            [evt.target.name]: evt.target.files[0]
        })
    }
    const handleSubmit = async(evt)=>{
        evt.preventDefault()
        try {
            const data ={
                ...inputData,
            }
            const response = await axios.post(
                'https://archivos.him.edu.mx/inscripciones-pre-grado/upload.php',
                data
            )
            console.log(response)
            console.log(data)
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
                SON OBLIGACIONES DEL ALUMNO:
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
                    aspectosa dministrativos, técnicos o científicos de la Institución.
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
            <br/>
            <span>MEDICO INTERNO DE PREGADO:</span>
            <br/>
            <ul className={styles.ruleList}>
                <li>
                    1) No se proporcionarán prestaciones económicas, material didáctico, fotocopias, uniformes ni
                    estacionamiento; la alimentación y el lugar de descanso se proporcionará únicamente durante las
                    guardias. Cualquier falta al reglamento será causa de suspensión definitiva de su estancia en el
                    hospital.
                </li>
                <li>
                    2)Toda actividad clínica e intervención diagnóstica o terapéutica, así como la realización de notas o
                    llenado de formatos del Expediente Clínico, deberá ser supervisada por un médico adscrito del HIMFG
                    o un residente de esta institución de mayor jerarquía. Dichas intervenciones deberán ser consignadas
                    en el expediente clínico con nombre completo y firma de ambas partes.
                </li>
                <li>
                    3) Deberá portar la credencial otorgada por la Dirección de Enseñanza y Desarrollo Académico, en un
                    lugar visible en todo momento, EN CASO CONTRARIO SE SUSPENDERA SU ESTANCIA EN ESTE
                    HOSPITAL. No hay reposición de la credencial y en caso de pérdida, se deberá levantar un acta en el
                    Ministerio Público y posterior a esto se procederá a entregar el documento de conclusión.
                </li>
                <li>
                    4) Deberá conducirse con respeto y atención a todo el personal médico y no médico de la institución
                    presentándose con zapatos deportivos tipo tenis; pijama quirúrgica y bata con el escudo de su
                    Universidad y Facultad. Está prohibido el uso de playeras o sudaderas como parte del uniforme. Para
                    ingresar a quirófano, deberán usar el uniforme quirúrgico otorgado por el área de quirófanos.
                </li>
                <li>
                    5) Los médicos no podrán iniciar actividades clínicas asistenciales hasta realizar el curso de higiene de
                    manos y medidas preventivas de infecciones nosocomiales realizado por el Departamento de
                    Epidemiología Hospitalaria
                </li>
                <li>
                    6) No se autoriza que el residente rotante extraiga o utilice información de algún paciente o un grupo
                    de pacientes de este Instituto (para publicación, realizar carteles para congresos, etc.) a menos de que
                    cuente con permiso por escrito del jefe del Departamento o subdirector de área correspondiente
                </li>
                <li>
                    7) Se respetará el periodo vacacional asignado por la sede clínica de base, de acuerdo con el programa
                    operativo y notificación a la Dirección de Enseñanza y Desarrollo Académico.
                </li>
                <li>
                    8) Deberá de realizar el trámite de ingreso y finalización de la rotación de forma completa en la
                    Dirección de Enseñanza y Desarrollo Académico. La evaluación final la llevará a cabo el profesor
                    asignado para la supervisión del programa académico de los médicos internos y con el visto bueno de
                    la Dirección de Enseñanza y Desarrollo Académico
                </li>
            </ul>
            <br/>
            <span>SANCIONES:</span>
            <br/>
            <ul className={styles.ruleList}>
                <li>
                    Es obligación de todo ALUMNO el cumplir estrictamente este Reglamento, de lo contrario se
                    hará acreedor a las sanciones conducentes.
                </li>
                <li>
                    Las sanciones por faltas en que incurra el alumno, dependiendo de la gravedad, pueden ir
                    desde amonestaciones verbales, notas de demérito al expediente o incluso rescisión de la
                    relación académica con suspensión de la actividad o estancia en el hospital.
                </li>
                <li>
                    Son causa de baja inmediata sin responsabilidad para la Institución:
                </li>
                <li>
                    a) La violación de las normas técnicas o administrativas propias de la unidad
                    (consultar la Normateca Institucional en www.himfg.edu.mx que incluye políticas
                    internas, guías de práctica clínica, manuales de procedimientos, etc.)
                </li>
                <li>
                    b) Faltas a las normas éticas y al Código de Ética y Conducta de la Institución.
                </li>
                <li>
                    c) Violar la confidencialidad de los pacientes o de la información contenida en
                    el expediente clínico.
                </li>
                <li>
                    d) Alteración o modificación del expediente clínico o cualquier documento
                    propio de lainstitución.
                </li>
                <li>
                    e) Ausencia injustificada de su área de trabajo durante el tiempo de labores.
                </li>
                <li>
                    f) Falta de respeto a pacientes, familiares, superiores, compañeros o subordinados.
                </li>
                <li>
                    g) Aceptar o solicitar remuneración o dádivas de pacientes o de terceras
                    personas por su labor médica.
                </li>
                <li>
                    h) Usar o introducir drogas y bebidas alcohólicas a las instalaciones. El Hospital
                    Infantil de México es un área libre de humo de tabaco, el fumar dentro de sus
                    instalaciones constituye un delito.
                </li>
                <li>
                    i)Incumplir con las políticas institucionales denominadas “Protección y manejo
                    por cualquier medio, íntegro y responsable de toda la información personal emanada
                    del proceso de atención sanitaria al que se ven sujetos nuestros pacientes” y
                    “Lineamientos normativos para regular el uso de las Tecnologías de la Información y de la Comunicación (TIC’s) durante la atención médica”
                </li>
                <li>
                    En general, el incumplimiento o transgresión de cualquiera de las normas y obligaciones señaladas en el
                    presente reglamento, puede llegar a ser causa de la cancelación de la actividad académica que realiza, sin
                    responsabilidad para la Institución.
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
            <Title>Servicio social, prácticas, estancias, tesis e internado de pregrado</Title>
            <form
                className={`flexContainer ${styles.inscriptionForm}`}
                onSubmit={handleSubmit}
            >
                <label>
                    <input type='checkbox' onChange={onChange} value='ACEPTA' name='reglamento' required/>
                    Acepto el
                    <span
                    onClick={privacityAd}
                    className={styles.privacity}
                    > aviso de privacidad </span>
                    y
                    <span className={styles.privacity} onClick={rules}> reglamento</span>
                </label>
                <label>Servicio o departamento receptor:</label>
                <input type='text' name='departamento_receptor' onChange={onChange} required/>
                <label>Fecha de inicio:</label>
                <input type='date' name='fecha_inicio' onChange={onChange} required/>
                <label>Fecha de término:</label>
                <input type='date' name='fecha_final' onChange={onChange} required/>
                <label>Nombre:</label>
                <input type='text' name='estudiante_nombre' onChange={onChange} required/>
                <label>Edad:</label>
                <input type='number' name='estudiante_edad' onChange={onChange} required/>
                <label>Sexo:</label>
                <select name='estudiante_genero' onChange={onChange}>
                    <option onChange={onChange}>Masculino</option>
                    <option onChange={onChange}>Femenino</option>
                </select>
                <label>Estado civil:</label>
                <input type='text' name='estudiante_estado_civi' onChange={onChange} required/>
                <label>Fecha de nacimiento:</label>
                <input type='date' name='estudiante_fecha_nacimiento' onChange={onChange} required/>
                <label>Lugar de nacimiento:</label>
                <input type='text' name='estudiante_lugar_nacimiento' onChange={onChange} required/>
                <label>Idiomas que habla:</label>
                <input type='text' name='estudiante_idiomas' onChange={onChange} required/>
                <label>Domicilio permanente:</label>
                <input type='text' name='estudiante_domicilio' onChange={onChange} required/>
                <label>Código postal:</label>
                <input type='text' name='estudiante_codigo_postal' onChange={onChange} required/>
                <label>Alcaldía / municipio:</label>
                <input type='text' name='estudiante_alcaldia' onChange={onChange} required/>
                <label>Ciudad:</label>
                <input type='text' name='estudiante_ciudad' onChange={onChange} required/>
                <label>País:</label>
                <input type='text' name='estudiante_pais' onChange={onChange} required/>
                <label>Teléfono particular:</label>
                <input type='number' name='estudiante_telefono_particular' onChange={onChange} required/>
                <label>Teléfono celular:</label>
                <input type='number' name='estudiante_telefono_casa' onChange={onChange} required/>
                <label>Correo electrónico:</label>
                <input type='email' name='estudiante_email' onChange={onChange} required/>
                <label>Escuela de procedencia:</label>
                <input type='text' name='estudiante_escuela' onChange={onChange} required/>
                <label>Carrera:</label>
                <input type='text' name='estudiante_carrera' onChange={onChange} required/>
                <label>Promedio de calificaciones del ultimo grado escolar:</label>
                <input type='text' name='estudiante_promedio' onChange={onChange} required/>
                <label>Número de contacto de escuela:</label>
                <input type='text' name='estudiante_contacto_escuela' onChange={onChange} required/>
                <label>Fotografía tamaño infantil / blanco y negro y / o color:</label>
                <input type='file' name='estudiante_fotografia' onChange={handleFileChange} required/>
                <label>Calificaciones con sello de la escuela:</label>
                <input type='file' name='estudiante_calificaciones' onChange={handleFileChange} required/>
                <label>Certificado médico reciente (Sector Salud):</label>
                <input type='file' name='estudiante_certificado_medico' onChange={handleFileChange} required/>
                <label>Oficio de envío de la institución solicitando llevar a cabo su Servicio Social, Práctica, Estancia, Tesis, dirigido a la Dirección de Enseñanza y Desarrollo Académico:</label>
                <input type='file' name='estudiante_oficio_solicitacion' onChange={handleFileChange} required/>
                <label>Oficio de aceptación por el área de la institución solicitando llevar a cabo su Servicio Social, Práctica, Estancia, Tesis, dirigido a la Dirección de Enseñanza y Desarrollo Académico</label>
                <input type='file' name='estudiante_oficio_aceptacion' onChange={handleFileChange} required/>
                <label>Nombre completo de aceptación:</label>
                <input type='text' name='estudiante_nombre_aceptacion' onChange={onChange} required/>
                <div className={styles.inscriptionButtons}>
                    <button className={styles.buttonSubmit}>Enviar datos</button>
                    <button type='reset' className={styles.buttonReset}>Borrar datos</button>
                </div>
                <label>*EL HOSPITAL INFANTIL DE MÉXICO FEDERICO GÓMEZ NO OTORGA NINGÚN TIPO DE BECA, ALIMENTACIÓN, ESTACIONAMIENTO, NI RESIDENCIA PARA ESTOS ESTUDIOS*</label>
            </form>
        </Container>
    )
}