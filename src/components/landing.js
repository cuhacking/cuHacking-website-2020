import React, {Component} from 'react';
import MailingListForm from './mailingListForm'; 

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isIE: false || !!document.documentMode
    }
  }

  render() {
    return (
        <div className="slide landing" id="home">
            <img className="landing-top landing-logo" src={require("../assets/images/cuHackingLogo-large.png")} alt="cuHacking 2020"/>
            <div className="landing-bottom">
                <MailingListForm /> 
                <img className="landing-date" src={require("../assets/images/stamp.svg")}/> 
            </div>
        </div> 
    )
  }
}
