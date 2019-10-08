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
        <p id="footer-madewithlove">Made with <FontAwesomeIcon icon={faHeart} size='sm'/> by the <span id="footer-purple">cu</span>Hacking team</p> 
        <p id="footer-questions">Questions? Send us an email at <a className="mailtoLink" href="mailto:info@cuhacking.com"> info@cuhacking.com </a> </p>
        <SocialLinks/>
      </footer>
    )
  }
}
