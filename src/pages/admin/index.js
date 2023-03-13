import { Login, Container } from "../../components"

const Admin = ()=> {
    return (
        <Container>
            <Login>
                <label>Usuario:</label>
                <input type='text' required/>
                <label>Contraseña:</label>
                <input type='password' required/>
                <button>Iniciar sesión</button>
            </Login>
        </Container>
    )
}
export default Admin