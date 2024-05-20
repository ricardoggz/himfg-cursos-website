'use client'
import { useState } from 'react'
import styles from './styles.module.css'
import { Container, Title } from "@/components"

const Avisos = ()=>{
  return(
    <>
      <Title>Avisos</Title>
      <div className={`flexContainer ${styles.avisosWrapper}`}>
        <p>El Hospital Infantil de México Federico Gómez (HIMFG) a través la Subdirección de Enseñanza, es la responsable del tratamiento de los datos personales que nos proporcione.</p>
        <p>Sus datos personales serán utilizados para participar en el Proceso de Selección de Aspirantes a Residencias Médicas; control, registro de evaluaciones y elaboración de constancias de estudios; llevar a cabo los trámites de Beca y Titulación del alumno; identificar voluntarios para el padrón de intérpretes dentro del Hospital Infantil de México Federico Gómez, y, sólo en caso de situación de contingencia o de urgencia para reporte a los familiares. La difusión de los datos generados se llevará a cabo con fines estadísticos, en el caso de transferencia de datos a otros Institutos u Hospitales de Salud, o cualquier otra autoridad competente, no será necesario el consentimiento expreso.</p>
        <p>La difusión de los datos generados se llevará a cabo con fines académicos y estadísticos y podrán ser transferidos de manera interna al Departamento de Selección, Contratación y Desarrollo de Capital Humano y externa a la Universidad Nacional Autónoma de México (UNAM) y a la Dirección General de Calidad y Educación en Salud, en las que no será necesario el consentimiento expreso.</p>
        <p>Para conocer requisitos y plazos relacionados con el proceso de selección, puede acudir a la oficina de la Subdirección de Enseñanza, ubicada en el segundo piso del Edificio “Arturo Mundet”, enviar correo electrónico a apacheco@himfg.edu.mx o al teléfono 52289917 extensión 9098, con el Dr. Aarón Pacheco Ríos.</p>
        <p>Para manifestar su negativa al tratamiento de sus datos personales, puede entregar escrito libre en la Unidad de Transparencia ubicada en la puerta 2 de este Instituto, de lunes a viernes en un horario de 9:00 a 14.00 hrs. o al correo transparencia@himfg.edu.mx.</p>
        <p>Usted podrá consultar el aviso de privacidad integral en la siguiente dirección electrónica: Para leerlo siga este vínculo.</p>
        <p>Fecha de la última actualización de este aviso de privacidad 26/junio/2018</p>
      </div>
    </>
  )
}
const Instrucciones = ({})=>{
  return (
    <>
      <Title>Instrucciones</Title>
      <div className={`flexContainer ${styles.avisosWrapper}`}>
        <p>
          Para participar en el proceso de selección a las residencias de pediatría, genética, especialidades pediátricas y nutrición clínica pediátrica deberá completar el siguiente formulario, cuyo tiempo para responderlo se ha estimado entre 15 y 20 minutos (no tiene límite de tiempo para responderlo). Requiere además tener a la mano los siguientes documentos:
        </p>
        <ul>
          <li>Certificado universitario de estudios con promedio general</li>
          <li>CURP</li>
          <li>RFC</li>
          <li>Acta de nacimiento</li>
          <li>Datos de un familiar cercano (nombre, domicilio, teléfono, etc.)</li>
          <li>Folio de registro al Examen Nacional de Aspirantes a Residencias Médicas (ENARM)</li>
          <li>Datos sobre la especialidad pediátrica: institución sede, institución universitaria que la avala y promedio</li>
        </ul>
        <p>Deberá escribir su nombre completo tal como aparece en su acta de nacimiento, con mayúsculas, minúsculas y acentos.</p>
        <p>Se requiere llenar todas las casillas, no deje nada en blanco, si en alguna casilla la información requerida no existe o no aplica (por ejemplo: en el domicilio no existe número interior), escriba la palabra OMITIDO. No esta permitido el signo ( ' ) apóstrofo. Si lo utiliza el servidor rechazará su solicitud de ingreso.</p>
        <p>Al terminar el llenado del formulario, verificar la información e imprimir el comprobante de registro en línea.</p>
        <p>Una vez concluido su registro en línea deberá descargar el documento “Currículum Vitae” que deberá llenar, imprimir y anexar a su documentación.</p>
        <p>No olvide que para quedar formalmente inscrito en el proceso de selección deberá entregar en la Dirección de Enseñanza y Desarrollo Académico del Hospital Infantil de México Federico Gómez, el comprobante de registro en línea, el formato requisitado de currículum vitae, la documentación requerida en la convocatoria 2023 y el pago correspondiente.</p>
        <p>Usted podrá realizar su registro en línea a la hora que le sea posible. Si requiere asistencia técnica podrá obtenerla de lunes a viernes de 8:00 a 14:00 h.</p>
        <p>Para continuar debe leer el Aviso de Privacidad.</p>
        <p>Por último le sugerimos consultar la ultima versión de la convocatoria 2023 para enterarse de cambios o adecuaciones, también consulte el apartado "Avisos Importantes" que se encuentra el el menú superior.</p>
      </div>
    </>
  )
}
const Formulario = ()=>{
  const [selectedOption, setSelectedOption] = useState(null)
  return (
    <>
        <Title>Registro</Title>
        <div className={styles.selectedOption}>
            <form>
              <label>Comenzar registro:</label>
              <select>
                <option
                    onClick={()=>setSelectedOption(null)}
                  >
                    Seleccionar
                  </option>
                <option
                  value='Pediatría y genetica'
                  onClick={()=>setSelectedOption('pediatria y genetica')}
                >
                  Pediatría y Genética
                </option>
                <option
                value='especialidades pediatricas'
                onClick={()=>setSelectedOption('especialidades pediatricas')}
                >
                  Especialidades Pediátricas
                </option>
                <option
                value='alta especialidad'
                onClick={()=>setSelectedOption('alta especialidad')}
                >
                  Curso de Posgrado de Alta Especialidad
                </option>
                <option
                  value='nutricion clinica pediatrica'
                  onClick={()=>setSelectedOption('nutricion clinica pediatrica')}
                >
                  Nutrición Clínica Pediátrica
                </option>
                <option
                  value='ortodoncia odontopediatria'
                  onClick={()=>setSelectedOption('ortodoncia odontopediatria')}
                >
                  Ortodoncia, Odontopediatría
                </option>
              </select>
            </form>
        </div>
        {
          !selectedOption ?
            null
          :
          <form className={styles.registerForm}>
          <label className={styles.registerTitle}>Datos personales</label>
            <div>
            <input type='checkbox' />
            <label>
              &nbsp;Consiento y autorizo que mis datos personales sean tratados conforme a lo previsto en el aviso de privacidad, el cual he leido (marque la casilla a la izquierda).
            </label>
            </div>
            <label>Seleccione la Especialidad a la que desea ingresar:</label>
            <select>
              <option>Seleccione</option>
              <option>Opción 1</option>
              <option>Opción 1</option>
              <option>Opción 1</option>
            </select>
            <div className={styles.registerModule}>
              <div>
                <label>Nombre completo</label>
                <input type='text'/>
              </div>
              <div>
                <label>Nacionalidad</label>
                <input type='text'/>
              </div>
              <div>
                <label>Sexo</label>
                <select>
                  <option>Seleccione</option>
                  <option>Masculino</option>
                  <option>Femenino</option>
                </select>
              </div>
              <div>
                <label>Teléfono</label>
                <input type='number'/>
              </div>
              <div>
                <label>Correo electrónico</label>
                <input type='email'/>
              </div>
              <div>
                <label>RFC</label>
                <input type='text'/>
              </div>
              <div>
                <label>CURP</label>
                <input type='text'/>
              </div>
              <div>
                <label>Número de pasaporte(extranjeros)</label>
                <input type='text'/>
              </div>
            </div>
            <label className={styles.registerTitle}>Lugar y fecha de nacimiento</label>
            <div className={styles.registerModule}>
              <div>
                <label>Fecha de nacimiento</label>
                <input type='date'/>
              </div>
              <div>
                <label>Estado de nacimiento</label>
                <input type='text'/>
              </div>
              <div>
                <label>Ciudad</label>
                <input type='text'/>
              </div>
              <div>
                <label>País</label>
                <input type='text'/>
              </div>
            </div>
            <label className={styles.registerTitle}>Domicilio</label>
            <div className={styles.registerModule}>
              <div>
                <label>Calle y número exterior</label>
                <input type='text'/>
              </div>
              <div>
                <label>Número o letra interior</label>
                <input type='text'/>
              </div>
              <div>
                <label>Colonia</label>
                <input type='text'/>
              </div>
              <div>
                <label>Alcaldía o municipio</label>
                <input type='text'/>
              </div>
              <div>
                <label>Ciudad</label>
                <input type='text'/>
              </div>
              <div>
                <label>Estado</label>
                <input type='text'/>
              </div>
              <div>
                <label>País</label>
                <input type='text'/>
              </div>
              <div>
                <label>Código postal</label>
                <input type='text'/>
              </div>
              <div>
                <label>Teléfono fijo</label>
                <input type='number'/>
              </div>
            </div>
            <label className={styles.registerTitle}>Datos personales de un familiar cercano</label>
            <div className={styles.registerModule}>
              <div>
                <label>Nombre completo</label>
                <input type='text'/>
              </div>
              <div>
                <label>Parentesco</label>
                <input type='text'/>
              </div>
              <div>
                <label>Ciudad donde reside</label>
                <input type='text'/>
              </div>
              <div>
                <label>Estado donde reside</label>
                <input type='text'/>
              </div>
              <div>
                <label>Calle y número exterior</label>
                <input type='text'/>
              </div>
              <div>
                <label>Número interior</label>
                <input type='text'/>
              </div>
              <div>
                <label>Colonia</label>
                <input type='text'/>
              </div>
              <div>
                <label>Alcaldía y municipio</label>
                <input type='text'/>
              </div>
              <div>
                <label>Código postal</label>
                <input type='text'/>
              </div>
              <div>
                <label>País</label>
                <input type='text'/>
              </div>
              <div>
                <label>teléfono fijo</label>
                <input type='number'/>
              </div>
              <div>
                <label>Teléfono celular</label>
                <input type='text'/>
              </div>
              <div>
                <label>Correo electrónico</label>
                <input type='email'/>
              </div>
            </div>
            <label className={styles.registerTitle}>Datos académicos</label>
            <div className={styles.registerModule}>
              <div>
                <label>Licenciatura en</label>
                <input type='text'/>
              </div>
              <div>
                <label>Nombre de la universidad</label>
                <input type='text'/>
              </div>
              <div>
                <label>Facultad o escuela</label>
                <input type='text'/>
              </div>
              <div>
                <label>Año de inicio</label>
                <input type='number'/>
              </div>
              <div>
                <label>Año de término</label>
                <input type='number'/>
              </div>
              <div>
                <label>Promedio</label>
                <input type='text'/>
              </div>
              <div>
                <label>Lugar en su generación</label>
                <input type='number'/>
              </div>
              <div>
                <label>Fecha de exámen profesional</label>
                <input type='date'/>
              </div>
              <div>
                <label>Número de cédula profesional</label>
                <input type='number'/>
              </div>
            </div>
              {
                selectedOption && selectedOption === 'pediatria y genetica' ?
                <>
                  <label className={styles.registerTitle}>Datos del ENARM (examen Nacional de Residencias Médicas)</label>
                  <div className={styles.registerModule}>
                    <div>
                      <label>
                        Folio del Examen Nacional de Residencias Médicas
                      </label>
                      <input type='text'/>
                    </div>
                    <div>
                      <label>
                        Numero de veces que lo ha presentado
                      </label>
                      <input type='number'/>
                    </div>
                  </div>
                </>
                :
                null
              }
              {
                selectedOption && selectedOption === 'especialidades pediatricas' || selectedOption === 'alta especialidad'?
                <>
                  <label className={styles.registerTitle}>Datos del ENARM (examen Nacional de Residencias Médicas)</label>
                  <div className={styles.registerModule}>
                    <div>
                      <label>Lugar obtenido en el Examen Nacional de Residencias Medicas</label>
                      <input type='text'/>
                    </div>
                    <div>
                      <label>Fecha de aprobación</label>
                      <input type='date'/>
                    </div>
                  </div>
                </>
              :
              null
              }
            <label className={styles.registerTitle}>Información Adicional</label>
            <div className={styles.registerModule}>
              <div>
              <label>Si habla alguna lengua indígena, indique cual</label>
              <input type='text'/>
              </div>
            </div>
            {
              selectedOption && selectedOption === 'especialidades pediatricas' || selectedOption === 'alta especialidad'?
              <>
                <label className={styles.registerTitle}>Datos de la especialidad de requisito</label>
                <div className={styles.registerModule}>
                <div>
                  <label>Nombre de especialidad o requisito</label>
                  <input type='text'/>
                </div>
                <div>
                  <label>Cédula profesional</label>
                  <input type='text'/>
                </div>
                <div>
                  <label>Hospital donde la realizó</label>
                  <input type='text'/>
                </div>
                <div>
                  <label>Ciudad</label>
                  <input type='text'/>
                </div>
                <div>
                  <label>País</label>
                  <input type='text'/>
                </div>
                <div>
                  <label>Universidad que reconoce la especialidad</label>
                  <input type='text'/>
                </div>
                <div>
                  <label>Año en que inició</label>
                  <input type='date'/>
                </div>
                <div>
                  <label>Año en que terminó</label>
                  <input type='date'/>
                </div>
                <div>
                  <label>Promedio de la especialidad (0-10)</label>
                  <input type='number'/>
                </div>
                <div>
                  <label>Lugar obtenido en su generación</label>
                  <input type='text'/>
                </div>
                </div>
                <label className={styles.registerTitle}>CONSEJO DE CERTIFICACIÓN DE LA ESPECIALIDAD</label>
                  <div className={styles.registerModule}>
                    <div>
                      <label>Folio</label>
                      <input type='text'/>
                    </div>
                    <div>
                      <label>Fechas de vigencia</label>
                      <input type='date'/>
                    </div>
                  </div>
              </>
              :
              null
            }
            <div className={styles.registerModule}>
              <button className={styles.registerButton}>
                Continuar
              </button>
            </div>
          </form>
        }
    </>
  )
}
const Registro = () => {
  const [step, setStep] = useState(1)
  const [selectedOption, setSelectedOption] = useState(null)
  if(step===1){
    return(
      <Container>
        <Avisos/>
        <div className={`flexContainer ${styles.continousWrapper}`}>
          <button
            onClick={()=> setStep(step + 1)}
            className={styles.registerButton}
          >
            Continuar
          </button>
        </div>
      </Container>
    )
  }
  if(step === 2){
    return (
      <Container>
      <Instrucciones />
      <div className={`flexContainer ${styles.continousWrapper}`}>
        <button
          onClick={()=> setStep(step - 1)}
          className={styles.registerButton}
        >
          Regresar
        </button>
        <button
          onClick={()=> setStep(step + 1)}
          className={styles.registerButton}
        >
          Continuar
        </button>
      </div>
      </Container>
      
    )
  }
  if(step===3){
    return (
      <Container>
        <Formulario/>
        <div className={`flexContainer ${styles.continousWrapper}`}>
        <button
          onClick={()=> setStep(step - 1)}
          className={styles.registerButton}
        >
          Regresar
        </button>
        </div>
      </Container>
    )
  }
}

export default Registro