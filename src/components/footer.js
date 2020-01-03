import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faArrowUp
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
    <FontAwesomeIcon icon={icon} size='lg'/>
  </a> 
);

const socialLinks = () => (
  <div className={styles.socialButtons}>
    {renderLogo(faFacebookF, '_blank', 'https://www.facebook.com/cuhacking/')}
    {renderLogo(faLinkedin, '_blank', 'https://www.linkedin.com/company/cuhacking/')}
    {renderLogo(faInstagram, '_blank','https://www.instagram.com/cuHacking/')}
    {renderLogo(faTwitter, '_blank', 'https://twitter.com/cuhacking?lang=en')}
    {renderLogo(faGithub, '_blank', 'https://github.com/cuhacking')}
  </div>
)

const madeWithLove = () => ( 
  <p id={styles.madeWithLove}>
    Made with <FontAwesomeIcon icon={faHeart} size='sm'/> by the <span style={{color: 'var(--lightPrimaryColour)'}}>cu</span>Hacking team
  </p> 
)

const MLHCodeOfConduct = () => (
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
)

const description = () => (
  <div className={styles.footerContent} id={styles.footerDescription}>
    <div id={styles.logo}/> 
    <p className={styles.nomargin}> This little blurb is about how good cuHacking is going to be and what it's all about. Maybe I'll just rip something from the sponsorship package. But it can only be this long</p> 
  </div>
)

const navLinks = () => (
  <div className={styles.footerContent} id={styles.navList}>
    <p className={styles.footerHeader}> Navigation </p> 
    <a href="#"> Home </a>
    <a href="#volunteer"> Volunteer </a>
    <a href="#faq"> FAQ </a>
    <a href="#sponsors"> Sponsors </a>
    <a href='https://my.cuhacking.com'>Login </a>
  </div>   
)

const contactUs = () => (
  <div className={styles.footerContent} id={styles.contactForm}>
    <p className={styles.footerHeader}>Connect with us</p>
    {socialLinks()}
    <p className={styles.nomargin}> Check us out on social. Or, email us at <a href='mailto:info@cuhacking.com' id={styles.mailTo}> info@cuHacking.com </a></p> 
  </div>   
)

const mailingList = () => (
  <div className={styles.footerContent} id={styles.mailingList}>
    <p className={styles.footerHeader}>Stay up to date with cuHacking</p>
    <MailingListForm/> 
  </div>
)

export default () => (
  <footer id={styles.container}>       
    <div className={styles.wrapper}>
      <div className={styles.backToTopContainer}>
        <a href='#'> <FontAwesomeIcon icon={faArrowUp} size='sm'/> Back to Top </a>
      </div> 
      <div className={styles.row} id={styles.contentWrapper}> 
        {description()} 
        {mailingList()}
        {contactUs()}
      </div>
      <div className={styles.row}>
        {madeWithLove()}
        {MLHCodeOfConduct()}
      </div>
    </div>
  </footer>
);