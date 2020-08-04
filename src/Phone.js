import React from 'react';

export function Phone(props) {
  return (
    <ul className="phone">
      <li className="phone__item">{props.phoneText}</li>
      <li className="phone__item">{props.phoneText}</li>
      <li className="phone__item">{props.phoneText}</li>
      <li className="phone__item">{props.phoneText}</li>
    </ul>
  );
}

export default Phone;
