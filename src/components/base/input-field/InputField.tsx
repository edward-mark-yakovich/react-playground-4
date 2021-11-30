import inputFieldCSS from "./inputFieldCSS";
import React, { ChangeEvent } from 'react';

type InputFieldProps = {
  placeholder?: string;
  value: string;
  id: string;
  onChange: (ev: ChangeEvent<{ value: string }>) => void;
  disabled?: boolean;
  type?: string;
};

const InputField = ({
  placeholder = '',
  value,
  id,
  onChange,
  disabled = false,
  type = 'text'
}: InputFieldProps) => {

  return (
    <div data-component="InputField" className={inputFieldCSS.input_field}>
      
      <label className={inputFieldCSS.input_field_label} htmlFor={id}>Username</label>

      <input
        className={inputFieldCSS.input_field_input}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        name={id}
        id={id}
      />
      
    </div>
  );
};

export default InputField;
