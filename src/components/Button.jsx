import React from 'react'
import {btn, btnFill, btnOutline} from "../styles/styles"

const Button = ({text, variant, className}) => {
  if (variant === "btnFill") {
    variant = btnFill
  }
  else if (variant === "btnOutline"){
    variant = btnOutline
  }
  return (
    <button className={`${variant} ${className}`} type="submit">{text}</button>
  )
}

export default Button