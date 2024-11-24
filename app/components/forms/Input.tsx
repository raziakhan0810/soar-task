import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa'; 

interface InputProps {
  label?: string;
  type?: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  isDark?: boolean; 
}

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  name,
  placeholder = '',
  value,
  onChange,
  error,
  required = false,
  isDark = false, 
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  const handleOpenDatePicker = () => {
    const dateInput = document.getElementById(name) as HTMLInputElement;
    if (dateInput) {
      dateInput.showPicker(); 
    }
  };

  return (
    <div className="mb-4 relative">
      {label && (
        <label
          htmlFor={name}
          className={`block text-sm font-normal mb-2 ${isDark ? 'text-gray-300' : 'text-[#232323]'}`}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        {type === 'date' ? (
          <div className="relative">
          <input
            type="date"
            name={name}
            id={name}
            value={value}
            onChange={handleDateChange}
            placeholder={placeholder}
            className={`w-full px-3 py-2 border ${
              error ? 'border-red-500' : 'border-[#DFEAF2]'
            } text-[#718EBF] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              isDark ? 'bg-dark text-white' : 'bg-white text-[#718EBF]'
            } appearance-none`} 
          />
          
          <button
            type="button"
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 focus:outline-none bg-white"
            onClick={handleOpenDatePicker} 
          >
            <FaChevronDown size={14} color='#718EBF'/>
          </button>
        </div>

        ) : (
          <input
            type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`w-full px-3 py-2 border ${
              error ? 'border-red-500' : 'border-[#DFEAF2]'
            } text-[#718EBF] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              isDark ? 'bg-dark text-white' : 'bg-white text-[#718EBF]'
            }`}
            required={required}
          />
        )}
      </div>
      {error && <p className="text-red text-xs mt-2">{error}</p>}
    </div>
  );
};

export default Input;
