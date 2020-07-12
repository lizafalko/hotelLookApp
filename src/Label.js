import React from 'react';

export function Label(props) {
  return (
    <section className={props.backgroundClass}>
      <p className="label__pretext">Скидка</p>
      <p className="label__discount">40%</p>
      <p className="label__text">первым 20</p>
    </section>
  );
}

export default Label;
