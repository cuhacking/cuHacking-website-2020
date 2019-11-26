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
import {
  OnePassword,
  Balsamiq,
  Ciena,
  Cse,
  DigitalOcean,
  Ea,
  FdmGroup,
  Fullscript,
  JetBrains,
  LighthouseLabs,
  MarchNetworks,
  Rbc,
  Sketch,
  Voiceflow,
  Wolfram
} from 'assets/sponsors';
import styles from './home.module.css';
import { Link } from 'react-router-dom'; 

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
    <a className={styles.partnerLogo} href={url} target="_blank" rel="noopener noreferrer">
      <img id={id}src={src} alt={alt}/>
    </a> 
  );

  const sponsorLogo = (id, url, Logo) => (
    <a id={id} href={url} target="_blank" rel="noopener noreferrer">
      <Logo/>
    </a> 
  );

  return (
    <div className={styles.slide}>
      <div id={styles.sponsorBkg}>
        <h2>Sponsors</h2>
        <div className={styles.logoSection}>
          {sponsorLogo(styles.rbc, 'https://www.rbcroyalbank.com', Rbc)}
        </div>
        <div className={styles.logoSection}>
          {sponsorLogo(styles.ciena, 'https://www.ciena.ca', Ciena)}
          {sponsorLogo(styles.cse, 'https://www.cse-cst.gc.ca/en', Cse)}
        </div>
        <div className={styles.logoSection}>
          {sponsorLogo(styles.fullscript, 'https://fullscript.com', Fullscript)}
          {sponsorLogo(styles.lighthouseLabs, 'https://www.lighthouselabs.ca', LighthouseLabs)}
        </div>
        <div className={styles.logoSection}>
          {sponsorLogo(styles.marchNetworks, 'https://marchnetworks.com', MarchNetworks)}
        </div>
        <div className={styles.logoSection}>
          {sponsorLogo(styles.balsamiq, 'https://balsamiq.com', Balsamiq)}
          {sponsorLogo(styles.fdmGroup, 'https://fdmgroup.com', FdmGroup)}
        </div>
        <div className={styles.logoSection}>
          {sponsorLogo(styles.onePassword, 'https://1password.com', OnePassword)}
          {sponsorLogo(styles.digitalOcean, 'https://www.digitalocean.com/', DigitalOcean)}
          {sponsorLogo(styles.ea, 'https://www.ea.com', Ea)}
          {sponsorLogo(styles.jetbrains, 'https://www.jetbrains.com/', JetBrains)}
        </div>
        <div className={styles.logoSection}>
          {sponsorLogo(styles.sketch, 'https://www.sketch.com/', Sketch)}
          {sponsorLogo(styles.voiceflow, 'https://www.voiceflow.com/', Voiceflow)}
          {sponsorLogo(styles.wolfram, 'https://wolfram.com', Wolfram)}
        </div>
        <h2>Partners</h2>
          <div id={styles.partners}>
            <Partner id={styles.SCSLogo} url="https://carleton.ca/scs/" src={logoSCS} alt="Link to Carleton's School of Computer Science Webpage"/>
            <Partner id={styles.SCELogo} url="https://carleton.ca/sce/" src={logoSCE} alt="Link to Carleton's School of Computer and Systems Engineering Webpage"/>
            <Partner id={styles.MLHLogo} url="https://mlh.io/"          src={logoMLH} alt="Link to MLH Webpage"/>
          </div>
      </div>
      <p style={{textAlign: 'center'}}>Thinking about sponsoring? Reach out to <a className={styles.mailToLink} href="mailto:sponsorship@cuhacking.com">sponsorship@cuhacking.com</a> to learn more.</p>
    </div> 
  );
}

export default () => (
  <>
    <Navbar/>
    <div id={styles.content}>
      <Landing/>      
      <Sponsors/>
    </div>
    <Footer/> 
    <MLHBanner/>
  </>
);
