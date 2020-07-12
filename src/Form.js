import React from 'react';
import Linkify from 'react-linkify';

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
      <label>
        <input className="form__check" name="checkbox" type="checkbox" checked="checked" />
        <span className="form__checkmark"></span>
        <span className="form__checkbox">
          <Linkify>Я согласен с условиями обработки <a className="form__link" style={{color: '#3D3BFF'}} rel="noopener noreferrer" target="_blank" href="https://skillbox.ru/privacy_policy.pdf">персональных данных</a></Linkify>
        </span>
      </label>
    </form>
  );
}

export default Form;
