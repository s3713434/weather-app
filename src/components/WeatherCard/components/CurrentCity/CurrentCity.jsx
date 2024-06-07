import React from 'react'
import bg from '../../../../assets/background/Cloudy_day_background.png'
import Name from './Name'
import Icon from './Icon'
import CurrentDate from './CurrentDate'
import Temp from './Temp'
import Meta from './Meta'

export default function CurrentCity() {
  return (
    <div className='relative h-full bg-gradient-to-b from-cyan-500 to-blue-500 rounded-3xl overflow-hidden box-border flex flex-col min-w-max'>
      <img src={bg} alt="cloudy" className='absolute inset-0 w-full h-full object-cover z-0' />
      <CurrentDate className={'text-white ms-6 mb-4 mt-5'}/>
      <div className='relative z-10 flex flex-col items-center justify-cente text-center p-5 size-full'>
          <Name className={'text-white font-bold text-3xl mb-11 '} />
          <Temp className={'text-white text-center justify-center items-center'}/>
          <Icon className={'mb-10'}/>
          <Meta className={'flex justify-center items-center text-center bg-white rounded-2xl px-6 py-5 space-x-9'}/>
      </div>
    </div>
  )
}
