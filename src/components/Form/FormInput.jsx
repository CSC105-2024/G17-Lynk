import React from 'react';
import { paragraph } from '../../styles/styles';  // Importing custom styling for the input field

// FormInput component to render an input field with optional error message
const FormInput = ({ type, placeholder, error, func }) => {
  return (
    <div className='flex flex-col text-left'>
      <input
        {...func}  // Spread the func prop to allow passing event handlers like onChange
        type={type}  // Sets the input field type (e.g., text, password, email)
        placeholder={placeholder}  // Placeholder text displayed in the input field
        className={`w-full h-10 sm:h-12 px-4 bg-[var(--input-bg-color)] text-[var(--input-text-color)] placeholder-[var(--input-placeholder-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--btn-primary-outline-border-color)] ${paragraph}`}
      />
      
      {/* Display error message if an error exists */}
      {error && (
        <span className='text-[var(--error-primary-color)] text-sm mt-1'>
          {error.message}  {/* Displaying the error message passed via the error prop */}
        </span>
      )}
    </div>
  );
};

export default FormInput;  // Exporting the FormInput component for use in forms
