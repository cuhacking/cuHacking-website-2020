import React, {Component} from 'react'; 
import featherSRC from '../assets/images/stamp.svg'

export default class cuHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      isIE: false || !!document.documentMode
    }
  }

  render() {
    console.log(this.state.text)
    return (
        <h1> {this.state.text} </h1>
    )
  }
}
