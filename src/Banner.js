import React from 'react';
import Label from './Label';
import Phone from './Phone';
import Form from './Form';

export function Banner(props) {
  const isPhoneDefined = props.isPhoneDefined;

  if (isPhoneDefined) {
    return (
      <section className="banner">
        <div className="banner__container banner__container_purchase">
          <Label backgroundClass="label label_first" />
          <div className="banner__purchase">
            <p className="banner__pretext banner__pretext_small">Полная стоимость курса:</p>
            <p className="banner__pretext banner__pretext_medium">{props.fullPurchase} ₽</p>
          </div>
          <div>
            <h2 className="banner__heading">{props.installmentPurchase}₽</h2>
            <p className="banner__text">Рассрочка без первого взноса</p>
          </div>
          <div>
            <p className="banner__pretext banner__pretext_large">{props.beginnersPurchase} ₽</p>
            <p className="banner__pretext banner__pretext_average">Для первых {props.beginnersNumber}-ти</p>
          </div>
        </div>
        <div className="banner__container banner__container_info">
          <h2 className="banner__subtitle">Запишитесь на курс</h2>
          <Phone phoneText="Телефон" />
          <Form courseDate="7 сентября" coursePlaces="19 мест"/>
        </div>
      </section>
    );
  }
  else {
    return (
      <section className="banner">
        <div className="banner__container banner__container_purchase">
          <Label backgroundClass="label label_second" />
          <div className="banner__purchase">
            <p className="banner__pretext banner__pretext_small">Полная стоимость курса:</p>
            <p className="banner__pretext banner__pretext_medium">{props.fullPurchase} ₽</p>
          </div>
          <div>
            <h2 className="banner__heading">{props.installmentPurchase}₽</h2>
            <p className="banner__text">Рассрочка без первого взноса</p>
          </div>
          <div>
            <p className="banner__pretext banner__pretext_large">{props.beginnersPurchase} ₽</p>
            <p className="banner__pretext banner__pretext_average">Для первых {props.beginnersNumber}-ти</p>
          </div>
        </div>
        <div className="banner__container banner__container_info">
          <h2 className="banner__subtitle">Запишитесь на курс</h2>
          <Form courseDate="7 сентября" coursePlaces="19 мест"/>
        </div>
      </section>
    );
  }
}

export default Banner;
