import axios from "axios"
import { Login, Container } from "../../components"
import { useOnChange } from "../../hooks"

const Admin = ()=> {
    const [inputData, onChange, onReset]= useOnChange()
    const login = async(evt)=>{
        evt.preventDefault()
        try {
            await axios.post(
                `${process.env.BASE_URL_API}api/auth/login-admin`,
                inputData
                )
        } catch (error) {
            throw new Error(error)
        }
        evt.target.reset()
        onReset()
    }
    return (
        <Container>
            <Login onSubmit={login}>
                <label>Usuario:</label>
                <input
                type='text'
                required
                onChange={onChange}
                name='admin_user'
                />
                <label>Contraseña:</label>
                <input
                type='password'
                required
                onChange={onChange}
                name='admin_password'
                />
                <button>Iniciar sesión</button>
            </Login>
        </Container>
    )
}
export default Admin