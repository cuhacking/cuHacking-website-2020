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
      <div className="slide about" id="About">
        <CuHeader text="Canada's Capital Hackathon"/>
        <p className="bodyText"> Carleton University's cuHacking is the longest running student-led MLH Hackathon in Ottawa. 
          The hackathon takes place over 24 hours, non-stop! Students can compete against each other and 
          themselves to take their projects from concept to reality. </p> 
      </div> 
    )
  }
}
