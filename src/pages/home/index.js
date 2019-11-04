import React from 'react';
import 'index.css';
import {
  MailingListForm,
  Navbar, 
  MLHBanner, 
  Footer,
} from 'components';
import {ReactComponent as Logo} from 'assets/logo-animated.svg'
import logoMLH from 'assets/partners/mlh.svg';
import logoSCE from 'assets/partners/sce.png';
import logoSCS from 'assets/partners/scs.png';
import styles from './index.module.css';

function Landing() {
  return (
    <div className={styles.slide}>
      <div className={styles.landingTop}>
        <Logo className={styles.landingLogo}/>
        <div className={styles.landingDate}/>
      </div>  
      <div className={styles.landingBottom}>
        <MailingListForm /> 
      </div>
    </div> 
  );
}

function Sponsors() {
  const Partner = ({id, url, src, alt}) => (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img id={id} className={styles.partnerLogo} src={src} alt={alt}/>
    </a> 
  );

  return (
    <div className={styles.slide}>
      <p>Our Proud Partners</p>
      <div className={styles.sponsors}>
        <Partner id={styles.SCSLogo} url="https://carleton.ca/scs/" src={logoSCS} alt="Link to Carleton's School of Computer Science Webpage"/>
        <Partner id={styles.SCELogo} url="https://carleton.ca/sce/" src={logoSCE} alt="Link to Carleton's School of Computer and Systems Engineering Webpage"/>
        <Partner id={styles.MLHLogo} url="https://mlh.io/"          src={logoMLH} alt="Link to MLH Webpage"/>
      </div>
      <p style={{textAlign: 'center'}}>Questions? Send us an email at <a className={styles.mailToLink} href="mailto:info@cuhacking.com">info@cuhacking.com</a>.</p>
    </div> 
  );
}

export default () => (
  <>
    <Navbar dark={matchMedia('(prefers-color-scheme: dark)').matches}/>
    <div id={styles.content}>
      <Landing dark={matchMedia('(prefers-color-scheme: dark)').matches}/>
      <Sponsors/>
    </div>
    <Footer/> 
    <MLHBanner/>
  </>
);
