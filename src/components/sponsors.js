import React, {Component} from 'react';
import CuHeader from './cuHeader.js';
import { createRequireFromPath } from 'module';

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
         <img className="sponsor-img" src={this.state.src} alt={this.state. alt}/>
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
        <div className="tera">    

        </div>
        <div className="giga"></div>
        <div className="mega">
          <Sponsor alt="Fullscript Logo" src='../assets/images/sponsors/fullscript.svg' url="https://fullscript.com/"/>
          <Sponsor alt="Lighthouse Labs" src='' url="https://www.lighthouselabs.ca/"/>
          <Sponsor alt="Ciena" src='' url="https://fullscript.com/"/>
          <Sponsor alt="CSE" src='' url="https://www.lighthouselabs.ca/"/>
        </div>
        <div className="kilo">
          <Sponsor alt="CSE" src='' url="https://www.lighthouselabs.ca/"/>
        </div>
        <p className="bodyText"> Interested in sponsoring? Contact us at <a href="mailto:sponsorship@cuhacking.com"> sponsorship@cuhacking.com  </a> </p> 
    </div> 
    )
  }
}
