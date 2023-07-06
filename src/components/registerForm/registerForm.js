import { useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import Swal from 'sweetalert2'
import { CourseContext, UserContext } from '@/contexts'
import { useOnChange } from '../../hooks'
import styles from './form.module.css'
import { states } from './states'
export const RegisterForm = ({path})=>{
    const router = useRouter()
    const { course }= useContext(CourseContext)
    const { login }= useContext(UserContext)
    const [inputData, onChange, onReset] = useOnChange()
    let studentCreated = {
        student_id: Math.floor((Math.random() * 450000) + 450000),
        ...inputData
    }
    const onSubmit = async(evt) =>{
        evt.preventDefault()
        let student
        try {
            const response = await axios.post(
                `${process.env.BASE_URL_API}api/auth/create-user`,studentCreated               
            )
            if(response.status === 200){
                login(studentCreated)
                Swal.fire({
                    icon: 'success',
                    title: 'Registro exitoso',
                    showCloseButton: true,
                    showConfirmButton: false
                })
                student = JSON.parse(response.config.data)
                if(course){
                    router.push('/payment')
                }
                if(!course){
                    router.push('/userlogin')
                }
            }
        } catch (error) {
            throw new Error(error)
        }
        evt.target.reset()
        onReset()
    }
    return (
        <>
            <div className={styles.anchorLogin}>
                <span>¿Ya te has registrado?</span>
                <Link href="/userlogin">Inicia sesión para acceder</Link>
            </div>
            <form className={`flexContainer ${styles.formWrapper}`} onSubmit={onSubmit}>
            <label className={styles.labelTitle}>
                Nombre como aparecerá en su constancia:
            </label>
            <input type='text' name='student_name' required onChange={onChange}/>
            <label className={styles.labelTitle}>
                Edad:
            </label>
            <input
                type='number'
                name='student_age'
                onChange={onChange}
                required
            />
            <label className={styles.labelTitle}>
                Nacionalidad:
            </label>
            <input
                type='text'
                required
                onChange={onChange}
                name='student_nationality'
            />
            <label className={styles.labelTitle}>
                Lugar de procedencia:
            </label>
            <select
                name='student_state'
                onChange={onChange}
                className={`${styles.stateOptions}`}>
                {
                    states.map((state, index)=>(
                        
                            <option
                                key={index}
                                value={state}
                            >
                                {state}
                            </option>
                        
                    ))
                }
            </select>
            <label className={styles.labelTitle}>
                Perfil profesional:
            </label>
            <div className={styles.formRatioInputs}>
                <div>
                    <label>Médico</label>
                    <input
                        type='radio'
                        value='MÉDICO'
                        name='student_grade'
                        onChange={onChange}
                        
                    />
                </div>
                <div>
                    <label>Estudiante</label>
                    <input
                        type='radio'
                        value='PASANTE'
                        name='student_grade'
                        onChange={onChange}
                        
                    />
                </div>
                <div>
                    <label>Enfermero(a)</label>
                    <input
                        type='radio'
                        value='LIC. ENF.'
                        name='student_grade'
                        onChange={onChange}
                        
                    />
                </div>
                <div>
                    <label>Químico</label>
                    <input
                        type='radio'
                        value='QUÍMICO'
                        name='student_grade'
                        onChange={onChange}
                        
                    />
                </div>
                <div>
                    <label>Biólogo</label>
                    <input
                        type='radio'
                        value='BIÓLOGO'
                        name='student_grade'
                        onChange={onChange}
                        
                    />
                </div>
                <div>
                    <label>Maestro</label>
                    <input
                        type='radio'
                        value='M. EN C.'
                        name='student_grade'
                        onChange={onChange}
                        
                    />
                </div>
                <div>
                    <label>Otro (especifique):</label>
                    <input type='text' name='student_grade' onChange={onChange}/>
                </div>
            </div>
            <label className={styles.labelTitle}>
                Institución de procedencia donde trabaja actualmente:
            </label>
            <div className={styles.formRatioInputs}>
                <div>
                    <label>IMSS</label>
                    <input
                        type='radio'
                        value='IMSS'
                        name='student_institution'
                        onChange={onChange}
                        
                    />
                </div>
                <div>
                    <label>SSA</label>
                    <input
                        type='radio'
                        value='SSA'
                        name='student_institution'
                        onChange={onChange}
                        
                    />
                </div>
                <div>
                    <label>ISSSTE</label>
                    <input
                        type='radio'
                        value='ISSTE'
                        name='student_institution'
                        onChange={onChange}
                        
                    />
                </div>
                <div>
                    <label>GDF</label>
                    <input
                        type='radio'
                        value='GDF'
                        name='student_institution'
                        onChange={onChange}
                        
                    />
                </div>
                <div>
                    <label>HIMFG</label>
                    <input
                        type='radio'
                        value='HIMFG'
                        name='student_institution'
                        onChange={onChange}
                        
                    />
                </div>
                <div>
                    <label>Otro (especifique):</label>
                    <input type='text' name='student_institution' onChange={onChange}/>
                </div>
            </div>
            <label className={styles.labelTitle}>
                Teléfono (celular de contacto):
            </label>
            <input
                type='number'
                required
                name='student_phone'
                onChange={onChange}
            />
            <label className={styles.labelTitle}>
                Correo electrónico para acceder a la plataforma y para enviar su constancia:
            </label>
            <input
                type='email'
                required
                name='student_email'
                onChange={onChange}
            />
            <label className={styles.labelTitle}>
                Genere una contraseña para ingresar a la plataforma:
            </label>
            <input
                type='password'
                required
                name='student_password'
                onChange={onChange}
            />
            <label className={styles.labelTitle}>
                Es usted egresado de algún programa del HIMFG:
            </label>
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
            <span className={styles.message}>
                Una vez concluido su registro se descargará un PDF con tus datos de acceso. Te recomendamos guardarlo
            </span>
            <div className={styles.formButtons}>
                <button className={styles.buttonSuccess}>Enviar</button>
                <button
                className={styles.buttonDanger}
                type='reset'
                onClick={onReset}
                id='click'
                >
                    Cancelar
                </button>
            </div>
            </form>
        </>
    )
}