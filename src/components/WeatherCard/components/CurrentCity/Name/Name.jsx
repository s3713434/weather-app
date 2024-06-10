import React from 'react'

export default function Name({ className, weatherData }) {
  return <h1 className={className}>{weatherData.location.name}</h1>
}
