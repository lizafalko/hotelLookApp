import React from 'react';
import IconSegment from './IconSegment';
import Range from './img/icon01.svg';
import Offers from './img/icon02.svg';
import Shopping from './img/icon03.svg';
import Speed from './img/icon04.svg';

export function Advantages() {
  return (
    <div className="advantages">
      <h2 className="advantages__heading">Преимущества:</h2>
      <div className="advantages__icons">
        <IconSegment icon={Range} description="Всегда большой ассортимент" />
        <IconSegment icon={Offers} description="Уникальные предложения" />
        <IconSegment icon={Shopping} description="Комфортный шоппинг" />
        <IconSegment icon={Speed} description="Быстро и просто" />
      </div>
    </div>
  );
}

export default Advantages;
