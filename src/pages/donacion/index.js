import { Container, Title } from "@/components"

export default function(){
    return (
        <Container>
            <Title>Si deseas donar para beneficiar a uestros pacientes, este es el lugar</Title>
            <div className="flexContainer">
                <form style={formStyle}>
                    <label>Ingrese la cantidad que desea donar:</label>
                    <input type='number' min='1'/>
                    <button>
                        <img src='https://himfg.edu.mx/archivos/graficos/banorte/BANORTE.jpg'/>
                        <span>Donar</span>
                    </button>
                </form>
            </div>
        </Container>
    )
}
const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem'
}

const formButton = {
    
}