import React, { Component } from 'react';
import  './App.css';
import Indie from './Indie.jpg';
import {Quote} from './Quote';

class Inspirational extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div id="apiQuote">
        <div className="container apiQuote">
          <h2 className="text-center">An Inspirational Quote and a Doggo</h2>
            <div className="row">
              <div className="col-md-8">
                <p id ="quotethings"><Quote/></p>
              </div>
              <div className="col-md-4">
                <a href="https://www.linkedin.com/in/shay-hoffman-89600a151/" target="_blank"><img className="selfie" id="indie" src={Indie} alt="photo of my super cute Westie"/></a>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Inspirational;
