import React, {Component} from 'react';
import CuHeader from './cuHeader.js';

export default class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isIE: false || !!document.documentMode
    }
  }

  render() {
    return (
      <div className="slide FAQ" id="FAQ">
        <CuHeader text="Frequently Asked Questions"/> 
        <br/> 
        <br/>
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
