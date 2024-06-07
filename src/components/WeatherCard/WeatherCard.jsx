import React from 'react'
import CurrentCity from './components/CurrentCity'
import Forecast from './components/Forecast'

export default function WeatherCard() {
  return (
    <div className='bg-white p-6 shadow-lg rounded-3xl flex space-x-10 min-w-max border-box'>
      <CurrentCity/>
      <div className='flex flex-col align-center w-full'>
        <Forecast />
      </div>
    </div>
  )
}
