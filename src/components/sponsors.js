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
        <br/>
        <br/>         
        <br/>
        <br/>
        <br/><br/>
        <br/>
        <br/>
        <br/>
        <p className="bodyText"> Interested in sponsoring? Contact us at sponsorship@cuhacking.com </p> 
    </div> 
    )
  }
}
