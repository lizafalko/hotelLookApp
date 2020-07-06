import React from 'react';
import IconSegment from './IconSegment';
import Icon5 from './img/icon06.svg';
import Icon6 from './img/icon05.svg';
import Linkify from 'react-linkify';

export function Info() {
  return (
    <div className="info">
      <h2 className="info__heading">Как покупка попадает к покупателю?</h2>
      <div className="info__icons">
        <IconSegment
            iconClass="icon-segment icon-segment_large"
            imageClass="icon-segment__image icon-segment__image_large"
            src={Icon5}
            description=<Linkify>Выбирайте товары на <a style={{color: '#434343'}} rel="noopener noreferrer" target="_blank" href="https://www.eldorado.ru">eldorado.ru</a> с шильдиком и оформляйте заказ</Linkify>
            textClass="icon-segment__description icon-segment__description_bold"
        />
        <IconSegment
            iconClass="icon-segment icon-segment_large"
            imageClass="icon-segment__image icon-segment__image_large"
            src={Icon6}
            description="Партнер отправит нам заказанный товар, мы доставим его вам"
            textClass="icon-segment__description icon-segment__description_bold"
        />
      </div>
      <p className="info__text">
        Наш покупатель всегда защищен на 100%: мы осуществляем гарантийное обслуживание любых товаров, купленных <br/> в маркетплейсе.
      </p>
    </div>
  );
}

export default Info;
