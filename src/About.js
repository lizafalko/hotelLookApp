import React, { Component } from 'react';
import ReactDOM from 'react';
import { HOTELS } from './Hotels.js'
import { HotelCard } from './HotelCard';
import { SearchBar } from './SearchBar.js';

export class About extends Component {
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
    const hotelCards = this.state.displayedHotels.sort(function(a, b) { return a.price < b.price }).map(hotel =>
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

export default About;
