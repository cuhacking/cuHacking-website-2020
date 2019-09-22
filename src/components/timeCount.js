import React, {Component} from 'react';

export default class TimeCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isIE: false || !!document.documentMode
    }
  }

  render() {
    return (
        <p> timer </p>
    )
  }
}
