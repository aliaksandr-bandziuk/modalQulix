import React from 'react';

import './DatePicker.scss';

const DatePicker = () => {
  return (
    <div className="input-field">
      <label></label>
      <input id="custom-input-date" class="calendar" type="text" placeholder="12-05-21" />
    </div>
    // <>
    //   <input type="text" className='input__date' />
    // </>
  )
}

export default DatePicker;