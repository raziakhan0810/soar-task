import React from 'react';

interface ButtonProps {
  variant?: 'filled' | 'outlined';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean; 
  loading?: boolean; 
}

const Button: React.FC<ButtonProps> = ({
  variant = 'filled',
  children,
  onClick,
  className = '',
  disabled = false,
  loading = false,
}) => {
  const baseStyles = `py-2 px-4 rounded-md transition-colors duration-300 w-full ${className}`;
  const filledStyles = `bg-[#5b2d91] text-white hover:bg-[#ffd700]`;
  const outlinedStyles = `border border-[#5b2d91] text-[#5b2d91] hover:bg-[#ffd700] hover:text-white`;

  const loadingStyles = 'opacity-50 cursor-not-allowed';

  return (
    <button
      onClick={loading || disabled ? undefined : onClick} 
      className={`${baseStyles} ${
        variant === 'filled' ? filledStyles : outlinedStyles
      } ${loading || disabled ? loadingStyles : ''}`}
      disabled={disabled} 
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};

export default Button;