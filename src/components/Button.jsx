import React from 'react';
import { btnFill, btnOutline, btnNotFilled, btnDanger } from '../styles/styles';

// Button component
const Button = ({ text, variant, className, type, onClick }) => {
  //Check if variant is btnOutline or btnFill
  if (variant === 'btnOutline') {
    variant = btnOutline;
  } else if (variant === 'btnNotFilled') {
    variant = btnNotFilled;
  } else if (variant === 'btnDanger') {
    variant = btnDanger;
  } else {
    //Default to btnFill
    variant = btnFill;
  }

  return (
    <button
      className={`${variant} ${className}`}
      type={`${type}`}
      onClick={() => {
        // Some Scaleable or Translating Action for Button Animation
        onClick();
      }}
    >
      {text}
    </button>
  );
};

export default Button;
