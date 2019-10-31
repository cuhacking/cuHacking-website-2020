import React, {Component} from 'react';
import logoMLH from '../assets/images/partners/mlh.svg';
import logoSCE from '../assets/images/partners/sce.png';
import logoSCS from '../assets/images/partners/scs.png';

class Partner extends Component {
    constructor(props) {
      super(props)
      this.state = {
        id: props.id, 
        url: props.url, 
        src: props.src, 
        alt: props.alt
      }
    }
  
    render() {
      return (
        <a href={this.state.url} target="_blank" rel="noopener noreferrer">
           <img id={this.state.id} className="partner-img" src={this.state.src} alt={this.state.alt}/>
        </a> 
      )
    }
  }

export default class Partners extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isIE: false || !!document.documentMode
    }
  }

  render() {
    return (
        <div className="slide partners">
            <p id="partner-heading" className="bodyText"> Our Proud Partners </p>
            <div className="partner-wrapper">
                <Partner id="SCSLogo" url="https://carleton.ca/scs/" src={logoSCS} alt="Link to Carleton's School of Computer Science Webpage"/>
                <Partner id="SCELogo" url="https://carleton.ca/sce/" src={logoSCE} alt="Link to Carleton's School of Computer and Systems Engineering Webpage"/>
                <Partner id="MLHLogo" url="https://mlh.io/"          src={logoMLH} alt="Link to MLH Webpage"/>
            </div>
            <p id="footer-questions">Questions? Send us an email at <a className="mailtoLink" href="mailto:info@cuhacking.com"> info@cuhacking.com </a> </p>
        </div> 
    )
  }
}
