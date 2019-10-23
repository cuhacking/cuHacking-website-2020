import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isIE: false || !!document.documentMode,
      dark: props.dark
    }
  }

  navLogo() {
    if (this.state.dark) {
      return <a href="/"> <img className="nav-logo" src={require("../assets/images/shortLogoDark.svg")} alt="cuHacking 2020"/></a>
    } else {
      return <a href="/"> <img className="nav-logo" src={require("../assets/images/shortLogo.svg")} alt="cuHacking 2020"/></a>
    }
  }

  render() {
    return (
      <div className="navbar-parent">
        <nav className="navbar"> 
            {this.navLogo()}
            <ul className="nav-links"> 
            </ul> 
            <FontAwesomeIcon className="toggle" icon={faBars}/>
        </nav>
      </div>
    )
  }
}