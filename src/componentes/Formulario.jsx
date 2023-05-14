import { useState } from 'react'

function Formulario({lugar, setLugar, climaSitio, setClimaSitio, setError, setErrorLugar }) {


    const handleBuscarClima = (e) => {
        e.preventDefault();

        if (lugar === "") {
            setErrorLugar(false)
            setError(true)
            setClimaSitio([])
            return
        }

        setError(false)

        const consultarApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${lugar},{state%20code},{country%20code}&units=metric&appid=7cc2b14f18358d9009ed4124f83e1252`
            const resultado = await fetch(url)
            const respuesta = await resultado.json()

            if(respuesta.cod !== "404"){
                setErrorLugar(false)
                setClimaSitio(respuesta)
            }
            else{
                setErrorLugar(true)
                setClimaSitio([])
                return
            }
            
            console.log(respuesta)
        }
        consultarApi()
    }

    return (
        <div className='m-auto text-center rounded-lg md:w-2/3 lg:w-3/6'>
            
            <label className='text-white mb-5 text-2xl text-center m-auto md:w-3/4' htmlFor="lugar">Ingrese Ciudad, Provincia o Pais</label>
            <input
                className='w-2/4 block m-auto mb-5 mt-10 rounded-md text-center uppercase py-2'
                id="lugar"
                type="text"
                placeholder='Ingrese lugar a consultar'
                value={lugar}
                onChange={((e) => setLugar(e.target.value))}
            />

            <button
                onClick={handleBuscarClima}
                className='text-white bg-indigo-900 w-2/4 rounded-lg uppercase px-2 py-2'
            >Consultar</button>

        </div>
    )
}

export default Formulario
