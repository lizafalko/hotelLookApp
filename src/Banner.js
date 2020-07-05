import React from 'react';
import MarketPlace from './img/MarketPlace.svg';

export function Banner() {
  return (
    <section className="banner">
      <div className="banner__wrapper">
        <h1 className="banner__heading">Маркетплейс <br/> в «Эльдорадо»</h1>
        <img src={MarketPlace} className="banner__image" alt="" />
      </div>
    </section>
  );
}

export default Banner;
