import React, { Component } from 'react';
import ReactDOM from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './App.css';

const history = createBrowserHistory();

const MAX_DESCRIPTION_LENGTH = 100;

const HOTELS = [
  {
    id: 1223435356,
    name: 'Hotel Anixy',
    description: 'The James New York – NoMad has been recently refurbished, offering its guests a stylish and modern ambience..',
    price: 7000,
    rating: 'Book now!',
    image: 'https://placeholdit.co//i/800x500'
  },
  {
    id: 1223435355,
    name: 'Paraiso Beach Hotel',
    description: 'Located in the lively Bloomsbury district, the Royal National Hotel is definitely a great choice for anyone who wants to stay in London..',
    price: 950,
    rating: 'Book now!',
    image: 'https://placeholdit.co//i/800x500'
  },
  {
    id: 1223435358,
    name: 'Park Hotel Argo',
    description: 'Located at on the Collins Avenue, Fontainebleau Hotel Miami Beach is the best place to be while visiting Florida. .',
    price: 1000,
    rating: 'Book now!',
    image: 'https://placeholdit.co//i/800x500'
  },
  {
    id: 1223435345,
    name: 'Sunrise All Suites Resort',
    description: 'It offers a beautiful view of the ocean, an outdoor pool, a fitness centre and a beauty salon..',
    price: 4030,
    rating: 'Book now!',
    image: 'https://placeholdit.co//i/800x500'
  },
  {
    id: 1223435334,
    name: 'The Cliff Beach & Spa Resort',
    description: 'At Katsuya restaurant you can enjoy Japanese cuisine while the Bazaar offers the refined Spanish delicacies.',
    price: 1350,
    rating: 'Book now!',
    image: 'https://placeholdit.co//i/800x500'
  },
  {
    id: 1223435311,
    name: 'Sirena Palace',
    description: 'The hotel is located just 1.5 km from the historic Art Deco district, within a 20 minute drive from Miami International Airport..',
    price: 1200,
    rating: 'Book now!',
    image: 'https://placeholdit.co//i/800x500'
  }
];

const Home = () => (
  <div className="page">
    <h2 className="page__heading">Welcome guys!</h2>
  </div>
);

class SearchBar extends Component {
  render() {
    return(
      <div className="search-bar">
        <i className="search-icon fa fa-search" />
        <input
          className="search-input"
          type="text"
          placeholder="Look for a hotel"
          onChange={this.props.onSearch}
        />
      </div>
    )
  }
}

class HotelCard extends Component {
  render() {
    const {
      name,
      image,
      description,
      price,
      rating
    } = this.props;

    return (
      <div className="card">
        <img src={image} className="card__image" />
        <div>
          <div className="card__block">
            <h3>{name}</h3>
            <span className="card__rating">{rating}</span>
          </div>
          <p className="card__description">
            {
              description.length > MAX_DESCRIPTION_LENGTH ? description.substring(0, MAX_DESCRIPTION_LENGTH) + '...' : description
            }
          </p>
        </div>
        <span className="card__price">{price}</span>
      </div>
    );
  }
}

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedHotels: HOTELS
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    const searchQuery = event.target.value.toLowerCase();
    const displayedHotels = HOTELS.filter(hotel => {
      const searchString = hotel.name.toLowerCase() + hotel.description.toLowerCase();
      return searchString.indexOf(searchQuery) !== -1;
    });

    this.setState({ displayedHotels: displayedHotels });
  }

  render() {
    const hotelCards = this.state.displayedHotels.map(hotel =>
      <HotelCard
        key={hotel.id}
        id={hotel.id}
        name={hotel.name}
        description={hotel.description}
        price={hotel.price}
        image={hotel.image}
        rating={hotel.rating}
      />
    );

    return (
      <div className="page">
        <h2 className="page__heading">Hotel Look</h2>
        <SearchBar onSearch={this.handleSearch} />
        <div className="cards">
          {hotelCards}
        </div>
      </div>
    );
  }
}

const Contacts = () => (
  <div className="page">
    <h2 className="page__heading">Contacts</h2>
  </div>
);

class Navigation extends Component {
  render() {
    return (
      <BrowserRouter history={history}>
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
