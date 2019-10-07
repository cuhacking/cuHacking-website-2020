import React, {Component} from 'react';
import SocialLinks from './socialLinks.js';
import {
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isIE: false || !!document.documentMode
    }
  }

  render() {
    return (
      <footer className="bar-wrapper">
        <p>Made with <FontAwesomeIcon icon={faHeart} size='sm'/> by the <span id="footer-purple">cu</span>Hacking team</p> 
        <SocialLinks/>
      </footer>
    )
  }
}
