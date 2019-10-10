import React, {Component} from 'react';

export default class TimeCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "00:00:00", 
      isIE: false || !!document.documentMode
    }
  }

  render() {
    return (
        <div className="bar-wrapper timer-wrapper">
          <p> Hack begins in: &nbsp;&nbsp;&nbsp; </p>
          <p id="timer"> {this.state.time} </p>
        </div>
    )
  }
}
