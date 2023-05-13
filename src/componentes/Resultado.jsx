import React from 'react'
import soleado from "../img/soleado.png"
import lluvia from "../img/lluvia.png"
import parcialmenteNublado from "../img/parcialmenteNublado.png"
import tormenta from "../img/tormenta.png"

const climaAfuera = {
    Rain: lluvia,
    Clear: soleado,
    Clouds: parcialmenteNublado
}

function Resultado({ climaSitio }) {

    return (
        <>

            <div className='w-4/5 m-auto mt-5 mb-5 md:flex md:w-2/5 md:mt-10 lg:w-1/3'>

                <div className='md:w-2/3 text-center md:text-left '>
                    <p className='text-white'>Tamperatura Maxima:  <span className='font-normal'>{climaSitio.main.temp_max}</span></p>
                    <p className='text-white'>Tamperatura Minima:  <span className='font-normal'>{climaSitio.main.temp_min}</span></p>
                    <p className='text-white'>Humedad:  <span className='font-normal'>{climaSitio.main.humidity}%</span></p>
                    <p className='text-white'>Sensacion Termica:  <span className='font-normal'>{climaSitio.main.feels_like}</span></p>
                    <p className='text-white'>Presion Atmosferica:  <span className='font-normal'>{climaSitio.main.pressure}</span></p>
                    <p className='text-white'>Velocidad del Viento:  <span className='font-normal'>{climaSitio.wind.speed}</span></p>
                </div>

                <div className='md:w-1/3 md:m-auto mt-10'>
                    <p className='text-white text-center uppercase'>{climaSitio.weather[0].description}</p>
                    <img className='' src={`https://openweathermap.org/img/wn/${climaSitio.weather[0].icon}@2x.png`} alt="imagen del clima" />
                </div>

            </div>

        </>
    )
}

export default Resultado
