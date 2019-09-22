import React, {Component} from 'react';
import CuHeader from './cuHeader.js'; 

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isIE: false || !!document.documentMode
    }
  }

  render() {
    return (
      <div className="slide about" id="about">
        <CuHeader text="Canada's Capital Hackathon"/>
      </div> 
    )
  }
}
