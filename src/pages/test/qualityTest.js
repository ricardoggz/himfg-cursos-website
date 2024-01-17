import { useState } from "react"
import { Container } from '../../components'
import styles from './qualityTest.module.css'

const QualityTest = ({onSubmit, title})=>{
  return (
    <Container>
      <div className="flexContainer">
      <center>
        <h3>
          {title}
        </h3>
      </center>
      <br/>
      <br/>
      <p>
        Esta evaluación tiene como objetivo detectar los factores que favorecen o limitan la calidad y desarrollo del curso en el que participó, con el propósito de mejorarlo y optimizar las actividades de Educación Médica Continua de este Instituto. Por tal motivo le pedimos responda de forma completa y clara el siguiente cuestionario.
      </p>
      <p>
        INSTRUCCIONES: Marque en la columna con una X la opción más adecuada, utilizando los siguientes valores:
      </p>
      <ul>
        <li>(E) Excelente</li>
        <li>(B) Bueno</li>
        <li>(D) Deficiente</li>
      </ul>
      <form className={`boxShadow ${styles.qualityTest}`} onSubmit={onSubmit}>
        <label>
          Estructura y contenido del curso
        </label>
        <label>
          1. ¿Los conocimientos, habilidades o destrezas señaladas en el objetivo general, los adquirió con un nivel?
        </label>
        <div>
        <input type='radio' value='E' required/>
        <label>
          E)
        </label>
        </div>
        <div>
        <input type='radio' value='B' required/>
        <label>
          B)
        </label>
        </div>
        <div>
        <input type='radio' value='D' required/>
        <label>
          D)
        </label>
        </div>
        <label>
          2. ¿Los temas revisados durante el curso correspondieron a los programados?
        </label>
        <div>
        <input type='radio' value='E' required/>
        <label>
          E)
        </label>
        </div>
        <div>
        <input type='radio' value='B' required/>
        <label>
          B)
        </label>
        </div>
        <div>
        <input type='radio' value='D' required/>
        <label>
          D)
        </label>
        </div>
        <label>
          3. ¿Los contenidos abordados durante el curso son aplicables en su trabajo?
        </label>
        <div>
        <input type='radio' value='E' required/>
        <label>
          E)
        </label>
        </div>
        <div>
        <input type='radio' value='B' required/>
        <label>
          B)
        </label>
        </div>
        <div>
        <input type='radio' value='D' required/>
        <label>
          D)
        </label>
        </div>
        <label>
          4. ¿El curso dio respuesta a sus intereses y expectativas?
        </label>
        <div>
        <input type='radio' value='E' required/>
        <label>
          E)
        </label>
        </div>
        <div>
        <input type='radio' value='B' required/>
        <label>
          B)
        </label>
        </div>
        <div>
        <input type='radio' value='D' required/>
        <label>
          D)
        </label>
        </div>
        <label>
          5. Para cubrir los temas y actividades, el tiempo de duración fue
        </label>
        <div>
        <input type='radio' value='E' required/>
        <label>
          E)
        </label>
        </div>
        <div>
        <input type='radio' value='B' required/>
        <label>
          B)
        </label>
        </div>
        <div>
        <input type='radio' value='D' required/>
        <label>
          D)
        </label>
        </div>
        <label>
          Instructor
        </label>
        <label>
          6. El dominio del tema por los profesores fue
        </label>
        <div>
        <input type='radio' value='E' required/>
        <label>
          E)
        </label>
        </div>
        <div>
        <input type='radio' value='B' required/>
        <label>
          B)
        </label>
        </div>
        <div>
        <input type='radio' value='D' required/>
        <label>
          D)
        </label>
        </div>
        <label>
          7. La retroalimentación y solución de las dudas por parte del instructor fue
        </label>
        <div>
        <input type='radio' value='E' required/>
        <label>
          E)
        </label>
        </div>
        <div>
        <input type='radio' value='B' required/>
        <label>
          B)
        </label>
        </div>
        <div>
        <input type='radio' value='D' required/>
        <label>
          D)
        </label>
        </div>
        <label>
          8. El material de apoyo utilizado por los instructores fue
        </label>
        <div>
        <input type='radio' value='E' required/>
        <label>
          E)
        </label>
        </div>
        <div>
        <input type='radio' value='B' required/>
        <label>
          B)
        </label>
        </div>
        <div>
        <input type='radio' value='D' required/>
        <label>
          D)
        </label>
        </div>
        <label>
          Organización
        </label>
        <label>
          9. Los trámites para su inscripción fueron
        </label>
        <div>
        <input type='radio' value='E' required/>
        <label>
          E)
        </label>
        </div>
        <div>
        <input type='radio' value='B' required/>
        <label>
          B)
        </label>
        </div>
        <div>
        <input type='radio' value='D' required/>
        <label>
          D)
        </label>
        </div>
        <label>
          10. Las condiciones del equipo e instalaciones, o de la plataforma digital fueron?
        </label>
        <div>
        <input type='radio' value='E' required/>
        <label>
          E)
        </label>
        </div>
        <div>
        <input type='radio' value='B' required/>
        <label>
          B)
        </label>
        </div>
        <div>
        <input type='radio' value='D' required/>
        <label>
          D)
        </label>
        </div>
        <label>
          Organización
        </label>
        <label>
          1. De los temas revisados durante el curso, ¿cuáles son más útiles en su práctica profesional?
        </label>
        <div>
          <textarea required>

          </textarea>
        </div>
        <label>
          2. ¿Qué temas o actividades desearía incluir en este curso?
        </label>
        <div>
          <textarea required>
            
          </textarea>
        </div>
        <label>
          3. ¿Recomendaría este curso (Sí/No) y por qué?
        </label>
        <div>
          <textarea required>
            
          </textarea>
        </div>
        <label>
        4. Sugerencias o comentarios que permitan mejorar el curso
        </label>
        <div>
          <textarea required>
            
          </textarea>
        </div>
        <button>Mandar respuestas</button>
      </form>
      </div>
    </Container>
  );
}

export default QualityTest