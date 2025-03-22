import React from 'react'
import {btnFill, btnOutline} from "../styles/styles"

const Button = ({text, variant, className, type}) => {
  if (variant === "btnOutline"){
    variant = btnOutline
  }
  else {
    variant = btnFill;
  }
  
  return (
    <button className={`${variant} ${className}`} type={`${type}`}>{text}</button>
  )
}

export default Button