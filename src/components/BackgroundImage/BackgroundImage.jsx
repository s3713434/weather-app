import React from 'react'
import bg from '../../assets/background.png'
export default function BackgroundImage({children}) {
  return (
    <div className='min-h-screen bg-gradient-to-r from-indigo-300 to-indigo-600 relative flex items-center justify-center'>
      <img src={bg} alt="Background" className='absolute bottom-0 right-0'/>
      <div className='relative z-10 w-4/5 h-4/5 '>
        {children}
      </div>
    </div>
  )
}
