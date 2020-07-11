import React from 'react';
import Banner from './Banner';

function App() {
  return (
    <div className="app">
      <Banner fullPurchase="50 000" installmentPurchase="2 900" beginnersPurchase="29 000" beginnersNumber="20" />
    </div>
  );
}

export default App;
