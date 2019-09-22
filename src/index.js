import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import lightPromo from './assets/images/promoText-black.svg';
import darkPromo from './assets/images/promoText-white.svg';
import './index.css';
import {
  Navbar, 
  MLHBanner, 
  Landing, 
  AboutUs, 
  ParticleBackground,
  SocialLinks,
  MailingListForm
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
      return <img id='promo' draggable={false} src={darkPromo} alt='cuHacking2020, January 11-12.'/>;
    else
      return <img id='promo' draggable={false} src={lightPromo} alt='cuHacking2020, January 11-12.'/>;
  }

  render() {

    /* 
    return (
      <div className={`app ${this.state.getTheme()}`}>
        <Navbar /> 
        <div id='content'>
          {this.promoText()} 
          <MailingListForm darkMode={this.state.isNight}/> 
          <SocialLinks/>  
        </div> 
      </div>
    )
    */ 



    return (
      <div className={`app ${this.state.getTheme()}`}>
        <Navbar /> 
        <div className="slide-wrapper">
          <Landing />
          <AboutUs /> 
        </div>
        <MLHBanner /> 
      </div>
    )
  }
};

ReactDOM.render(<App/>, document.getElementById('root'));
