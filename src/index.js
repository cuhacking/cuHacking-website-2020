import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  ParticleBackground,
  SocialLinks
} from 'components';

class App extends Component {
  constructor(props) {
    super(props);

    const LIGHT_THEME = 'lightTheme';
    const DARK_THEME = 'darkTheme';

    const hours = (new Date()).getHours();
    const isNight = hours > 18 || hours < 6;

    this.state = {
      isNight,
      getTheme: () => isNight ? DARK_THEME : LIGHT_THEME
    };
  }

  render() {
    return (
      <div className={`app ${this.state.getTheme()}`}>
        <ParticleBackground darkMode={this.state.isNight}/>
        <div id="content">
          <div id="titleSpace">
            <h1 id="title">cuHacking 2020<br/><span id="subtitle">coming soon.</span></h1>
          </div>
          <SocialLinks/>
          <div id="logo"/>
        </div>
      </div>
    )
  }
};

ReactDOM.render(<App/>, document.getElementById('root'));
