import React, {Component} from 'react';
import CuHeader from './cuHeader.js';

export default class Sponsors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isIE: false || !!document.documentMode
    }
  }

  render() {
    return (
      <div className="slide sponsors" id="Sponsors">
        <CuHeader text="Meet our sponsors"/>
        <p> interested in sponsoring? send an email t sponsorship@cuhacking.com </p> 
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
