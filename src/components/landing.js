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
                <img className="dateStamp" src={require("../assets/images/dateStamp.svg")} alt="January 11th @ Carleton University"/>
            </div>
        </div> 
    )
  }
}
