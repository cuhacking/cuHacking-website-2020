import React, {Component} from 'react';
import logoMLH from '../assets/images/mlh.svg';
import CuHeader from './cuHeader.js';

class Partner extends Component {
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
           <img className="partner-img" src={this.state.src} alt={this.state.alt}/>
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
         
        {/*Need a link to SCE, SCS, and MLH as per Rico's request*/}
        <Partner url="https://carleton.ca/scs/" src="" alt="Link to Carleton's School of Computer Science Webpage"/>
        <Partner url="https://carleton.ca/sce/" src="" alt="Link to Carleton's School of Computer and Systems Engineering Webpage"/>
        <Partner url="https://mlh.io/" src={logoMLH} alt="Link to MLH Webpage"/>
      </div> 
    )
  }
}
