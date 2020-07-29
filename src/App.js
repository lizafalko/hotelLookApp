import React, { Component } from 'react';
import ReactDOM from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { About } from './About.js';
import { Contacts } from './Contacts';
import { Steps } from './Steps';

const history = createBrowserHistory();

class Navigation extends Component {
  render() {
    return (
      <BrowserRouter basename="/hotelLookApp/" history={history}>
        <div className="main_block app">
          <ul className="main_block__list">
            <li className="main_block__link"><Link className="main_block__menu" to="/about">Выбрать товар</Link></li>
            <li className="main_block__link"><Link className="main_block__menu" to="/">Корзина</Link></li>
            <li className="main_block__link"><Link className="main_block__menu" to="/contacts">Контакты</Link></li>
          </ul>
          <Route exact path="/about" component={About}/>
          <Route exact path="/" component={Steps}/>
          <Route exact path="/contacts" component={Contacts}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default Navigation;
