'use client'
import axios from 'axios'
import Router from 'next/router'
import styles from './form.module.css'
import { uploadFile, cypherDat, startPayment } from '@/services'
import { useOnChange } from '../../hooks'
import { useState, useEffect } from 'react'

export const RegisterForm = () => {
    const [course, setCourse] = useState(null)
    const [onReset] = useOnChange()
    const [inputData, setInputData] = useState(null)
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
        try {
            const response = await axios.post(
                `${process.env.BASE_URL_API}api/auth/create-user`,
                inputData
            )
            console.log(response)
        } catch (error) {
            throw new Error(error)
        }
        evt.target.reset()
        onReset()
    }
    const payment = async () => {
        await startPayment()
    }
    useEffect(() => {
        if (window) {
            setCourse(JSON.parse(localStorage.getItem('course')))
        }
    }, [])
    return (
        <>
            <button onClick={payment}>Pago</button>
            <form className={`flexContainer ${styles.formWrapper}`} onSubmit={onSubmit}>
                {
                    !course ? null :
                        <label className={styles.formCourseTitle}>Curso: {course.course_name}</label>
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
                <label>¿Cuál es su perfil profesional?:</label>
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
                                type='text'
                                placeholder='Ejemplo: Médico'
                                name='student_grade'
                                onChange={onChange}
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
                                type='file'
                                name='student_license'
                                onChange={onChange}
                            />
                            <label>2da parte</label>
                            <input
                                type='file'
                                name='student_license_part_2'
                                onChange={onChange}
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
                                type='file'
                                name='student_license'
                                onChange={onChange}
                            />
                        </>
                        :
                        null
                }
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
                <label>Teléfono:</label>
                <input
                    name='student_phone'
                    onChange={onChange}
                    placeholder='Ejemplo: 123456'
                    required
                    type='number'
                />
                <label>Correo electrónico para acceso a la plataforma y donde se enviará su constancia:</label>
                <input
                    name='student_email'
                    onChange={onChange}
                    placeholder='Ejemplo: correo@correo.com'
                    required
                    type='email'
                />
                <label>Genere una contraseña para ingresar a la plataforma:</label>
                <input
                    name='student_password'
                    onChange={onChange}
                    placeholder='Ejemplo: contraseña123'
                    required
                    type='password'
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
        </>
    )
}