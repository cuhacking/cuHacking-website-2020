import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faTwitter,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

import styles from './socialLinks.module.css';

export default class SocialLinks extends Component {
  createLogo(icon, link) {
    return (
      <a className={styles.socialButton} target="_blank" rel="noopener noreferrer" href={link}>
        <FontAwesomeIcon icon={icon} size="lg"/>
      </a> 
    );
  }

  render() {
    return (
      <div className = {styles.container}>
        {this.createLogo(faFacebook, "https://www.facebook.com/cuhacking/")}
        {this.createLogo(faLinkedin, "https://www.linkedin.com/company/cuhacking/")}
        {this.createLogo(faInstagram, "https://www.instagram.com/cuHacking/")}
        {this.createLogo(faTwitter, "https://twitter.com/cuhacking?lang=en")}
        {this.createLogo(faGithub, "https://github.com/cuhacking")}
      </div>
    );
  }
}
