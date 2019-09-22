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
        <p>Last year, we had over 500 students from all over Canada! More text</p> 
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <CuHeader text="Hacker Stories"/>
        <p> big stuff here </p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div> 
    )
  }
}
