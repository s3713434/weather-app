import { React } from 'react'
import cloudy from '../../../../assets/weather_icon/Cloudy.png'
import cloudyDay from '../../../../assets/weather_icon/Cloudy_day.png'
import hail from '../../../../assets/weather_icon/Hail.png'
import rain from '../../../../assets/weather_icon/Rain.png'
import snow from '../../../../assets/weather_icon/Snow.png'
import sunny from '../../../../assets/weather_icon/Sunny.png'

export default function Forecast({ weatherData }) {
  const {
    forecast: { forecastday },
  } = weatherData
  const nextFourDays = forecastday.slice(1, 5)

  return (
    <ul className='flex w-full text-center my-10 space-x-14 text-indigo-950'>
      {nextFourDays.map((day, index) => {
        const icons = day.day.condition.text.toLowerCase()
        let res = null
        if (icons.includes('sunny')) {
          res = sunny
        }
        if (icons.includes('partly cloudy')) {
          res = cloudyDay
        }
        if (icons.includes('cloudy')) {
          res = cloudy
        }
        if (icons.includes('snow')) {
          res = snow
        }
        if (icons.includes('ice')) {
          res = hail
        }
        if (icons.includes('rain')) {
          res = rain
        }

        return (
          <li key={index}>
            <h2 className='text-2xl font-semibold'>
              {new Date(day.date).toLocaleDateString('en-US', {
                weekday: 'long',
              })}
              {/* {console.log(day.date)} */}
            </h2>
            <img className='size-40' src={res} alt={icons} />
            <p>
              {Math.round(day.day.mintemp_c)} ~ {Math.round(day.day.maxtemp_c)}°
              {/* {console.log(day.day)} */}
              {/* {console.log(icons)} */}
            </p>
          </li>
        )
      })}
    </ul>
  )
}
