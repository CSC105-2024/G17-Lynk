import React from 'react';
import {
  btnFill,
  btnOutline,
  btnNotFilled,
  btnDanger,
  btnTransparent,
} from '../styles/styles';

/**
 * A reusable Button component with multiple style variants
 *
 * @param {Object} props - Component props
 * @param {string} props.text - Button display text
 * @param {'btnOutline'|'btnFill'|'btnNotFilled'|'btnDanger'} [props.variant] - Button style variant
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {'button'|'submit'|'reset'} [props.type='button'] - HTML button type attribute
 * @param {Function} [props.onClick] - Click handler function
 * @returns {JSX.Element} A styled button element
 */
const Button = ({ text, variant, className, type = 'button', onClick }) => {
  // Determine which style variant to use
  let buttonStyle;
  switch (variant) {
    case 'btnOutline':
      buttonStyle = btnOutline;
      break;
    case 'btnNotFilled':
      buttonStyle = btnNotFilled;
      break;
    case 'btnDanger':
      buttonStyle = btnDanger;
      break;
    case 'btnTransparent':
      buttonStyle = btnTransparent;
    default:
      // Default to filled button style if no variant specified
      // or if variant doesn't match any cases
      buttonStyle = btnFill;
  }

  return (
    <button
      // Combine the base button style with any additional classes
      className={`${buttonStyle} ${className || ''}`}
      type={type} // Button type (submit, button, reset)
      onClick={(e) => {
        // Optional: Add animation/transformation effects here
        // e.g., scale effect on click

        // Call the provided onClick handler if it exists
        onClick?.();
      }}
      aria-label={text} // Accessibility improvement
    >
      {text}
    </button>
  );
};

export default Button;
