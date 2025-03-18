import React from 'react'

const FormInput = ({type, placeholder}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full h-12 p-5 bg-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  )
}

export default FormInput