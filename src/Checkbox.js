import React from 'react';
import Linkify from 'react-linkify';

export function Checkbox(props) {
  return (
    <label className={props.checkboxClass}>
      <input className="checkbox__input" name="checkbox" type="checkbox" required/>
      <span className="checkbox__checkmark"></span>
      <span className="checkbox__text">
        <Linkify>Я согласен с условиями обработки <a className="form__link" style={{color: '#3D3BFF'}} rel="noopener noreferrer" target="_blank" href="https://skillbox.ru/privacy_policy.pdf">персональных данных</a></Linkify>
      </span>
    </label>
  );
}

export default Checkbox;
