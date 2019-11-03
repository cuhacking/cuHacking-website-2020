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
      return <a href="/"> <img className="nav-logo" src={require("../assets/shortLogo-dark.svg")} alt="cuHacking 2020"/></a>
    } else {
      return <a href="/"> <img className="nav-logo" src={require("../assets/shortLogo.svg")} alt="cuHacking 2020"/></a>
    }
  }

  render() {
    return (
      <div className="navbar-parent">
        <nav className="navbar"> 
            {this.navLogo()}
            <ul className="nav-links"> 
              {/*<li className="nav-item" role="link"> <a href="#home"> Home </a> </li>*/}
            </ul> 
            <FontAwesomeIcon className="toggle" icon={faBars}/>
        </nav>
      </div>
    )
  }
}