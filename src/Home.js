import React, { Component } from 'react';
import ReactDOM from 'react';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    }
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    console.log("Hello!");
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const body = this.state.isOpen && <section>Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learnLorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn Lorem ipsum and learn</section>;
    return (
      <div className="page page__page--modification">
        <h2 className="page__heading">Welcome guys!</h2>
        <div className="page__close-icon">
          <h3>How does it work?</h3>
          <i className="times-icon fa fa-times close_icon" onClick={this.handleClose} />
        </div>
        {body}
        <h4>Creation date: {(new Date()).toDateString()}</h4>
      </div>
    )
  }
}

export default Home;
