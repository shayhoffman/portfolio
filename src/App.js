import React, { Component } from 'react';
import './App.css';
import {Quote} from './Quote';
import selfie from './selfie.JPG';
import Indie from './Indie.jpg';
import airplanescreenshot from './airplanescreenshot.png';
import storymapscreenshot from './storymapscreenshot.png';
import map2 from './map2.png';
import map3 from './map3.png';
import map4 from './map4.png';
import jewishpaperscreenshot from './jewishpaperscreenshot.png';
import GISportfolio from './GISportfolio.pdf';
import jewishpaper from './jewishpaper.pdf';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageFill:null
    }
  }

  render() {
    return (
      <div className="body">

        <div className="navigation">
          <nav className = "navbar navbar-expand-md bg-dark navbar-dark fixed-top">
            <a className="navbar-brand myName" href="https://www.linkedin.com/in/shay-hoffman-89600a151/" target="_blank"><h3 className="shayName">Shay Hoffman</h3></a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleFooter">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className = "collapse navbar-collapse" id = "collapsibleFooter">
              <ul className = "navbar-nav">
                <li className = "nav-item">
                  <a className="nav-link" href="#aboutMe">About Me</a>
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

        <div className="header">
          <div className="row">
            <div className="col-md-12 header">

              <a className="h1" href="https://www.linkedin.com/in/shay-hoffman-89600a151/" target="_blank"><h1 className="myName" id = "bigName">Shay Hoffman</h1></a>
            </div>
          </div>
        </div>

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

        <div id="portfolio">
          <div className="container">
            <h2 className="text-center">Portfolio</h2>
              <div className="row">

                <div className="col-md-4 portfolio-item">
                  <a className="portfolio-link" href="https://codepen.io/shayhoffman/" target="_blank">
                    <img className="img-fluid" src={airplanescreenshot}
                    alt="linked image of a CodePen project"/>
                  </a>
                </div>


                <div className="col-md-4 portfolio-item">
                  <a className="portfolio-link" href="https://www.arcgis.com/apps/MapJournal/index.html?appid=e4b0729b324c4f15914d940f54c217fe" target="_blank">
                    <img className="img-fluid" src={storymapscreenshot} alt="linked image of an ESRI StoryMap"/>
                  </a>
                </div>

                <div className="col-md-4 portfolio-item">
                  <a className="portfolio-link" href={GISportfolio} target="_blank">
                    <img className="img-fluid" src={map2} alt="linked image of a map"/>
                  </a>
                </div>

              <div className="row">

                  <div className="col-md-4 portfolio-item">
                    <a className="portfolio-link" href={GISportfolio} target="_blank">
                      <img className="img-fluid" id="map3" src={map3} alt="linked image of a map"/>
                    </a>
                  </div>

                  <div className="col-md-4 portfolio-item">
                    <a className="portfolio-link" href={GISportfolio} target="_blank">
                      <img className="img-fluid" src={map4} alt="linked image of a map"/>
                    </a>
                  </div>

                  <div className="col-md-4 portfolio-item">
                    <a className="portfolio-link" href={jewishpaper} target="_blank">
                      <img className="img-fluid" src={jewishpaperscreenshot} alt="linked image of a map"/>
                    </a>
                  </div>

              </div>

              </div>
          </div>
        </div>


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
