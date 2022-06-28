import React from 'react';

import './ButtonPrimary.scss';

const ButtonPrimary = props => {
  return (
    <button className="button-primary">
      {props.children}
    </button>
  )
}

export default ButtonPrimary;