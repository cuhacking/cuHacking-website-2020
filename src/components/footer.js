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
      <footer className="bar-wrapper footer">        
          <SocialLinks/>
          <p> Made with <FontAwesomeIcon icon={faHeart} size='sm'/> by the <span id="footer-purple">cu</span>Hacking team</p> 
          <p><a  target="onblank" rel="noopener noreferrer" id="MLHCodeOfConduct" href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"> MLH Code of Conduct </a></p> 
      </footer>
    )
  }
}
