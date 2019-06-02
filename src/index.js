import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  CuHackingLogo,
  ParticleBackground,
  SocialLinks
} from 'components';

const isIE = false || !!document.documentMode;

class App extends Component {
  render() {
    return (
      <>
        {!isIE ? <ParticleBackground id="particleBackground"/> : <></>}
        <div id="wrapper">
          <div className="content">
            <div className="top navbar row">
              <CuHackingLogo/>
            </div>
            <div className="heading">
              <h1 className="titleText">cuHacking 2020<br/><span className="subtitleText">coming soon.</span></h1>
            </div>
            <SocialLinks className="row" />
          </div>
        </div>
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
