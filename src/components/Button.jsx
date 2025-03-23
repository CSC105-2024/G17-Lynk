import React from 'react'
import {btnFill, btnOutline} from "../styles/styles"

// Button component
const Button = ({text, variant, className, type}) => {

  //Check if variant is btnOutline or btnFill
  if (variant === "btnOutline"){
    variant = btnOutline
  }
  else { //Default to btnFill
    variant = btnFill;
  }
  
  return (
    <button className={`${variant} ${className}`} type={`${type}`}>{text}</button>
  )
}

export default Button