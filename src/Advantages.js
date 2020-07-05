import React from 'react';
import IconSegment from './IconSegment';
import Icon1 from './img/icon01.svg';
import Icon2 from './img/icon02.svg';
import Icon3 from './img/icon03.svg';
import Icon4 from './img/icon04.svg';

export function Advantages() {
  return (
    <div className="advantages">
      <h2 className="advantages__heading">Преимущества:</h2>
      <div className="advantages__icons">
        <IconSegment
            iconClass="icon-segment icon-segment_small"
            imageClass="icon-segment__image icon-segment__image_small"
            src={Icon1}
            description="Всегда большой ассортимент"
            textClass="icon-segment__description"
        />
        <IconSegment
            iconClass="icon-segment icon-segment_small"
            imageClass="icon-segment__image icon-segment__image_small"
            src={Icon2}
            description="Уникальные предложения"
            textClass="icon-segment__description"
        />
        <IconSegment
            iconClass="icon-segment icon-segment_small"
            imageClass="icon-segment__image icon-segment__image_small"
            src={Icon3}
            description="Комфортный шоппинг"
            textClass="icon-segment__description"
        />
        <IconSegment
            iconClass="icon-segment icon-segment_small"
            imageClass="icon-segment__image icon-segment__image_small"
            src={Icon4}
            description="Быстро и просто"
            textClass="icon-segment__description"
        />
      </div>
    </div>
  );
}

export default Advantages;
