import React from 'react'

const Button = ({text, style}) => {
  return (
    <button className={`bg-white  rounded-xl w-full h-8 text-black text-center hover:bg-blue-200 ${style}`}>{text}</button>
  )
}

export default Button