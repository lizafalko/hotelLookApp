import React from 'react';
import Label from './Label';
import Rectangle from './img/rect.svg';

export function Banner(props) {
  return (
    <section className="banner">
      <div className="banner__container banner__container_purchase">
        <Label />
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
        <h2>Запишитесь на курс</h2>
      </div>
    </section>
  );
}

export default Banner;
