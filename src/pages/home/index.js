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

function Landing(props) {
  const date = () => {
    if (props.dark) {
      return <img className="landing-date" src={require("assets/dateStamp-dark.svg")} alt="January 11-12th @ Carleton University"/>
    } else {
      return <img className="landing-date" src={require("assets/dateStamp.svg")} alt="January 11-12th @ Carleton University"/>
  }}

  return (
    <div className="slide landing" id="home">
      <div className='landing-top'>
        <div className='landing-top-left'>
          <Logo className='landing-logo'/>
        </div>
        {date()}
      </div>
      <div className="landing-bottom">
        <MailingListForm /> 
      </div>
    </div> 
  );
}

function Sponsors(props) {
  const Partner = ({id, url, src, alt}) => (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img id={id} className="partner-img" src={src} alt={alt}/>
    </a> 
  );

  return (
    <div className="slide partners">
      <p id="partner-heading" className="bodyText"> Our Proud Partners </p>
      <div className="partner-wrapper">
        <Partner id="SCSLogo" url="https://carleton.ca/scs/" src={logoSCS} alt="Link to Carleton's School of Computer Science Webpage"/>
        <Partner id="SCELogo" url="https://carleton.ca/sce/" src={logoSCE} alt="Link to Carleton's School of Computer and Systems Engineering Webpage"/>
        <Partner id="MLHLogo" url="https://mlh.io/"          src={logoMLH} alt="Link to MLH Webpage"/>
      </div>
      <p id="footer-questions">Questions? Send us an email at <a className="mailtoLink" href="mailto:info@cuhacking.com"> info@cuhacking.com </a> </p>
    </div> 
  );
}

export default () => (
  <>
    <Navbar dark={matchMedia('(prefers-color-scheme: dark)').matches}/>
    <div className="slide-wrapper">
      <Landing dark={matchMedia('(prefers-color-scheme: dark)').matches}/>
      <Sponsors/>
    </div>
    <Footer/> 
    <MLHBanner/>
  </>
);
