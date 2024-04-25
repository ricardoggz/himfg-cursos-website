import styles from './styles.module.css'
import { Container, Title } from "@/components"
export default function PreGradeForm(){
    return (
        <Container>
            <Title>Servicio social, prácticas, estancias, tesis e internado de pregrado</Title>
            <form className={`flexContainer ${styles.inscriptionForm}`}>
                <label>Servicio o departamento receptor:</label>
                <input type='text' name='department_name'/>
                <label>Fecha de inicio:</label>
                <input type='date' name='start_date'/>
                <label>Fecha de término:</label>
                <input type='date' name='finish_date'/>
                <label>Nombre:</label>
                <input type='text' name='student_name'/>
                <label>Edad:</label>
                <input type='number' name='finish_date'/>
                <label>Sexo:</label>
                <select name='student_gender'>
                    <option>Masculino</option>
                    <option>Femenino</option>
                </select>
                <label>Estado civil:</label>
                <input type='text' name='student_status'/>
                <label>Fecha de nacimiento:</label>
                <input type='date' name='student_birthday'/>
                <label>Lugar de nacimiento:</label>
                <input type='text' name='student_origin'/>
                <label>Idiomas que habla:</label>
                <input type='text' name='student_languages'/>
                <label>Domicilio permanente:</label>
                <input type='text' name='student_languages'/>
                <label>Código postal:</label>
                <input type='text' name='student_languages'/>
                <label>Alcaldía / municipio:</label>
                <input type='text' name='student_languages'/>
                <label>Domicilio permanente:</label>
                <input type='text' name='student_languages'/>
                <label>Ciudad:</label>
                <input type='text' name='student_languages'/>
                <label>País:</label>
                <input type='text' name='student_languages'/>
                <label>Teléfono particular:</label>
                <input type='number' name='student_languages'/>
                <label>Teléfono celular:</label>
                <input type='number' name='student_languages'/>
                <label>Correo electrónico:</label>
                <input type='email' name='student_languages'/>
                <label>Escuela de procedencia:</label>
                <input type='text' name='student_languages'/>
                <label>Carrera:</label>
                <input type='text' name='student_languages'/>
                <label>Promedio de calificaciones del ultimo grado escolar:</label>
                <input type='text' name='student_languages'/>
                <label>Número de contacto de escuela:</label>
                <input type='text' name='student_languages'/>
                <label>Fotografía tamaño infantil / blanco y negro y / o calor:</label>
                <input type='file' name='student_languages'/>
                <label>Calificaciones con sello de la escuela:</label>
                <input type='file' name='student_languages'/>
                <label>Certificado médico reciente (Sector Salud):</label>
                <input type='file' name='student_languages'/>
                <label>Oficio de envío de la institución solicitando llevar a cabo su Servicio Social, Práctica, Estancia, Tesis, dirigido a la Dirección de Enseñanza y Desarrollo Académico:</label>
                <input type='file' name='student_languages'/>
                <label>Oficio de aceptación por el área de la institución solicitando llevar a cabo su Servicio Social, Práctica, Estancia, Tesis, dirigido a la Dirección de Enseñanza y Desarrollo Académico</label>
                <input type='file' name='student_languages'/>
                <label>Nombre completo de aceptación:</label>
                <input type='text' name='student_languages'/>
                <label>*EL HOSPITAL INFANTIL DE MÉXICO FEDERICO GÓMEZ NO OTORGA NINGÚN TIPO DE BECA, ALIMENTACIÓN, ESTACIONAMIENTO, NI RESIDENCIA PARA ESTOS ESTUDIOS*</label>
            </form>
        </Container>
    )
}