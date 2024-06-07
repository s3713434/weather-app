import React from 'react'
import humidity from '../../../../../assets/meta_icon/humidity.svg'
import pm from '../../../../../assets/meta_icon/PM2.5.svg'
import somaTemp from '../../../../../assets/meta_icon/Somatosensory_temperature.svg'
import windSpeed from '../../../../../assets/meta_icon/wind_speed.svg'

export default function Meta({className}) {
  const liClassName = ''
  return (
    <ul className={className}>
      <li className={liClassName}>
        <img src={humidity} alt="humidity" />
        <span>85%</span>
      </li>
      <li className={liClassName}>
        <img src={windSpeed} alt="Wind speed" />
        <span>9km/h</span>
      </li>
      <li className={liClassName}>
      <img src={pm} alt="pm2.5" />
      <span>75</span>
      </li>
      <li className={liClassName}>
        <img src={somaTemp} alt="Somatosensory temperature" />
        <span>26°</span>
      </li>
    </ul>
  )
}
