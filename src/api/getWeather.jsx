import axios from 'axios'
const API_KEY = process.env.REACT_APP_API_KEY

export default async function getWeather(city) {
  try {
    const res = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&aqi=yes&days=5`
    )
    console.log(res.data)
    return res.data
  } catch (error) {
    throw new Error(`Cannot fetch data:${error}`)
  }
}
