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
      <div className="navbar-parent">
        <nav className="navbar"> 

            <img className="nav-logo" src={require("../assets/images/cuHackingText.png")} alt="cuHacking 2020"/>

            <ul className="nav-links"> 
                <li className="nav-item" role="link"> About Us </li>
                <li className="nav-item" role="link"> Sponsors </li>
                <li className="nav-item" role="link"> FAQ </li>
            </ul> 
        </nav>
      </div>
    )
  }
}
