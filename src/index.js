import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './fonts/Roboto.ttf'
import './fonts/Robotobold.ttf'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
