import React from 'react';
import {Helmet} from 'react-helmet';
import 'index.css';
import {
  Button, 
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
  Wolfram,
  Stickermule,
  Martello
} from 'assets/sponsors';
import styles from './home.module.css';
import { Link } from 'react-router-dom'; 

function Announcements() {
  return (
    <div className={styles.slide} id={styles.announcements}>
      <div className={styles.announcement}>
        <h3>MLH Local Hack Day: Build</h3>
        <p> Join us on <strong>December 7th</strong> for a one-day mini hackathon with the global MLH community. <a href="https://localhackday.mlh.io/build/locations/2531" target="_blank" rel="noopener noreferrer">Click here to register!</a></p>
      </div>
      <div className={styles.announcement}>
        <h3>Interested in Volunteering?</h3>
        <p>Would you like to help run Carleton's biggest hackathon? Volunteers are always welcome!<a href="https://docs.google.com/forms/d/e/1FAIpQLSeQjgCEb6PNZBK1PEm3rFA9EHkO7LmyxSSBNGLu16XzIY_B7Q/viewform" target="_blank" rel="noopener noreferrer"> Sign up here! </a></p> 
      </div>
    </div>
  )

}

function Landing() {
  return (
    <div className={styles.slide}>
      <div className={styles.landingTop}>
        <Logo className={styles.landingLogo}/>
        <div className={styles.landingDate}/>
      </div>  
      <div className={styles.landingBottom}>
        <h2 className={styles.applicationMessage}> Applications are now open!</h2>
        <Link to="/login">
          <Button type="submit" label="APPLY NOW"/>    
        </Link>
        {/*<MailingListForm />*/}
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

        <div className={styles.sectionContainer}> {/*Giga Sponsors*/}
          <div className={styles.logoSection}>
            {sponsorLogo(styles.rbc, 'https://www.rbcroyalbank.com', Rbc)}
            {sponsorLogo(styles.martello, 'https://martellotech.com/', Martello)} 
          </div>
        </div>
        <div className={styles.sectionContainer}> {/*Mega Sponsors*/}
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
        </div>

        <div className={styles.sectionContainer}> {/*Kilo Sponsors*/}
          <div className={styles.logoSection}> 
            {sponsorLogo(styles.balsamiq, 'https://balsamiq.com', Balsamiq)}
            {sponsorLogo(styles.fdmGroup, 'https://fdmgroup.com', FdmGroup)}
          </div>    
        </div>

        <div className={styles.sectionContainer}> {/*In-kind Sponsors*/}
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
            {sponsorLogo(styles.stickermule, 'https://www.stickermule.com/unlock?ref_id=0539570701&utm_source=sponsorship&utm_campaign=mlh-sponsorship-2019&utm_medium=referral', Stickermule)}
          </div>
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
    <Helmet>
      <title>cuHacking 2020</title>
    </Helmet>
    <Navbar/>
    <div id={styles.content}>
      <Landing/>   
      <Announcements />    
      <Sponsors/>
    </div>
    <Footer/> 
    <MLHBanner/>
  </>
);
