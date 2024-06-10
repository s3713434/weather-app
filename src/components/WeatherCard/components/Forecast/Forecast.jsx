import { React, useState } from 'react'
import cloudy from '../../../../assets/weather_icon/Cloudy.png'
import cloudyDay from '../../../../assets/weather_icon/Cloudy_day.png'
import hail from '../../../../assets/weather_icon/Hail.png'
import rain from '../../../../assets/weather_icon/Rain.png'
import snow from '../../../../assets/weather_icon/Snow.png'
import sunny from '../../../../assets/weather_icon/Sunny.png'

export default function Forecast() {
  return (
    <ul className='flex w-full text-center my-10 space-x-14 text-indigo-950'>
      <li>
        <h2 className='text-2xl font-semibold'></h2>
        <p>Days</p>
        <img className='size-40' src={rain} alt={rain} />
        <p>20 ~ 25°</p>
      </li>

      <li>
        <h2 className='text-2xl font-semibold'>Monday</h2>
        <p>Days</p>
        <img className='size-40' src={cloudyDay} alt={cloudyDay} />
        <p>18 ~ 20°</p>
      </li>

      <li>
        <h2 className='text-2xl font-semibold'>Monday</h2>
        <p>Days</p>
        <img className='size-40' src={cloudyDay} alt={cloudyDay} />
        <p>20 ~ 23°</p>
      </li>

      <li>
        <h2 className='text-2xl font-semibold'>Monday</h2>
        <p>Days</p>
        <img className='size-40' src={sunny} alt={sunny} />
        <p>28 ~ 30°</p>
      </li>
    </ul>
  )
}
