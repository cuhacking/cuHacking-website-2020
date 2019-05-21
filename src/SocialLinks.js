import React from 'react';

import facebookLogo from './images/facebookLogo.png'
import instagramLogo from './images/instagramLogo.png'
import twitterLogo from './images/twitterLogo.png'
import githubLogo from './images/githubLogo.png'
import linkedinLogo from './images/linkedinLogo.png'

export default () => (
  <div>
    <a target="_blank"  rel="noopener noreferrer" href="https://www.facebook.com/cuhacking/">           <img className ="socialLink" alt="Link to cuHacking Facebook Page"      src={facebookLogo}></img> </a> 
    <a target="_blank"  rel="noopener noreferrer" href="https://www.linkedin.com/company/cuhacking/">   <img className ="socialLink" alt="Link to cuHacking LinkedIn Page"      src={linkedinLogo}></img> </a> 
    <a target="_blank"  rel="noopener noreferrer" href="https://www.instagram.com/cuHacking/">          <img className ="socialLink" alt="Link to cuHacking Instagram Profile"  src={instagramLogo}></img> </a> 
    <a target="_blank"  rel="noopener noreferrer" href="https://twitter.com/cuhacking?lang=en">         <img className ="socialLink" alt="Link to cuHacking Twitter Page"       src={twitterLogo}></img> </a> 
    <a target="_blank"  rel="noopener noreferrer" href="https://github.com/cuhacking">                  <img className ="socialLink" alt="Link to cuHacking's Github"           src={githubLogo}></img> </a> 
  </div>
);
