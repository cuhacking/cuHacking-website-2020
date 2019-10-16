import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import styles from './socialLinks.module.css';
import {
  faFacebookF,
  faLinkedin,
  faInstagram,
  faTwitter,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

export default class SocialLinks extends Component {
  createLogo(icon, target, link) {
    return (
      <a className={styles.socialButton} target={target} rel='noopener noreferrer' href={link}>
        <FontAwesomeIcon icon={icon} size='1x'/>
      </a> 
    );
  }

  render() {
    return (
      <div className = {styles.container}>
        {this.createLogo(faEnvelope, '', 'mailto:info@cuhacking.com')}
        {this.createLogo(faFacebookF, '_blank', 'https://www.facebook.com/cuhacking/')}
        {this.createLogo(faLinkedin, '_blank', 'https://www.linkedin.com/company/cuhacking/')}
        {this.createLogo(faInstagram, '_blank','https://www.instagram.com/cuHacking/')}
        {this.createLogo(faTwitter, '_blank', 'https://twitter.com/cuhacking?lang=en')}
        {this.createLogo(faGithub, '_blank', 'https://github.com/cuhacking')}
      </div>
    );
  }
}
