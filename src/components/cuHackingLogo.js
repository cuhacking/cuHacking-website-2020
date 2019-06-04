import React, {Component} from 'react';
import purpleLogo from 'images/logoPurple.png';
import whiteLogo from 'images/logoWhite.png'; 
import styles from './cuHackingLogo.module.css';

export default class CuHackingLogo extends Component {
  render() {    
    return (
      <img id={styles.logo} src={this.props.darkMode? whiteLogo : purpleLogo} alt="cuHacking"></img>
    )
  }
}

