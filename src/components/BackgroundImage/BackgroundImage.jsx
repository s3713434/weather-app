import React from 'react'
import bg from '../../assets/background.png'
export default function BackgroundImage({children}) {
  return (
    <div className='min-h-screen min-w-max bg-gradient-to-r from-indigo-300 to-indigo-600 relative flex items-center justify-center box-border overflow-hidden'>
      <img src={bg} alt="Background" className='absolute bottom-0 right-0'/>
      <div className='relative z-10 '>
        {children}
      </div>
    </div>
  )
}
