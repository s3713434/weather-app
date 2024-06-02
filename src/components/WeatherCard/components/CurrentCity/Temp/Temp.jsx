import React from 'react'

export default function Temp({className}) {
  return (
    <div className={className}>
      <p className='font-bold text-8xl'>23°</p>
      <p>20 ~ 23°</p>
    </div>
  )
}
