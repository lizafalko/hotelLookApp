import React from 'react';
import Checkbox from './Checkbox';

export function Form(props) {
  return (
    <form className="form">
      <div className="form__info">
        <span className="form__text form__text_grey">Старт курса: <span className="form__text form__text_blue">{props.courseDate}</span></span>
        <span className="form__text form__text_grey">Осталось: <span className="form__text form__text_blue">{props.coursePlaces}</span></span>
      </div>
      <input className="form__field form__field_input" type="text" name="name" placeholder="Имя" required />
      <input className="form__field form__field_input" type="tel" name="phone" placeholder="Телефон" required />
      <input className="form__field form__field_input" type="email" name="mail" placeholder="Email" required />
      <Checkbox checkboxClass="checkbox checkbox_mobile" />
      <button className="form__field form__field_button" type="submit">Записаться</button>
      <Checkbox checkboxClass="checkbox checkbox_desktop" />
    </form>
  );
}

export default Form;
