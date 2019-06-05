import React, {Component} from 'react';
import Particles from 'react-particles-js';
import {lightParticleConfig, darkParticleConfig} from 'assets/configs';

export default class ParticleBackground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isIE: false || !!document.documentMode
    }
  }

  render() {
    let config = this.props.darkMode ? darkParticleConfig : lightParticleConfig;

    if (this.state.isIE)
      return <></>;
    else
      return <Particles params={config}/>;
  }
}
