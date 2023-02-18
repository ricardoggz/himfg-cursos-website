import styles from './form.module.css'

export const RegisterForm = ()=>{
    return (
        <form className={`flexContainer ${styles.formWrapper}`}>
            <label>Nombre completo:</label>
            <input type='text' required/>
            <label>Título profesional:</label>
            <div className={styles.formRatioInputs}>
                <div>
                    <label>Médico</label>
                    <input type='radio' value='Médico'/>
                </div>
                <div>
                    <label>Pasante</label>
                    <input type='radio' value='Pasante'/>
                </div>
                <div>
                    <label>EST. MED</label>
                    <input type='radio' value='Médico'/>
                </div>
                <div>
                    <label>Lic. Enfermería</label>
                    <input type='radio' value='Médico'/>
                </div>
                <div>
                    <label>ENF. ESP</label>
                    <input type='radio' value='Médico'/>
                </div>
                <div>
                    <label>EST. ENF</label>
                    <input type='radio' value='Médico'/>
                </div>
                <div>
                    <label>Químico</label>
                    <input type='radio' value='Químico'/>
                </div>
                <div>
                    <label>Biólogo</label>
                    <input type='radio' value='Biólogo'/>
                </div>
                <div>
                    <label>M. En C.</label>
                    <input type='radio' value='Biólogo'/>
                </div>
                <div>
                    <label>Psicólogo</label>
                    <input type='radio' value='Biólogo'/>
                </div>
                <div>
                    <label>Pedagogo</label>
                    <input type='radio' value='Biólogo'/>
                </div>
                <div>
                    <label>Trabajador social</label>
                    <input type='radio' value='Biólogo'/>
                </div>
                <div>
                    <label>Otro (especifique)</label>
                    <input type='text'/>
                </div>
            </div>
            <label>Instituto de procedencia:</label>
            <div className={styles.formRatioInputs}>
                <div>
                    <label>IMSS</label>
                    <input type='radio' value='Biólogo'/>
                </div>
                <div>
                    <label>SSA</label>
                    <input type='radio' value='Biólogo'/>
                </div>
                <div>
                    <label>ISSTE</label>
                    <input type='radio' value='Biólogo'/>
                </div>
                <div>
                    <label>GDF</label>
                    <input type='radio' value='Biólogo'/>
                </div>
                <div>
                    <label>HIMFG</label>
                    <input type='radio' value='Biólogo'/>
                </div>
                <div>
                    <label>Otro (especifique)</label>
                    <input type='text'/>
                </div>
            </div>
            <label>Cargo:</label>
            <input type='text' required/>
            <label>Teléfono:</label>
            <input type='number' required/>
            <label>Edad:</label>
            <input type='number' required/>
            <label>Correo electrónico:</label>
            <input type='email' required/>
        </form>
    )
}