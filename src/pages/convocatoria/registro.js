'use client'
import { useState } from 'react'
import styles from './styles.module.css'
import { Container, Title } from "@/components"

const Especialidades = ({})=>{
  //const [selectedOption, setSelectedOption] = useState(null)
  return (
    <div>
      <form>
        <label>Comenzar registro:</label>
        <select>
          <option>Pediatría y Genética</option>
          <option>Especialidades Pediátricas</option>
          <option>Curso de Posgrado de Alta Especialidad</option>
          <option>Nutrición Clínica Pediátrica</option>
          <option>Ortodoncia, Odontopediatría</option>
        </select>
      </form>
    </div>
  )
}
const Registro = () => {
  const [selectedOption, setSelectedOption] = useState(null)
  return (
    <Container>
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
          </form>
        }
    </Container>
  )
}

export default Registro