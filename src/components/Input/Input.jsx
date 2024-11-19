import React from 'react'

export const Input = ({label, type='text', id, placeholder, errorMessage, pattern}) => {
  return (
    <label className="input-wrapper" htmlFor="username">
      {label}
      <input
        required
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        pattern={pattern}
      />
      <span id="error-message">{errorMessage}</span>
    </label>
  )
}
