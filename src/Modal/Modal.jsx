import React, { useState } from 'react';

import './Modal.scss';

import Backing from '../Backing';

import InputTitle from '../InputTitle';
import LabelColor from '../LabelColor';
import Dropdown from '../Dropdown';
import users from '../Dropdown/users.json';
import DatePicker from '../DatePicker';
import ButtonSecondary from '../ButtonSecondary';
import ButtonPrimary from '../ButtonPrimary';

const Modal = () => {

  const [value, setValue] = useState(null);

  return (
    <div className="modal">
      <div className="modal__container">
        <p className='modal__title'>Create New task</p>
        <div className="modal__input">
          <InputTitle />
        </div>
        <p className='modal__description'>Click to add Description</p>
        <div className="modal__colors colors">
          <div className="colors__text">
            <p>Label color</p>
          </div>
          <div className="colors__items">
            <div className="colors__item">
              <LabelColor />
            </div>
            <div className="colors__item">
              <LabelColor />
            </div>
            <div className="colors__item">
              <LabelColor />
            </div>
            <div className="colors__item">
              <LabelColor />
            </div>
            <div className="colors__item">
              <LabelColor />
            </div>
          </div>
        </div>
        <div className="modal__select">
          <Dropdown 
            options={users} 
            prompt='Select assignee' 
            value={value}
            onChange={val => setValue(val)}
          />
        </div>
        <div className="modal__date">
          <DatePicker />
          <DatePicker />
        </div>
      </div>
      <div className="modal__line"></div>
      <div className="modal__container">
        <div className="modal__buttons">
          <ButtonSecondary>Cancel</ButtonSecondary>
          <ButtonPrimary>Save</ButtonPrimary>
        </div>
      </div>
    </div>
  )
}

export default Modal;