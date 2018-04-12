import React, { Component } from 'react';
import './App.css';

class Nav extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div className="navigation">
        <nav className = "navbar navbar-expand-md bg-dark navbar-dark fixed-top">
          <a className="navbar-brand myName" href="https://www.linkedin.com/in/shay-hoffman-89600a151/" target="_blank"><h3 className="shayName">Shay Hoffman</h3></a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleFooter">
              <span className="navbar-toggler-icon"></span>
            </button>
          <div className = "collapse navbar-collapse" id = "collapsibleFooter">
            <ul className = "navbar-nav">
              <li className = "nav-item">
                <a className="nav-link" href= "#aboutMe">About Me</a>
              </li>
              <li>
                <a className="nav-link" href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a className="nav-link" href="#apiQuote">Inspirational Stuff</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
