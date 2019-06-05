import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import {
  ParticleBackground,
  SocialLinks
} from 'components';

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   const hours = (new Date()).getHours();

  //   this.state = {
  //     isNight: hours > 18 || hours < 6,
  //   };
  // }

  render() {
    return (
      <>
        <ParticleBackground id="particleBackground" darkMode={this.state.isNight}/>
        <div id="appSpace">
          <div id="content">
            <div id="titleSpace">
              <h1 id="titleText">cuHacking 2020<br/><span id="subtitleText">coming soon.</span></h1>
            </div>
            <SocialLinks className="row" darkMode={this.state.isNight}/>
            <div id="logo"/>
          </div>
        </div>
      </>
    )
  }
};

ReactDOM.render(<App/>, document.getElementById('root'));
