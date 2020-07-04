import React from 'react';
import IconSegment from './IconSegment';
import Icon5 from './img/icon06.svg';
import Icon6 from './img/icon05.svg';

export function Info() {
  return (
    <div className="info">
      <h2 className="info__heading">Как покупка попадает к покупателю?</h2>
      <div className="info__icons">
        <IconSegment iconClass="icon-segment icon-segment_large" imageClass="icon-segment__image icon-segment__image_large" src={Icon5} description="Выбирайте товары на eldorado.ru с шильдиком и оформляйте заказ" />
        <IconSegment iconClass="icon-segment icon-segment_large" imageClass="icon-segment__image icon-segment__image_large" src={Icon6} description="Партнер отправит нам заказанный товар, мы доставим его вам" />
      </div>
      <p className="info__text">
        Наш покупатель всегда защищен на 100%: мы осуществляем гарантийное обслуживание любых товаров, купленных <br/> в маркетплейсе.
      </p>
    </div>
  );
}

export default Info;
