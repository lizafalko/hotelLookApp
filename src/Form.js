import React from 'react';
import Checkbox from './Checkbox';

export function Form(props) {
  return (
    <form className="form">
      <div className="form__info">
        <span className="form__text form__text_grey">Старт курса: <span className="form__text form__text_blue">{props.courseDate}</span></span>
        <span className="form__text form__text_grey">Осталось: <span className="form__text form__text_blue">{props.coursePlaces}</span></span>
      </div>
      <input className="form__field form__field_input" type="text" name="name" placeholder="Имя" />
      <input className="form__field form__field_input" type="text" name="surname" placeholder="Телефон" />
      <input className="form__field form__field_input" type="text" name="mail" placeholder="Email" />
      <input className="form__field form__field_button" type="submit" value="Записаться" />
      <Checkbox />
    </form>
  );
}

export default Form;
