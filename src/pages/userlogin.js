import { Container, Login, Title } from '../components'
const UserLogin = ()=>{
    return (
        <Container>
            <Title>
                Iniciar sesión
            </Title>
            <Login>
                <label>Correo:</label>
                <input type='email' required/>
                <label>Contraseña:</label>
                <input type='password' required/>
                <button>Iniciar sesión</button>
            </Login>
        </Container>
    )
}

export default UserLogin