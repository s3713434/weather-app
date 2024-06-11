import React from 'react'
import bg from '../../../../assets/background/Cloudy_day_background.png'
import Name from './Name'
import Icon from './Icon'
import CurrentDate from './CurrentDate'
import Temp from './Temp'
import Meta from './Meta'

export default function CurrentCity({ weatherData }) {
  return (
    <div className='relative w-3/12 h-full bg-gradient-to-b from-blue-400 to-blue-600 rounded-3xl overflow-hidden box-border flex flex-col min-w-max'>
      <img
        src={bg}
        alt='cloudy'
        className='absolute inset-0 w-full h-full object-cover z-0'
      />
      <CurrentDate className={'text-white ms-6 mb-4 mt-5'} />
      <div className='relative z-10 flex flex-col items-center justify-cente text-center p-5 size-full'>
        <Name
          className={'text-white font-bold text-3xl mb-11 '}
          weatherData={weatherData}
        />
        <Temp
          className={'text-white text-center justify-center items-center'}
          weatherData={weatherData}
        />
        <Icon className={'mb-10'} weatherData={weatherData} />
        <Meta
          className={
            'flex justify-center items-center text-center bg-white rounded-2xl px-6 py-5 space-x-9 text-indigo-950'
          }
          weatherData={weatherData}
        />
      </div>
    </div>
  )
}
