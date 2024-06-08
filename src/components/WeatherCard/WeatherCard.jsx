import React from 'react'
import CurrentCity from './components/CurrentCity'
import Forecast from './components/Forecast'
import SearchBar from './components/SearchBar'
import OtherCities from './components/OtherCities'

export default function WeatherCard() {
  return (
    <div className='bg-indigo-50 p-6 shadow-lg rounded-3xl flex space-x-10 min-w-max border-box'>
      <CurrentCity/>
      <div className='flex flex-col align-center w-full'>
        <Forecast />
        <SearchBar/>
        <OtherCities/>
      </div>
    </div>
  )
}
