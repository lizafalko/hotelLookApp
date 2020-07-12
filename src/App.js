import React from 'react';
import Banner from './Banner';
import About from './About';

function App() {
  return (
    <div className="app">
      <About />
      <Banner isPhoneDefined={true} fullPurchase="50 000" installmentPurchase="2 900" beginnersPurchase="29 000" beginnersNumber="20" />
      <About />
      <Banner fullPurchase="50 000" installmentPurchase="2 900" beginnersPurchase="29 000" beginnersNumber="20" />
    </div>
  );
}

export default App;
