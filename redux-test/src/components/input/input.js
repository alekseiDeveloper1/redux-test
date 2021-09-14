import React from 'react';

function Input({title, setValue}) {
  return (
    <div className='reg-input'>
      <div className='reg-input__title'>{title}</div>
      <input 
      onChange={(event) => setValue(event.target.value)} 
      className='form-control me-sm-2' 
      type='text'/>
    </div>
  )
}

export default Input;