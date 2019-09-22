import React, {Component} from 'react'; 
import feather from '../assets/images/feather.svg'

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
      <div className="custom-header">
        <img id="feather" src={feather}/>
        <p> {this.state.text} </p>
      </div>
        
    )
  }
}
