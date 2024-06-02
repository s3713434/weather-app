import logo from './logo.svg'
import './App.css'
import BackgroundImage from './components/BackgroundImage'
import WeatherCard from './components/WeatherCard'

function App() {
  return (
    <BackgroundImage>
      <WeatherCard></WeatherCard>
    </BackgroundImage>
  )
}

export default App
