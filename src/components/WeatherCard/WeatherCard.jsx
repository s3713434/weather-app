import React from 'react'
import CurrentCity from './components/CurrentCity'

export default function WeatherCard() {
  return (
    <div className='bg-white w-full p-6 shadow-lg rounded-3xl flex'>
      <CurrentCity/>
    </div>
  )
}
