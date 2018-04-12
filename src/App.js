import React, { Component } from 'react';
import './App.css';

/*child components*/
import {Quote} from './Quote';
import Nav from  './nav.js';
import About from './aboutMe.js';
import Portfolio from './portfolio.js';
import Inspirational from './inspirational.js';

/*image files*/
import selfie from './selfie.JPG';
import Indie from './Indie.jpg';
import airplanescreenshot from './airplanescreenshot.png';
import storymapscreenshot from './storymapscreenshot.png';
import map2 from './map2.png';
import map3 from './map3.png';
import map4 from './map4.png';
import jewishpaperscreenshot from './jewishpaperscreenshot.png';

/*PDF files*/
import GISportfolio from './GISportfolio.pdf';
import jewishpaper from './jewishpaper.pdf';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  };

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


        <div className="footer">
          <nav className = "navbar navbar-expand-md bg-dark navbar-dark" id="bottomNav">
            <a className="navbar-brand myName" href="https://www.linkedin.com/in/shay-hoffman-89600a151/" target="_blank"><h3 className="shayName">Shay Hoffman</h3></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleFooter">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className = "collapse navbar-collapse" id = "collapsibleFooter">
              <ul className = "navbar-nav">
                <li className = "nav-item">
                  <a className="nav-link" href="https://www.facebook.com/shay.hoffman.33" target="_blank">Facebook</a>
                </li>
                <li>
                  <a className="nav-link" href="https://twitter.com/ShayHoffman" target="_blank">Twitter</a>
                </li>
                <li>
                  <a className="nav-link" href="https://www.linkedin.com/in/shay-hoffman-89600a151/" target="_blank">LinkedIn</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>



      </div>
    );
  }
}

export default App;
