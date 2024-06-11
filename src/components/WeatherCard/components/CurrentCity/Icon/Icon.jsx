import React from 'react'
import cloudy from '../../../../../assets/weather_icon/Cloudy.png'
import cloudyDay from '../../../../../assets/weather_icon/Cloudy_day.png'
import hail from '../../../../../assets/weather_icon/Hail.png'
import rain from '../../../../../assets/weather_icon/Rain.png'
import snow from '../../../../../assets/weather_icon/Snow.png'
import sunny from '../../../../../assets/weather_icon/Sunny.png'

const weatherIcons = {
  sunny: sunny,
  cloudy: cloudy,
  rain: rain,
  hail: hail,
  snow: snow,
  cloudyDay: cloudyDay,
}

export default function Icon({ className, weatherData }) {
  const getWeatherIcon = (conditionText) => {
    const condition = conditionText.toLowerCase()
    for (const [key, value] of Object.entries(weatherIcons)) {
      if (condition.includes(key)) {
        return value
      }
    }
    return sunny
  }
  const conditionText =
    weatherData.forecast.forecastday[0].day.condition.text.toLowerCase()
  const icon = getWeatherIcon(conditionText)

  return (
    <div className={className}>
      <img src={icon} alt={conditionText} />
    </div>
  )
}
