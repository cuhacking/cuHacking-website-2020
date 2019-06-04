import React, {Component} from 'react';
import Particles from 'react-particles-js';
import config from './particlesjs-config.json';
import darkconfig from './particlejs-darkconfig.json'; 

export default class ParticleBackground extends Component {
  render() {    
    return (
      <> {this.props.darkMode? <Particles params={darkconfig}></Particles> : <Particles params={config}></Particles>} </>
    )
  }
}

