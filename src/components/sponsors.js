import React, {Component} from 'react';
import CuHeader from './cuHeader.js';
// import logo_name from '../assets/images/sponsors/<logo_filename>.<type>';

class Sponsor extends Component {

  // usage: <Sponsor

  constructor(props) {
    super(props)
    this.state = {
      id: props.id,   // optional id tag for the img, good for resizing specific sponsor logos 
      url: props.url, // link to sponsor's website  
      src: props.src, // imported photo, (logo_name) in imports at the top. 
      alt: props.alt  // alt for img description, 
    }
  }

  render() {
    return (
      <a href={this.state.url} target="_blank" rel="noopener noreferrer">
         <img id={this.state.id} className="sponsor-img" src={this.state.src} alt={this.state.alt}/>
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
          <div className="sponsor-tier tera"></div>
          <div className="sponsor-tier giga"></div>
          <div className="sponsor-tier mega"></div>
          <div className="sponsor-tier kilo"></div>
        </div>
    </div> 
    )
  }
}
