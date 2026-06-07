import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary', // primary, secondary, outline, accent
  className = '',
  disabled = false,
  ...props
}) => {
  const baseStyle = "relative px-6 py-3 font-semibold rounded-lg overflow-hidden transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base cursor-pointer focus:outline-none";
  
  const variants = {
    primary: "bg-secondary text-primary hover:bg-white border border-secondary",
    secondary: "bg-transparent text-secondary border border-neutral-800 hover:border-neutral-500 hover:bg-neutral-900/50",
    accent: "bg-accent text-white hover:bg-opacity-90 hover:shadow-glow border border-accent",
    outline: "border border-accent text-accent hover:bg-accent/10"
  };

  const getVariantStyles = () => {
    return variants[variant] || variants.primary;
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`${baseStyle} ${getVariantStyles()} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      {...props}
    >
      {/* Background radial accent glow effect on hover */}
      {variant === 'accent' && (
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent via-indigo-500 to-purple-600 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10" />
      )}
      {children}
    </motion.button>
  );
};

export default Button;
