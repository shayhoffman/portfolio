import React, { Component } from 'react';
import  '../App.css';
import airplanescreenshot from '../images/airplanescreenshot.png';
import storymapscreenshot from '../images/storymapscreenshot.png';
import map2 from '../images/map2.png';
import map3 from '../images/map3.png';
import map4 from '../images/map4.png';
import jewishpaperscreenshot from '../images/jewishpaperscreenshot.png';
import GISportfolio from '../GISportfolio.pdf';
import jewishpaper from '../jewishpaper.pdf';

class Portfolio extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
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
    );
  }
}

export default Portfolio;
