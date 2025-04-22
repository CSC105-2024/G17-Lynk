import React from 'react';
import { paragraph } from '../../styles/styles';

const FormInput = ({ type, placeholder, error, func }) => {
  return (
    <div className='flex flex-col text-left'>
      <input
        {...func}
        type={type}
        placeholder={placeholder}
        className={`w-full h-10 sm:h-12 px-4 bg-[var(--input-bg-color)] text-[var(--text-secondary-color)] placeholder-[var(--input-placeholder-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--btn-primary-outline-border-color)] ${paragraph}`}
      />
      {error && (
        <span className='text-[var(--error-primary-color)] text-sm mt-1'>
          {error.message}
        </span>
      )}
    </div>
  );
};

export default FormInput;
