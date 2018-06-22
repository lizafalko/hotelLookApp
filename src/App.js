import React, { Component } from 'react';
import ReactDOM from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { About } from './About.js';
import { Home } from './Home.js';
import { Contacts } from './Contacts';
import './App.css';

const history = createBrowserHistory();

class Navigation extends Component {
  render() {
    return (
      <BrowserRouter basename={(!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? "/" : "/hotelLookApp/"} history={history}>
        <div className="main_block">
          <ul className="main_block__list">
            <li className="main_block__link"><Link className="main_block__menu" to="/">Home</Link></li>
            <li className="main_block__link"><Link className="main_block__menu" to="/about">About</Link></li>
            <li className="main_block__link"><Link className="main_block__menu" to="/contacts">Contacts</Link></li>
          </ul>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contacts" component={Contacts}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default Navigation;
