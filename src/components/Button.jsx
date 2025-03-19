import React from 'react'
import {button} from '../styles/styles'

const Button = ({text}) => {
  return (
    <button className={`${button}`}>{text}</button>
  )
}

export default Button