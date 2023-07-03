import { useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import jsPDF from 'jspdf'
import axios from 'axios'
import Swal from 'sweetalert2'
import { CourseContext } from '@/contexts'
import { useOnChange } from '../../hooks'
import styles from './form.module.css'

export const RegisterForm = ({path})=>{
    const router = useRouter()
    const { course }= useContext(CourseContext)
    const [inputData, onChange, onReset] = useOnChange()
    const doc = new jsPDF();
    const onSubmit = async(evt) =>{
        evt.preventDefault()
        let student
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
                student = JSON.parse(response.config.data)
                doc.setFontSize(40);
                doc.setFont("helvetica", "bold");
                doc.text(`Registro exitoso`, 30, 30);
                doc.setFontSize(15);
                const docWidth = doc.internal.pageSize.getWidth();
                const docHeight = doc.internal.pageSize.getHeight();
                doc.line(0, 60, docWidth, 60);
                doc.setFont("helvetica", "italic");
                const splitDescription = doc.splitTextToSize(
                    `
                    Felicidades,  ${student.student_name}

                    se ha registrado satisfactioriamente,

                    ahora puedes acceder a nuestra oferta académica

                    y solicitar tu constancia              
                    `,
                    docWidth - 20
                );
                doc.text(splitDescription, 10, 80);
                doc.setFontSize(20);
                doc.setFont("helvetica");
                    //doc.text('characterData.type.name', docWidth - 20, 45, { align: "right" });
                doc.line(0, docHeight - 60, docWidth, docHeight - 60);
                doc.text(`Tu Nombre: ${student.student_name}`, 10, docHeight - 40);
                doc.text(`Tu email: ${student.student_email}`, 10, docHeight - 30);
                doc.text(`Tu contraseña: ${student.student_password}`, 10, docHeight - 20);
                doc.save(`datos-acceso${student.student_name}.pdf`)
                if(course) router.push('/payment')
                if(!course) router.push('/userlogin')
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
                Genere una contraseña para nuestra plataforma:
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