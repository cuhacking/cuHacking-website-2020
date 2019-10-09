import React, {Component} from 'react';
import CuHeader from './cuHeader.js';
import logoFullscript from '../assets/images/sponsors/fullscript.svg';
import logoLightHouse from '../assets/images/sponsors/lhl-logo.png'; 
import logoCiena from '../assets/images/sponsors/ciena.png';
import logoCSE from '../assets/images/sponsors/cse.png';
import logoFDM from '../assets/images/sponsors/fdm.jpg'; 

class Sponsor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: props.url, 
      src: props.src, 
      alt: props.alt
    }
  }

  render() {
    return (
      <a href={this.state.url} target="_blank" rel="noopener noreferrer">
         <img className="sponsor-img" src={this.state.src} alt={this.state.alt}/>
      </a> 
    )
  }
}

export default class Sponsors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isIE: false || !!document.documentMode
    }
  }

  render() {
    return (
      <div className="slide sponsors" id="sponsors">
        <CuHeader text="Meet our sponsors"/>
        <p className="bodyText"> Interested in sponsoring? Contact us at <a className="mailtoLink" href="mailto:sponsorship@cuhacking.com"> sponsorship@cuhacking.com  </a> </p> 
        <div className="sponsor-wrapper">
          <div className="sponsor-tier tera">    

          </div>
          <div className="sponsor-tier giga"></div>
          <div className="sponsor-tier mega">
            <Sponsor alt="Fullscript Logo"  src={logoFullscript}  url="https://fullscript.com/"/>          
            <Sponsor alt="Lighthouse Labs"  src={logoLightHouse}  url="https://www.lighthouselabs.ca/"/>
            <Sponsor alt="Ciena"            src={logoCiena}       url="https://www.ciena.com/"/>
            <Sponsor alt="CSE"              src={logoCSE}         url="https://www.cse-cst.gc.ca/en"/>
          </div>
          <div className="sponsor-tier kilo">
            <Sponsor alt="FDM Group"        src={logoFDM}         url="https://www.fdmgroup.com/en-ca/ca-home/"/>
          </div>
        </div>
    </div> 
    )
  }
}
