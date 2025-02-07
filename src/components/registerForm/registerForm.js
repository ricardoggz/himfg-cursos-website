import axios from 'axios'
import { useState } from 'react'
import styles from './form.module.css'
import { useOnChange } from '../../hooks'

export const RegisterForm = () => {
    const [onReset] = useOnChange()
    const [inputData, setInputData] = useState(null)
    const [isSelected, setIsSelected] = useState(false)
    const onChange=(evt)=>{
        setInputData({
            ...inputData,
            [evt.target.name]: evt.target.value
        })
    }
    const onSubmit = async (evt) => {
        evt.preventDefault()
        try {
            await axios.post(
                `${process.env.BASE_URL_API}api/auth/create-user`,
                inputData
            )
        } catch (error) {
            throw new Error(error)
        }
        evt.target.reset()
        onReset()
    }
    return (
        <form className={`flexContainer ${styles.formWrapper}`} onSubmit={onSubmit}>
            <label>Nombre completo:</label>
            <input type='text' name='student_name' required onChange={onChange} />
            <label>Edad:</label>
            <input
                type='number'
                name='student_age'
                onChange={onChange}
                required
            />
            <label>Nacionalidad:</label>
            <input
                type='text'
                required
                onChange={onChange}
                name='student_nationality'
            />
            <label>Lugar de residencia:</label>
            <input
                type='text'
                required
                name='student_work_position'
                onChange={onChange}
            />
            <label>¿Cuál es su perfil profesional?:</label>
            <div className={styles.formRatioInputs}>
                <div className={inputData && inputData.student_grade === 'ESTUDIANTE' ? styles.formFieldSelected : ''}>
                    <label>Estudiante</label>
                    <input
                        type='radio'
                        value='ESTUDIANTE'
                        name='student_grade'
                        onChange={onChange}
                        required
                    />
                </div>
                <div className={inputData && inputData.student_grade === 'PERSONAL_HIMFG' ? styles.formFieldSelected : ''}>
                    <label>Personal del HIMFG</label>
                    <input
                        type='radio'
                        value='PERSONAL_HIMFG'
                        name='student_grade'
                        onChange={onChange}
                        required
                    />
                </div>
                <div className={inputData && inputData.student_grade === 'EXTERNO' ? styles.formFieldSelected : ''}>
                    <label>Externo</label>
                    <input
                        type='radio'
                        value='EXTERNO'
                        name='student_grade'
                        onChange={onChange}
                        required
                    />
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
                    <input type='text' name='student_institution' onChange={onChange} />
                </div>
            </div>
            <label>Teléfono:</label>
            <input
                type='number'
                required
                name='student_phone'
                onChange={onChange}
            />
            <label>Correo electrónico para acceso a la plataforma y donde se enviará su constancia:</label>
            <input
                type='email'
                required
                name='student_email'
                onChange={onChange}
            />
            <label>Genere una contraseña para ingresar a la plataforma:</label>
            <input
                type='email'
                required
                name='student_email'
                onChange={onChange}
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

            <div className={styles.formButtons}>
                <button className={styles.buttonSuccess}>Enviar</button>
                <button
                    className={styles.buttonDanger}
                    type='reset'
                    onClick={onReset}
                >
                    Cancelar
                </button>
            </div>
        </form>
    )
}