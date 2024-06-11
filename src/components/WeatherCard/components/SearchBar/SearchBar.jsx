import React, { useState } from 'react'

export default function SearchBar({ onSearch }) {
  const [cityName, setCityName] = useState('')

  const handleChange = (e) => {
    onSearch(cityName)
    setCityName('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleChange()
    }
  }

  return (
    <div className='bg-white p-1 w-3/5 flex space-x-1 rounded-2xl mt-24 '>
      <input
        className='w-full p-2 outline-none'
        type='text'
        placeholder='Search for a city'
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className='bg-indigo-600 text-white py-2 px-5 rounded-2xl cursor-pointer hover:bg-indigo-700'
        type='button'
        onClick={handleChange}
      >
        Search
      </button>
    </div>
  )
}
