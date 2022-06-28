import React from 'react';

import './ButtonSecondary.scss';

const ButtonSecondary = props => {
  return (
    <button className="button-secondary">
      {props.children}
    </button>
  )
}

export default ButtonSecondary;