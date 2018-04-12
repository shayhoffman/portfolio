import React, { Component } from 'react';
import './App.css';
import Scrollspy from 'react-scrollspy';

/*child components*/
import {Quote} from './children/Quote';
import Nav from  './children/nav.js';
import About from './children/aboutMe.js';
import Portfolio from './children/portfolio.js';
import Inspirational from './children/inspirational.js';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="body">

        <Nav id="navigation"/>


        <div className="header">
          <div className="row">
            <div className="col-md-12 header">

              <a className="h1" href="https://www.linkedin.com/in/shay-hoffman-89600a151/" target="_blank"><h1 className="myName" id = "bigName">Shay Hoffman</h1></a>
            </div>
          </div>
        </div>

        <About id="aboutMe"/>


        <Portfolio id="portfolio"/>


        <Inspirational id="apiQuote"/>


        <div className="navigation">
            <a className="myName" href="https://www.linkedin.com/in/shay-hoffman-89600a151/" target="_blank"><h3 className="shayName">Get In Touch!</h3></a>
            <Scrollspy className = 'linksContainer' items={['Facebook', 'Twitter', 'LinkedIn']} currentClassName='scrolled'>
              <div><a className = 'nav-link' href = "https://www.facebook.com/shay.hoffman.33" target="_blank">Facebook</a></div>
              <div><a className = 'nav-link' href = "https://twitter.com/ShayHoffman" target="_blank">Twitter</a></div>
              <div><a className = 'nav-link' href = "https://www.linkedin.com/in/shay-hoffman-89600a151/" target="_blank">LinkedIn</a></div>
            </Scrollspy>
        </div>



      </div>
    );
  }
}

export default App;
