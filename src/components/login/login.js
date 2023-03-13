import styles from './login.module.css'
import { Container } from '../../components'

export const Login = ({children, onSubmit})=>{
    return (
        <div className='flexContainer'>
            <form
            onSubmit={onSubmit}
            className={styles.formLogin}
            >
                {children}
            </form>
        </div>
    )
}