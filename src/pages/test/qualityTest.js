import { useState } from "react"

const QualityTest = ({onSubmit})=>{
    const [satisfaction, setSatisfaction] = useState(null)
    const handleSatisfaction = (response) => {
        setSatisfaction(response)
    }

  return (
    <div>
      {satisfaction === null ? (
        <div>
          <h2>¿Estás satisfecho con nuestro servicio?</h2>
          <button onClick={() => handleSatisfaction('Sí')}>Sí</button>
          <button onClick={() => handleSatisfaction('No')}>No</button>
        </div>
      ) : (
        <div>
          <h2>¡Gracias por tu respuesta!</h2>
          <p>Tu satisfacción: {satisfaction}</p>
        </div>
      )}
    </div>
  );
}

export default QualityTest