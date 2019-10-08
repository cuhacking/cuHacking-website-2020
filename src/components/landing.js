import React, {Component} from 'react';
import MailingListForm from './mailingListForm'; 
import {ReactComponent as Logo} from '../assets/images/logo-animated.svg'

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
        <div className='landing-top'>
          <div className='landing-top-left'>
            <Logo className='landing-logo'/>
          </div>
          <img className="landing-date" src={require("../assets/images/dateStamp.svg")} alt="January 11th @ Carleton University"/>
        </div>
        <div className="landing-bottom">
          <MailingListForm /> 
        </div>
      </div> 
    )
  }
}
