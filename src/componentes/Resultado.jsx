import React from 'react'

function Resultado({ climaSitio }) {


    return (
        <>

            <div className='m-auto text-center'>
                <div className='flex justify-center text-center'>
                    <img src={`https://openweathermap.org/img/wn/${climaSitio.weather[0].icon}@2x.png`} alt="imagen del clima" />
                    <p className='text-indigo-200 text-3xl my-auto'>{climaSitio.main.temp}°C</p>
                </div>

                <div>
                    <div className='flex justify-center text-center m-auto'>
                        <p className='text-white text-2xl px-5'>Temp Max   <span className='font-normal'>{climaSitio.main.temp_max}°C</span></p>
                        <p className='text-white text-2xl px-5'>Temp Min   <span className='font-normal'>{climaSitio.main.temp_min}°C</span></p>
                    </div>
                    <div className='md:flex justify-center'>
                        <p className='text-white m-4'>ST:  <span className='font-normal'>{climaSitio.main.feels_like}°C</span></p>
                        <p className='text-white m-4'>Humedad:  <span className='font-normal'>{climaSitio.main.humidity}%</span></p>
                        <p className='text-white m-4'>Presion Atm:  <span className='font-normal'>{climaSitio.main.pressure} hPa</span></p>
                        <p className='text-white m-4'>Viento:  <span className='font-normal'>{climaSitio.wind.speed} km/h</span></p>
                    </div>
                </div>

                <div>
                    <img src={`https://api.tomtom.com/map/1/staticimage?key=HEvE1XquXmGNCTOmGsV7jVbVdrxkX8GV=-73.1234,40.5678&zoom=15&format=png&layer=basic&style=main`} alt="" />
                </div>

            </div>


        </>
    )
}

export default Resultado
