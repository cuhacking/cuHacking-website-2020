import React, {Component} from 'react';
import MailingListForm from './mailingListForm'; 
import {ReactComponent as Logo} from '../assets/logo-animated.svg'

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isIE: false || !!document.documentMode,
      dark: props.dark
    }
  }

  date() {
    if (this.state.dark) {
      return <img className="landing-date" src={require("../assets/dateStamp-dark.svg")} alt="January 11-12th @ Carleton University"/>
    } else {
      return <img className="landing-date" src={require("../assets/dateStamp.svg")} alt="January 11-12th @ Carleton University"/>
  }}

  render() {
    return (
      <div className="slide landing" id="home">
        <div className='landing-top'>
          <div className='landing-top-left'>
            <Logo className='landing-logo'/>
          </div>
          {this.date()}
        </div>
        <div className="landing-bottom">
          <MailingListForm /> 
        </div>
      </div> 
    )
  }
}
