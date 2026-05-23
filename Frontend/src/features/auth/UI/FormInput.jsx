import React from "react";

const FormInput = ({ label, type, id, value, onChange, disabled = false }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

const Dropdown = ({
  label,
  id,
  options,
  value,
  onChange,
  disabled = false,
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select id={id} value={value} onChange={onChange} disabled={disabled}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
export { Dropdown };
export default FormInput;
