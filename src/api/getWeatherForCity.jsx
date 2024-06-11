import axios from 'axios'
const API_KEY = process.env.REACT_APP_API_KEY

export default async function getWeatherForCity(city) {
  try {
    const res = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1`
    )
    return res.data
  } catch (error) {
    console.error('Error fetching weather data:', error)
    throw error
  }
}
