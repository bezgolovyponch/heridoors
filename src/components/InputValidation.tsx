import React, { useState } from 'react';

function InputWithValidation(props) {
  const [value, setValue] = useState(props.defaultValue || '');
  const [error, setError] = useState('');

  function handleChange(event) {
    const newValue = event.target.value;
    setValue(newValue);
    if (props.required && newValue.trim() === '') {
      setError('This field is required.');
    } else if (props.maxLength && newValue.length > props.maxLength) {
      setError(`Maximum length is ${props.maxLength} characters.`);
    } else {
      setError('');
    }
  }

  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type || 'text'}
        id={props.id}
        name={props.name}
        value={value}
        onChange={handleChange}
      />
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default InputWithValidation;
