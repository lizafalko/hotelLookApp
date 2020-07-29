import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Navigation from './App';
import './fonts/FuturaPT-Medium.ttf'
import './fonts/FuturaPT-Heavy.ttf'
import './fonts/FuturaPT-Book.ttf'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Navigation />, document.getElementById('root'));
registerServiceWorker();
