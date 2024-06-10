import React from 'react'
import humidity from '../../../../../assets/meta_icon/humidity.svg'
import pm from '../../../../../assets/meta_icon/PM2.5.svg'
import somaTemp from '../../../../../assets/meta_icon/Somatosensory_temperature.svg'
import windSpeed from '../../../../../assets/meta_icon/wind_speed.svg'

export default function Meta({ className, weatherData }) {
  return (
    <ul className={className}>
      <li>
        <img src={humidity} alt='humidity' />
        <span>{weatherData.current.humidity}%</span>
      </li>
      <li>
        <img className='ml-3' src={windSpeed} alt='Wind speed' />
        <span>{Math.round(weatherData.current.wind_kph)}km/h</span>
      </li>
      <li>
        <img src={pm} alt='pm2.5' />
        <span>{Math.round(weatherData.current.air_quality.pm2_5)}μg</span>
      </li>
      <li>
        <img src={somaTemp} alt='Somatosensory temperature' />
        <span>{Math.round(weatherData.current.feelslike_c)}°</span>
      </li>
    </ul>
  )
}
