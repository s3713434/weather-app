import React from 'react'
import cloudy from '../../../../assets/weather_icon/Cloudy.png'
import cloudyDay from '../../../../assets/weather_icon/Cloudy_day.png'
import hail from '../../../../assets/weather_icon/Hail.png'
import rain from '../../../../assets/weather_icon/Rain.png'
import snow from '../../../../assets/weather_icon/Snow.png'
import sunny from '../../../../assets/weather_icon/Sunny.png'

export default function OtherCities() {
  return (
    <ul className='mt-10 flex flex-wrap gap-4'>
      <li className='relative bg-cover bg-center rounded-2xl overflow-hidden w-48 h-32 flex justify-center items-center' style={{ backgroundImage: "url('https://github.com/s3713434/weather-app/blob/master/src/assets/City/Sydney.png?raw=true')" }}>
        <div className='absolute inset-0 bg-gradient-to-b from-blue-50 to-blue-500 mix-blend-multiply'></div>
        <div className='relative z-10 text-white flex flex-col justify-center items-center'>
          <img className='w-12 h-12 mb-2' src={sunny} alt="Weather Icon" />
          <h3 className='text-lg font-bold text-xl'>Sydney</h3>
          <p className='text-sm'>28 ~ 32°</p>
        </div>
      </li>
    </ul>
  )
}
