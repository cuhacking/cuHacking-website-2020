import React, {Component} from 'react';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isIE: false || !!document.documentMode
    }
  }

  render() {
    return (
        <nav className="navbar"> 
            <a href="#home">
                <img className="nav-logo" src={require("../assets/images/cuHackingText.png")} alt="cuHacking 2020"/>
            </a>
            <ul className="nav-links"> 
                <li className="nav-item"> <a href="#About"> About Us </a> </li>
                <li className="nav-item"> <a href="#Sponsors"> Sponsors </a> </li>
                <li className="nav-item"> <a href="#FAQ"> FAQ </a> </li>
            </ul> 
        </nav>
        )
  }
}
