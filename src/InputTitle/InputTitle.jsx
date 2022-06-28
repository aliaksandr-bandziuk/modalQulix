import React, { useState } from 'react';

import './InputTitle.scss';

const InputTitle = () => {

  const [count, setCount] = useState(0);

  return (
    <>
      <input 
        className='input__text' 
        type="text" 
        placeholder='Title' 
        onChange={e => setCount(e.target.value.length)}
      />
      <p className="input__counter"><span>{count}</span>/100</p>
    </>
  )
}

export default InputTitle;