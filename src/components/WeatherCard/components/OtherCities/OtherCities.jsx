import React from 'react'
import sydney from '../../../../assets/City/Sydney.png'

export default function OtherCities() {
  return (
    <ul className='mt-10 flex flex-wrap gap-4'>
      <li className='relative bg-cover bg-center rounded-2xl overflow-hidden w-64 h-32' style={{ backgroundImage: "url('')" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent mix-blend-multiply"></div>
        <div className="relative z-10 p-4 text-white">
          <h3 className='text-lg font-bold'>Sydney</h3>
          <p>28 ~ 32°</p>
        </div>
      </li>
    </ul>
  )
}
