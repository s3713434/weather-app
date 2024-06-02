import React from 'react'
import bg from '../../../../assets/background/Cloudy_day_background.png'
import Name from './Name'
import Icon from './Icon'
import CurrentDate from './CurrentDate'

export default function CurrentCity() {
  return (
    <div className='relative h-full bg-gradient-to-b from-cyan-500 to-blue-500 rounded-3xl overflow-hidden box-border'>
        <img src={bg} alt="cloudy" className='absolute inset-0 w-full h-full object-cover z-0'/>
        <div className='relative z-10 flex flex-col items-center'>
          <CurrentDate/>
          <Name className={'text-white text-2xl'}/>
          <Icon/>
        </div>
    </div>
  )
}
