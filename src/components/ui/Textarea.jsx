import React from 'react';

const Textarea = ({
  label,
  id,
  placeholder = '',
  value,
  onChange,
  error,
  required = false,
  rows = 4,
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
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className={`w-full px-4 py-3 bg-neutral-900/50 border rounded-lg text-secondary placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent resize-none transition-all duration-300 ${
          error ? 'border-red-500/80 focus:ring-red-500/30' : 'border-neutral-800'
        }`}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-400 mt-1 font-medium">{error}</span>
      )}
    </div>
  );
};

export default Textarea;
