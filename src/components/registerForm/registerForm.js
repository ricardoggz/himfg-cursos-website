import { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import Swal from 'sweetalert2'
import { CourseContext, UserContext } from '@/contexts'
import { useOnChange } from '../../hooks'
import styles from './form.module.css'
import { states } from '@/consts'
import { uploadFile } from '@/services'
export const RegisterForm = ({path})=>{
    const router = useRouter()
    const { course }= useContext(CourseContext)
    const { login }= useContext(UserContext)
    const [inputData, onChange, onReset] = useOnChange()
    const [formData, setFormData] = useState({
        student_id: Math.floor((Math.random() * 450000) + 450000),
    })
    const handleChange = (evt)=>{
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }
    const handleimageChange = (evt)=>{
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.files[0]
        })
    }
    let studentCreated = {
        student_id: Math.floor((Math.random() * 450000) + 450000),
        ...inputData
    }
    const onSubmit = async(evt) =>{
        evt.preventDefault()
        const data = new FormData()
        data.append('student_id', formData.student_id)
        data.append('student_name', formData.student_name)
        data.append('student_age', formData.student_age)
        data.append('student_nationality', formData.student_nationality)
        data.append('student_state', formData.student_state)
        data.append('student_grade', formData.student_grade)
        data.append('student_license', formData.student_license)
        data.append('student_institution', formData.student_institution)
        data.append('student_phone', formData.student_phone)
        data.append('student_email', formData.student_email)
        data.append('student_password', formData.student_password)
        data.append('student_graduated', formData.student_graduated)
        try {
            const response = await axios.post(
                `${process.env.BASE_URL_API}api/auth/create-user`, data               
            )
            if(response.status === 200){
                login(formData)
                uploadFile({
                    file: formData.student_license
                })
                Swal.fire({
                    icon: 'success',
                    title: 'Registro exitoso',
                    showCloseButton: true,
                    showConfirmButton: false
                })
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
            <input type='text' name='student_name' required onChange={handleChange}/>
            <label className={styles.labelTitle}>
                Edad:
            </label>
            <input
                type='number'
                name='student_age'
                onChange={handleChange}
                required
            />
            <label className={styles.labelTitle}>
                Nacionalidad:
            </label>
            <input
                type='text'
                required
                onChange={handleChange}
                name='student_nationality'
            />
            <label className={styles.labelTitle}>
                Lugar de procedencia:
            </label>
            <input
                name='student_state'
                onChange={handleChange}
                type='text'
            />
            <label className={styles.labelTitle}>
                Perfil profesional:
            </label>
            <div className={styles.formRatioInputs}>
                <div>
                    <label>Médico</label>
                    <input
                        type='radio'
                        value='Médico'
                        name='student_grade'
                        onChange={handleChange}
                        
                    />
                </div>
                <div>
                    <label>Estudiante</label>
                    <input
                        type='radio'
                        value='Estudiante'
                        name='student_grade'
                        onChange={handleChange}
                        
                    />
                </div>
                <div>
                    <label>Enfermero(a)</label>
                    <input
                        type='radio'
                        value='Enfermero'
                        name='student_grade'
                        onChange={handleChange}
                        
                    />
                </div>
                <div>
                    <label>Químico</label>
                    <input
                        type='radio'
                        value='Químico'
                        name='student_grade'
                        onChange={handleChange}
                        
                    />
                </div>
                <div>
                    <label>Biólogo</label>
                    <input
                        type='radio'
                        value='Biólogo'
                        name='student_grade'
                        onChange={handleChange}
                        
                    />
                </div>
                <div>
                    <label>Maestro</label>
                    <input
                        type='radio'
                        value='Maestro'
                        name='student_grade'
                        onChange={handleChange}
                        
                    />
                </div>
                <div>
                    <label>Otro (especifique):</label>
                    <input type='text' name='student_grade' onChange={handleChange}/>
                </div>
            </div>
            {
                !formData ? null
                :
                <div className={styles.inputFile}>
                    {
                    formData.student_grade === 'Estudiante'
                    ?
                    <>
                        <label className={styles.labelTitle}>Inserte una fotografía de su credencial de estudiante</label>
                        <input type='file' name='student_license' onChange={handleimageChange} id='file'/>
                        <span>
                            Asegúrese de enviar un documento válido y con vigencia, de lo contrario
                            no se emitirá su constancia y tampoco tendrá la devolución de su dinero.
                        </span>
                    </>
                    :
                    null
                    }
                    {
                        formData.student_grade === 'Médico' || formData.student_grade === 'Enfermero'
                        ?
                        <>
                            <label className={styles.labelTitle}>Inserte una fotografía de su cédula profesional</label>
                            <input type='file' name='student_license' onChange={handleimageChange} id='file'/>
                            <span>
                                Asegúrese de enviar un documento válido y con vigencia, de lo contrario
                                no se emitirá su constancia y tampoco tendrá la devolución de su dinero.
                            </span>
                        </>
                        :
                        null
                    }
                </div>
            }
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
                        onChange={handleChange}
                        
                    />
                </div>
                <div>
                    <label>SSA</label>
                    <input
                        type='radio'
                        value='SSA'
                        name='student_institution'
                        onChange={handleChange}
                        
                    />
                </div>
                <div>
                    <label>ISSSTE</label>
                    <input
                        type='radio'
                        value='ISSTE'
                        name='student_institution'
                        onChange={handleChange}
                        
                    />
                </div>
                <div>
                    <label>GDF</label>
                    <input
                        type='radio'
                        value='GDF'
                        name='student_institution'
                        onChange={handleChange}
                        
                    />
                </div>
                <div>
                    <label>HIMFG</label>
                    <input
                        type='radio'
                        value='HIMFG'
                        name='student_institution'
                        onChange={handleChange}
                        
                    />
                </div>
                <div>
                    <label>Otro (especifique):</label>
                    <input type='text' name='student_institution' onChange={handleChange}/>
                </div>
            </div>
            <label className={styles.labelTitle}>
                Teléfono (celular de contacto):
            </label>
            <input
                type='number'
                required
                name='student_phone'
                onChange={handleChange}
            />
            <label className={styles.labelTitle}>
                Correo electrónico para acceder a la plataforma y para enviar su constancia:
            </label>
            <input
                type='email'
                required
                name='student_email'
                onChange={handleChange}
            />
            <label className={styles.labelTitle}>
                Genere una contraseña para ingresar a la plataforma:
            </label>
            <input
                type='password'
                required
                name='student_password'
                onChange={handleChange}
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
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>NO</label>
                    <input
                        type='radio'
                        value='NO'
                        name='student_graduated'
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            {
                !course ? null
                :
                <span className={styles.message}>
                    Una vez concluido su registro se descargará un PDF con tus datos de acceso. Te recomendamos guardarlo
                </span>
            }
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