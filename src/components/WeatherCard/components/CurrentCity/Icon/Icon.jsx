import React from 'react'
import icon from '../../../../../assets/weather_icon/Cloudy.png'

export default function Icon({className}) {
  return (
    <div className={className}>
      <img src={icon} alt="Icon" />
    </div>
  )
}
