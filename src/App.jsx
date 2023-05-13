import { useState, useEffect } from 'react'
import Formulario from './componentes/Formulario'
import Resultado from './componentes/Resultado'
import Error from './componentes/Error'

function App() {

  const [lugar, setLugar] = useState(
    localStorage.getItem('lugar') ? JSON.parse(localStorage.getItem('lugar')) : "")

  const [climaSitio, setClimaSitio] = useState(
    localStorage.getItem('climaSitio') ? JSON.parse(localStorage.getItem('climaSitio')) : [])

  const [error, setError] = useState(false)

  const [errorLugar, setErrorLugar] = useState(false)

  /// Guardo los datos en LS
  useEffect(() => {
    localStorage.setItem("climaSitio", JSON.stringify(climaSitio))
  }, [climaSitio])

  useEffect(() => {
    localStorage.setItem("lugar", JSON.stringify(lugar))
  }, [lugar])


  return (
    <>
      <h1 className='font-bold text-center text-4xl uppercase mt-10 text-white mb-10 mx-3'>Consulta el <span className='text-indigo-400'> Clima Aqui</span></h1>

      {error && <Error>Dede Ingresar un Lugar</Error>}
      {errorLugar && <Error>No existe el Lugar</Error>}
      <Formulario
        lugar={lugar}
        setLugar={setLugar}
        climaSitio={climaSitio}
        setClimaSitio={setClimaSitio}
        setError={setError}
        setErrorLugar={setErrorLugar}
      />

      {climaSitio.length != 0 ? <Resultado climaSitio={climaSitio} /> : ""}

    </>
  )
}

export default App
