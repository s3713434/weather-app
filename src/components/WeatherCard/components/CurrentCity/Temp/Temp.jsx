import React from 'react'

export default function Temp({ className, weatherData }) {
  const {
    forecast: { forecastday },
  } = weatherData
  const todayForecast = forecastday[0]

  return (
    <div className={className}>
      <p className='font-bold text-8xl ml-8'>
        {Math.round(weatherData.current.temp_c)}°
      </p>
      <p>
        {Math.round(todayForecast.day.mintemp_c)} ~ 
        {' ' + Math.round(todayForecast.day.maxtemp_c)}°
      </p>
    </div>
  )
}
