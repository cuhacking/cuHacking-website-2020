import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isIE: false || !!document.documentMode
    }
  }

  render() {
    return (
      <div className="navbar-parent">
        <nav className="navbar"> 
            <a href="/"> <img className="nav-logo" src={require("../assets/images/cuHackingText.png")} alt="cuHacking 2020"/></a>
            <ul className="nav-links"> 
              <li className="nav-item" role="link"> <a href="#home"> Home </a> </li>
              <li className="nav-item" role="link"> <a href="#about"> About Us </a> </li>
              <li className="nav-item" role="link"> <a href="#sponsors"> Sponsors </a> </li>
            </ul> 
            <FontAwesomeIcon className="toggle" icon={faBars}/>
        </nav>
      </div>
    )
  }
}