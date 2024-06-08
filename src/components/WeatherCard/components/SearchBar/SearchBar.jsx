import React from 'react'

export default function SearchBar() {
  return (
    <div className='bg-white p-1 w-3/5 flex space-x-1 rounded-2xl mt-20'>
      <input className='w-full p-2' type="text" placeholder='Search for a city'/>
      <button className='bg-indigo-600 text-white py-2 px-5 rounded-2xl cursor-pointer hover:bg-indigo-700' type="button">Search</button>
    </div>
  )
}
