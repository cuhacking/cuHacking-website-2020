import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faEnvelope, 
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faLinkedin,
  faInstagram,
  faTwitter,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import styles from './footer.module.css';

const renderLogo = (icon, target, link) => (
  <a className={styles.socialButton} target={target} rel='noopener noreferrer' href={link}>
    <FontAwesomeIcon icon={icon} size='1x'/>
  </a> 
);

export default () => (
  <footer id={styles.container}>        
    <div className={styles.socialButtons}>
      {renderLogo(faEnvelope, '', 'mailto:info@cuhacking.com')}
      {renderLogo(faFacebookF, '_blank', 'https://www.facebook.com/cuhacking/')}
      {renderLogo(faLinkedin, '_blank', 'https://www.linkedin.com/company/cuhacking/')}
      {renderLogo(faInstagram, '_blank','https://www.instagram.com/cuHacking/')}
      {renderLogo(faTwitter, '_blank', 'https://twitter.com/cuhacking?lang=en')}
      {renderLogo(faGithub, '_blank', 'https://github.com/cuhacking')}
    </div>
    <p>
      Made with <FontAwesomeIcon icon={faHeart} size='sm'/> by the <span style={{color: 'var(--lightPrimaryColour)'}}>cu</span>Hacking team
    </p> 
    <p>
      <a
        id={styles.MLHCodeOfConduct}
        target="onblank"
        rel="noopener noreferrer"
        href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
      >
        MLH Code of Conduct
      </a>
    </p> 
  </footer>
);
