import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import lightPromo from './assets/images/promoText-black.svg';
import darkPromo from './assets/images/promoText-white.svg';
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

  promoText() {
    if (this.state.isNight)
      return <img className={'noSelect'} draggable={false} src={darkPromo} alt='cuHacking2020, coming soon.'/>;
    else
      return <img className={'noSelect'} draggable={false} src={lightPromo} alt='cuHacking2020, coming soon.'/>;
  }

  render() {
    return (
      <div className={`app ${this.state.getTheme()}`}>
        <ParticleBackground darkMode={this.state.isNight}/>
        <div id='content'>
          <div id='promoSpace'>
            {this.promoText()}
          </div>
          <SocialLinks/>
          <div id='logo'/>
        </div>
      </div>
    )
  }
};

ReactDOM.render(<App/>, document.getElementById('root'));
