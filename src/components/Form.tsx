import React from 'react';

import InputWithValidation from './InputValidation';

function Form() {
  function handleSubmit(event) {
    event.preventDefault();
    // Do something with the form data
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputWithValidation
        id="name"
        name="name"
        label="Name"
        required
        maxLength={50}
      />
      <InputWithValidation
        id="email"
        name="email"
        label="Email"
        type="email"
        required
        maxLength={100}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
