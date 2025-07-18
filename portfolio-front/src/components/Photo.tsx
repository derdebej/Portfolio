import React from 'react'
import avatar from '../assets/ee2115e5-1fa1-4500-9078-5067804191f7.png'

const Photo = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img
        src={avatar}
        alt="Nader Ben Salah"
        className="rounded-xl w-48 h-48 object-cover shadow-lg border-1 border-gray-400"
      />

    </div>
  )
}

export default Photo