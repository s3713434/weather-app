import axios from 'axios'
import { React, useEffect, useState } from 'react'
const API_KEY = process.env.REACT_APP_API_KEY

export default function GetWeather() {
  const [weatherData, setWeatherData] = useState([])
  const [loading, setLoading] = useState(false)
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=London&days=5`
  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true)
      const res = await axios.get(url)
      console.log('res', res)
      setWeatherData(res.data)
      setLoading(false)
    }
    fetchWeather()
  }, [])
}
