import React from 'react';

const Select = ({
  label,
  id,
  options = [],
  value,
  onChange,
  error,
  required = false,
  placeholder = 'Select an option',
  className = '',
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-neutral-300">
          {label} {required && <span className="text-accent">*</span>}
        </label>
      )}
      <div className="relative">
        <select
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full px-4 py-3 bg-neutral-900/50 border rounded-lg text-secondary placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent appearance-none transition-all duration-300 ${
            error ? 'border-red-500/80 focus:ring-red-500/30' : 'border-neutral-800'
          }`}
          {...props}
        >
          <option value="" disabled className="bg-primary text-neutral-500">
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option} className="bg-primary text-secondary">
              {option}
            </option>
          ))}
        </select>
        {/* Custom Chevron Icon */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-neutral-500">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {error && (
        <span className="text-xs text-red-400 mt-1 font-medium">{error}</span>
      )}
    </div>
  );
};

export default Select;
