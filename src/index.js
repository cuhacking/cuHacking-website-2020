import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {
  CuHackingLogo,
  ParticleBackground,
  SocialLinks
} from 'components';

const isIE = false || !!document.documentMode;
const time = new Date(); 
const sunrise = 6;  
const sunset = 18; 

let darkMode = true;  /* Test it here! Change it to true or false to switch between modes. 
                       Set it to to null, and delete lines 21-29 when you're done. */ 

class App extends Component {
  render() {

    if(!darkMode) {
      // It's day time! Between sunrise AM and sunset PM!
      require('./index.css'); 
      darkMode = false; 
    } else {  
      // It's night time! 
      require('./index-dark.css'); 
      darkMode = true;  
    } 

  /* Uncomment this once we are done testing the 'look' of dark mode. 
   if(sunrise < time.getHours() < sunset) {
      // It's day time! Between sunrise AM and sunset PM!
      require('./index.css'); 
      darkMode = false; 
    } else {  
      // It's night time! 
      require('./index-dark.css'); 
      darkMode = true;  
    } 
  */ 

    return (
      <>
        {!isIE ? <ParticleBackground id="particleBackground" darkMode={darkMode}/> : <></>}
        <div id="wrapper">
          <div className="content">
            <div className="top navbar row">
                <CuHackingLogo darkMode={darkMode}/>
            </div>
            <div className="heading">
              <h1 className="titleText">cuHacking 2020<br/><span className="subtitleText">coming soon.</span></h1>
            </div>
            <SocialLinks className="row" darkMode={darkMode} />
          </div>
        </div>
      </>
    )
  }
}; 

ReactDOM.render(<App />, document.getElementById('root'));
