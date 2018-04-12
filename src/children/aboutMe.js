import React, { Component } from 'react';
import '../App.css';
import selfie from '../images/selfie.JPG';

class About extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div className="myNav">
      <div id="aboutMe">
        <div className="row">
          <div className="col-md-6 aboutSection">

            <div className ="article">
              <div className="aboutMe">

                <p>I was born in McAllen, Texas, a town just a few miles north of the Texas/Mexico border. I graduated from high school with honors and then fulfilled a longtime dream of attending my parents alma mater, the University of Texas at Austin, where I earned college honors through achieving a 3.7 overall GPA, after double-majoring in English Literature and Geography. <br />Upon graduation, I added to my identity capital through attending Austin Coding Academy to become a full-stack web developer, and pick up a valuable life skill that will only appreciate in value in the future. I plan to complete their entire 3-module program, then either look for work as a junior web developer, or attend graduate or law school. To learn more, please visit my LinkedIn page <a className="inlinelink" href="https://www.linkedin.com/in/shay-hoffman-89600a151/" target="_blank">here</a>. <br />
                Some of my other interests incude British history, equestrian sports and horse rescue, reading biographies of famous historical women, happiness research, basketball and football. I also am interested in raising awareness for invisible illnesses like the one I am afflicted with, <a className="inlinelink" href="http://www.dysautonomiainternational.org/page.php?ID=30" target="_blank">POTS Syndrome</a>, and one of the newer scourges of millenials, <a className="inlinelink" href="http://fightthenewdrug.org/" target="_blank">porn addiction</a>. I live in the greater Austin area with my Westie, <a href="#indie">Indiana Jones.</a></p>

              </div>
            </div>
          </div>

          <div className="col-md-6" id="aboutPic">
            <a href="https://www.linkedin.com/in/shay-hoffman-89600a151/" target="_blank"><img className="selfie" src={selfie} alt="Derpy selfie of Shay (owner of page)"/></a>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default About;
