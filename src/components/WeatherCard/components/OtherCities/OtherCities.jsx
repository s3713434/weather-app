import { React, useState, useEffect } from 'react'
import cloudy from '../../../../assets/weather_icon/Cloudy.png'
import cloudyDay from '../../../../assets/weather_icon/Cloudy_day.png'
import hail from '../../../../assets/weather_icon/Hail.png'
import rain from '../../../../assets/weather_icon/Rain.png'
import snow from '../../../../assets/weather_icon/Snow.png'
import sunny from '../../../../assets/weather_icon/Sunny.png'
import getWeatherForCity from '../../../../api/getWeatherForCity'

const cities = [
  {
    name: 'Sydney',
    backgroundImage:
      'https://github.com/s3713434/weather-app/blob/master/src/assets/City/Sydney.png?raw=true',
  },
  {
    name: 'Shanghai',
    backgroundImage:
      'https://github.com/s3713434/weather-app/blob/master/src/assets/City/Shanghai.png?raw=true',
  },
  {
    name: 'New York',
    backgroundImage:
      'https://github.com/s3713434/weather-app/blob/master/src/assets/City/Newyork.png?raw=true',
  },
  {
    name: 'London',
    backgroundImage:
      'https://github.com/s3713434/weather-app/blob/master/src/assets/City/London.png?raw=true',
  },
]

const weatherIcons = {
  sunny: sunny,
  cloudy: cloudy,
  rain: rain,
  hail: hail,
  snow: snow,
  cloudyDay: cloudyDay,
}

const getWeatherIcon = (conditionText) => {
  const condition = conditionText.toLowerCase()
  for (const [key, value] of Object.entries(weatherIcons)) {
    if (condition.includes(key)) {
      return value
    }
  }
  return sunny
}

export default function OtherCities() {
  const [citiesWeather, setCitiesWeather] = useState([])

  useEffect(() => {
    const fetchCitiesWeather = async () => {
      try {
        const weatherDataPromises = cities.map((city) =>
          getWeatherForCity(city.name)
        )
        const weatherDataArray = await Promise.all(weatherDataPromises)
        setCitiesWeather(weatherDataArray)
      } catch (error) {
        console.error('Error fetching weather data for cities:', error)
      }
    }

    fetchCitiesWeather()
  }, [])

  return (
    <ul className='mt-14 flex flex-wrap gap-4'>
      {citiesWeather.map((cityWeather, index) => {
        const conditionText =
          cityWeather.forecast.forecastday[0].day.condition.text.toLowerCase()
        const icon = getWeatherIcon(conditionText)
        return (
          <li
            key={index}
            className='relative bg-cover bg-center rounded-2xl overflow-hidden w-48 h-32 flex flex-col justify-center align-center'
            style={{ backgroundImage: `url(${cities[index].backgroundImage})` }}
          >
            <div className='absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent mix-blend-multiply flex justify-center items-center'></div>
            <div className='relative z-10 p-4 text-white text-center flex flex-col justify-center items-center'>
              <img className='w-10 h-10' src={icon} alt={conditionText} />
              <h3 className='text-lg font-bold'>{cityWeather.location.name}</h3>
              <p>
                {Math.round(cityWeather.forecast.forecastday[0].day.mintemp_c)}{' '}
                ~{Math.round(cityWeather.forecast.forecastday[0].day.maxtemp_c)}
                °
              </p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
