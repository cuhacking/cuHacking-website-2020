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
      <div className="slide sponsors" id="sponsors">
        <CuHeader text="Meet our sponsors"/>
        <p className="bodyText"> Interested in sponsoring? Contact us at <a href="mailto:sponsorship@cuhacking.com"> sponsorship@cuhacking.com  </a> </p> 
    </div> 
    )
  }
}
