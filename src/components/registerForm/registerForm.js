import { useRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useOnChange } from '../../hooks'
import styles from './form.module.css'

export const RegisterForm = ({path})=>{
    const router = useRouter()
    const [inputData, onChange, onReset] = useOnChange()
    const onSubmit = async(evt) =>{
        evt.preventDefault()
        try {
            const response = await axios.post(
                `${process.env.BASE_URL_API}api/auth/create-user`,
                inputData
            )
            if(response.status === 200){
                Swal.fire({
                    icon: 'success',
                    title: 'Registro exitoso',
                    showCloseButton: true,
                    showConfirmButton: false
                })
                if(path === '/userlogin') router.push('/userlogin')
                if(path === '/payment') router.push('/payment')
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
                Perfil profesional como aparecerá en su constancia:
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
                    <label>Pasante/Estudiante</label>
                    <input
                        type='radio'
                        value='PASANTE'
                        name='student_grade'
                        onChange={onChange}
                        
                    />
                </div>
                <div>
                    <label>Est. Med.</label>
                    <input
                        type='radio'
                        value='EST. MED.'
                        name='student_grade'
                        onChange={onChange}
                        
                    />
                </div>
                <div>
                    <label>Lic. Enf.</label>
                    <input
                        type='radio'
                        value='LIC. ENF.'
                        name='student_grade'
                        onChange={onChange}
                        
                    />
                </div>
                <div>
                    <label>Enf. Esp.</label>
                    <input
                        type='radio'
                        value='ENF. ESP.'
                        name='student_grade'
                        onChange={onChange}
                                                
                    />
                </div>
                <div>
                    <label>Est. Enf.</label>
                    <input
                        type='radio'
                        value='EST. ENF.'
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
                    <label>M. en C.</label>
                    <input
                        type='radio'
                        value='M. EN C.'
                        name='student_grade'
                        onChange={onChange}
                        
                    />
                </div>
                <div>
                    <label>Psicólogo</label>
                    <input
                        type='radio'
                        value='PSICÓLOGO'
                        name='student_grade'
                        onChange={onChange}
                        
                    />
                </div>
                <div>
                    <label>Pedagogo</label>
                    <input
                        type='radio'
                        value='PEDAGOGO'
                        name='student_grade'
                        onChange={onChange}
                        
                    />
                </div>
                <div>
                    <label>Trabajador(a) social</label>
                    <input
                        type='radio'
                        value='TRABAJADOR SOCIAL'
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
                Institución de procedencia:
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
                Cargo:
            </label>
            <input
                type='text'
                required
                name='student_work_position'
                onChange={onChange}
            />
            <label className={styles.labelTitle}>
                Teléfono:
            </label>
            <input
                type='number'
                required
                name='student_phone'
                onChange={onChange}
            />
            <label className={styles.labelTitle}>
                Correo electrónico:
            </label>
            <input
                type='email'
                required
                name='student_email'
                onChange={onChange}
            />
            <label className={styles.labelTitle}>
                Genere una contraseña:
            </label>
            <input
                type='text'
                required
                name='student_password'
                onChange={onChange}
            />
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
                Eres egresado de algún programa del HIMFG:
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
            <label className={styles.labelTitle}>
                Nacionalidad:
            </label>
            <input
                type='text'
                required
                onChange={onChange}
                name='student_nationality'
            />
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