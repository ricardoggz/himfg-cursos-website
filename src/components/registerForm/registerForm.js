import { useState } from 'react'
import styles from './form.module.css'

export const RegisterForm = ()=>{
    const [student, setStudent] = useState(null)
    const onChange = (evt)=>{
        setStudent({
            ...student,
            [evt.target.name] : evt.target.value
        })
    }
    return (
        <form className={`flexContainer ${styles.formWrapper}`}>
            <label>Nombre completo empezando por apellidos:</label>
            <input type='text' name='student_name' required onChange={onChange}/>
            <label>¿Cuál es su título profesional?:</label>
            <div className={styles.formRatioInputs}>
                <div>
                    <label>MÉDICO</label>
                    <input
                        type='radio'
                        value='MÉDICO'
                        name='student_grade'
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <label>PASANTE</label>
                    <input
                        type='radio'
                        value='PASANTE'
                        name='student_grade'
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <label>EST. MED.</label>
                    <input
                        type='radio'
                        value='EST. MED.'
                        name='student_grade'
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <label>LIC. ENF.</label>
                    <input
                        type='radio'
                        value='LIC. ENF.'
                        name='student_grade'
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <label>ENF. ESP.</label>
                    <input
                        type='radio'
                        value='ENF. ESP.'
                        name='student_grade'
                        onChange={onChange}
                        required                        
                    />
                </div>
                <div>
                    <label>EST. ENF.</label>
                    <input
                        type='radio'
                        value='EST. ENF.'
                        name='student_grade'
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <label>QUÍMICO</label>
                    <input
                        type='radio'
                        value='QUÍMICO'
                        name='student_grade'
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <label>BIÓLOGO</label>
                    <input
                        type='radio'
                        value='BIÓLOGO'
                        name='student_grade'
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <label>M. En C.</label>
                    <input
                        type='radio'
                        value='M. EN C.'
                        name='student_grade'
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <label>PSICÓLOGO</label>
                    <input
                        type='radio'
                        value='PSICÓLOGO'
                        name='student_grade'
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <label>PEDAGOGO</label>
                    <input
                        type='radio'
                        value='PEDAGOGO'
                        name='student_grade'
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <label>TRABAJADOR SOCIAL</label>
                    <input
                        type='radio'
                        value='TRABAJADOR SOCIAL'
                        name='student_grade'
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <label>Otro (especifique):</label>
                    <input type='text' name='student_grade' onChange={onChange}/>
                </div>
            </div>
            <label>Institución de procedencia:</label>
            <div className={styles.formRatioInputs}>
                <div>
                    <label>IMSS</label>
                    <input
                        type='radio'
                        value='IMSS'
                        name='student_institution'
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <label>SSA</label>
                    <input
                        type='radio'
                        value='SSA'
                        name='student_institution'
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <label>ISSTE</label>
                    <input
                        type='radio'
                        value='ISSTE'
                        name='student_institution'
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <label>GDF</label>
                    <input
                        type='radio'
                        value='GDF'
                        name='student_institution'
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <label>HIMFG</label>
                    <input
                        type='radio'
                        value='HIMFG'
                        name='student_institution'
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <label>Otro (especifique):</label>
                    <input type='text' name='student_institution' onChange={onChange}/>
                </div>
            </div>
            <label>Cargo:</label>
            <input
                type='text'
                required
                name='student_work_position'
                onChange={onChange}
            />
            <label>Teléfono:</label>
            <input
                type='number'
                required
                name='student_phone'
                onChange={onChange}
            />
            <label>Correo electrónico:</label>
            <input
                type='email'
                required
                name='student_email'
                onChange={onChange}
            />
            <label>Edad:</label>
            <input
                type='number'
                name='student_age'
                onChange={onChange}
                required
            />
            <label>Eres egresado de algún programa del HIMFG:</label>
            <div className={styles.formRatioInputs}>
                <div>
                    <label>SÍ</label>
                    <input
                        type='radio'
                        value='SÍ'
                        name='student_graduated'
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <label>NO</label>
                    <input
                        type='radio'
                        value='NO'
                        name='student_graduated'
                        onChange={onChange}
                        required
                    />
                </div>
            </div>
            <label>Nacionalidad:</label>
            <input
                type='text'
                required
                onChange={onChange}
                name='student_nationality'
            />
            <div className={styles.formButtons}>
                <button className={styles.buttonSuccess}>Enviar</button>
                <button className={styles.buttonDanger}>Cancelar</button>
            </div>
        </form>
    )
}