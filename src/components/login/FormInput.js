import React from 'react';
import './FormInput.css';  // Import custom styles

const FormInput = ({ label, type, value, onChange, placeholder, required }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="form-input"
      />
    </div>
  );
};

export default FormInput;
