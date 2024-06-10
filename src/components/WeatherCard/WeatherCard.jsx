import { React, useEffect, useState } from 'react'
import CurrentCity from './components/CurrentCity'
import Forecast from './components/Forecast'
import SearchBar from './components/SearchBar'
import OtherCities from './components/OtherCities'
import getWeather from '../../api/getWeather'

export default function WeatherCard() {
  const [weatherData, setWeatherData] = useState()
  const [loading, setLoading] = useState(true)
  const [city, setCity] = useState('Melbourne')

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const data = await getWeather(city)
        setWeatherData(data)
        setLoading(false)
      } catch (error) {
        throw new Error(`Cannot fetch data:${error}`)
      }
    }

    fetchData()
  }, [city])

  if (loading) {
    return <h1 className='text-white bold'>Loading....</h1>
  }

  return (
    <div className='bg-indigo-50 p-6 shadow-lg rounded-3xl flex space-x-10 min-w-max border-box'>
      <CurrentCity weatherData={weatherData} />
      <div className='flex flex-col align-center w-full'>
        <Forecast weatherData={weatherData} />
        <SearchBar />
        <OtherCities />
      </div>
    </div>
  )
}
