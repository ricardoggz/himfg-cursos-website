'use client'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'
import styles from './form.module.css'
import { Loader } from '../loader/loader'
import { useState, useEffect } from 'react'
import { uploadFile, startPayment, addPayment, reference } from '@/services'

export const RegisterForm = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [course, setCourse] = useState(null)
    const [inputData, setInputData] = useState({
        student_id: Math.floor((Math.random() * 450000) + 450000),
        student_grade:'ESTUDIANTE',
        student_license_part_2: undefined
    })
    const onChange = async (evt) => {
        if (evt.target.files?.length) {
            const resp = await uploadFile({ file: evt.target.files[0] });
            setInputData({
                ...inputData,
                [evt.target.name]: resp
            });
        } else {
            setInputData({
                ...inputData,
                [evt.target.name]: evt.target.value
            });
        }
    };
    const onSubmit = async (evt) => {
        evt.preventDefault()
        setIsLoading(true)
        //localStorage.setItem('user', inputData)
        try {
            const response = await axios.post(
                `${process.env.BASE_URL_API}api/auth/create-user`,
                inputData
            )
            if (response.status === 200 && response.data.affectedRows === 1) {
                const controlNumber = reference(course.course_id)
                if (inputData.student_role === 'EXTERNO' && course.course_price !== 0) {
                    await startPayment({
                        routerFunction: () => router.push('/registro-exitoso'),
                        setLoaderFunction: () => setIsLoading(false),
                        controlNumber: controlNumber,
                        user: inputData
                    })
                }
                if (inputData.student_role === 'ESTUDIANTE' && course.course_price !== 0) {
                    await startPayment({
                        routerFunction: () => router.push('/registro-exitoso'),
                        setLoaderFunction: () => setIsLoading(false),
                        controlNumber: controlNumber,
                        user: inputData
                    })
                }
                if (inputData.student_role === 'PERSONAL_HIMFG' && course.course_price !== 0) {
                    await startPayment({
                        routerFunction: () => router.push('/registro-exitoso'),
                        setLoaderFunction: () => setIsLoading(false),
                        controlNumber: controlNumber,
                        user: inputData
                    })
                }
                if (course.course_price === 0) {
                    router.push('/registro-exitoso')
                    await addPayment({
                        data: {
                            course_id: course.course_id,
                            student_id: inputData.student_id,
                            payment_successfull: 1,
                            payment_amount: 1.00,
                            payment_reference: controlNumber,
                            payment_invoice: "SIN_FACTURACION",
                            payment_date: new Date().toISOString().slice(0, 19).replace('T', ' '),
                            payment_modality: 'en_linea'
                        }
                    })
                }
                localStorage.setItem('user', JSON.stringify(inputData))
            }
        } catch (error) {
            setIsLoading(false)
            return Swal.fire({
                title: 'Ha ocurrido un problema al contactar con el servidor',
                text: 'Intente nuevamente',
                icon: 'error'
            })
        }
    }
    useEffect(() => {
        if (window) {
            setCourse(JSON.parse(localStorage.getItem('course')))
        }
    }, [])
    return (
        <>
            {
                !isLoading ?
                    <form className={`flexContainer ${styles.formWrapper}`} onSubmit={onSubmit}>
                        {
                            !course ? null
                                :
                                <label className={styles.formCourseTitle}>Curso: {course.course_name}, costo: ${course.course_price}</label>
                        }
                        <label>Nombre completo:</label>
                        <input
                            name='student_name'
                            onChange={onChange}
                            placeholder='Ejemplo: Juan Pérez'
                            required
                            type='text'
                        />
                        <label>Edad:</label>
                        <input
                            name='student_age'
                            onChange={onChange}
                            placeholder='Ejemplo: 30'
                            required
                            type='number'
                            min={18}
                            max={100}
                        />
                        <label>Nacionalidad:</label>
                        <input
                            name='student_nationality'
                            onChange={onChange}
                            placeholder='Ejemplo: Mexicana'
                            type='text'
                            required
                        />
                        <label>Lugar de residencia:</label>
                        <input
                            name='student_state'
                            onChange={onChange}
                            placeholder='Ejemplo: Ciudad de México'
                            required
                            type='text'
                        />
                        <label>Perfil profesional:</label>
                        <div className={styles.formRatioInputs}>
                            <div className={inputData && inputData.student_role === 'ESTUDIANTE' ? styles.formFieldSelected : ''}>
                                <label>Estudiante</label>
                                <input
                                    type='radio'
                                    value='ESTUDIANTE'
                                    name='student_role'
                                    onChange={onChange}
                                    required
                                />
                            </div>
                            <div className={inputData && inputData.student_role === 'PERSONAL_HIMFG' ? styles.formFieldSelected : ''}>
                                <label>Personal del HIMFG</label>
                                <input
                                    type='radio'
                                    value='PERSONAL_HIMFG'
                                    name='student_role'
                                    onChange={onChange}
                                    required
                                />
                            </div>
                            <div className={inputData && inputData.student_role === 'EXTERNO' ? styles.formFieldSelected : ''}>
                                <label>Externo</label>
                                <input
                                    type='radio'
                                    value='EXTERNO'
                                    name='student_role'
                                    onChange={onChange}
                                    required
                                />
                            </div>
                        </div>
                        {
                            inputData && inputData.student_role === 'EXTERNO' || inputData && inputData.student_role === 'PERSONAL_HIMFG' ?
                                <>
                                    <label>Describa su perfil profesional:</label>
                                    <input
                                        name='student_grade'
                                        onChange={onChange}
                                        placeholder='Ejemplo: Médico'
                                        required
                                        type='text'
                                    />
                                </>
                                :
                                null
                        }
                        {
                            inputData && inputData.student_role === 'ESTUDIANTE' || inputData && inputData.student_role === 'PERSONAL_HIMFG' ?
                                <>
                                    <label>
                                        Adjunte una fotografía de su credencial vigente por ambos lados:
                                    </label>
                                    <label>1era parte</label>
                                    <input
                                        name='student_license'
                                        onChange={onChange}
                                        required
                                        type='file'
                                    />
                                    <label>2da parte</label>
                                    <input
                                        name='student_license_part_2'
                                        onChange={onChange}
                                        required
                                        type='file'
                                    />
                                </>
                                :
                                null
                        }
                        {
                            inputData && inputData.student_role === 'EXTERNO' ?
                                <>
                                    <label>
                                        Adjunte una fotografía de su cédula profesional vigente:
                                    </label>
                                    <input
                                        name='student_license'
                                        onChange={onChange}
                                        required
                                        type='file'
                                    />
                                </>
                                :
                                null
                        }
                        <label>Institución de procedencia:</label>
                        <input
                            name='student_institution'
                            onChange={onChange}
                            placeholder='Ejemplo: HIMFG'
                            required
                            type='text'
                        />
                        {
                            /*
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
                                <label>ISSSTE</label>
                                <input
                                    type='radio'
                                    value='ISSSTE'
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
                            */
                        }
                        <label>Teléfono:</label>
                        <input
                            name='student_phone'
                            onChange={onChange}
                            placeholder='Ejemplo: 123456'
                            required
                            type='number'
                        />
                        <label>Correo electrónico donde se enviará su constancia:</label>
                        <input
                            name='student_email'
                            onChange={onChange}
                            placeholder='Ejemplo: correo@correo.com'
                            required
                            type='email'
                        />
                        {
                            /*
                                <label>Genere una contraseña para ingresar a la plataforma:</label>
                        <input
                            name='student_password'
                            onChange={onChange}
                            placeholder='Ejemplo: contraseña123'
                            required
                            type='password'
                        />
                            */
                        }
                        {
                            /*
                                <label>¿Es egresado de algún programa del HIMFG:?</label>
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
                            */
                        }
                        {
                            course && course.modality_id === 3 ?
                                <>
                                    <label>Forma en la que tomará el curso:</label>
                                    <div className={styles.formRatioInputs}>
                                        <div>
                                            <label>En línea</label>
                                            <input
                                                type='radio'
                                                value='en_linea'
                                                name='modality'
                                                onChange={()=> localStorage.setItem('modality', 'en_linea')}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label>Presencial</label>
                                            <input
                                                type='radio'
                                                value='presencial'
                                                name='modality'
                                                onChange={()=> localStorage.setItem('modality', 'presencial')}
                                                required
                                            />
                                        </div>
                                    </div>
                                </>
                                :
                                null
                        }
                        <div className={styles.formButtons}>
                            <button className={styles.buttonSuccess}>Registrar</button>
                            {
                                /*
                                    <button
                                        className={styles.buttonDanger}
                                        type='reset'
                                        onClick={onReset}
                                    >
                                        Cancelar
                                    </button>
                                */
                            }
                        </div>
                    </form>
                    :
                    <Loader
                        message='Procesando...'
                    />
            }
        </>
    )
}