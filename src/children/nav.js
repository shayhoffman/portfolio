import React, { Component } from 'react';
import '../App.css';
import Scrollspy from 'react-scrollspy';

class Nav extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div className="navigation">
          <a className="myName" href="https://www.linkedin.com/in/shay-hoffman-89600a151/" target="_blank"><h3 className="shayName">Shay Hoffman</h3></a>
          <Scrollspy className = 'linksContainer' items={['About Me', 'Portfolio', 'Inspirational']} currentClassName='scrolled'>
            <div><a className = 'nav-link' href = '#aboutMe'>About Me</a></div>
            <div><a className = 'nav-link' href = '#portfolio'>Portfolio</a></div>
            <div><a className = 'nav-link' href = '#apiQuote'>Inspirational Stuff</a></div>
          </Scrollspy>
      </div>
    );
  }
}

export default Nav;
