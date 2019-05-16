import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.png'
import hero from './trimmedLogo.png'
import ParticleBackground from './ParticleBackground'


class App extends React.Component {
    render() {
        return (
          <div id = "content"> 
            <ParticleBackground /> 
            <div id="leftSide">
                <div id = "topNav">
                    <img id="logo" src={logo} alt="Logo for cuHacking."></img>
                </div>
                <div id = "heading"> 
                    <h1> cuHacking is coming </h1>
                    <h1> January 2020 </h1>
                </div>  
                <div id = "bottomNav">
                    <img id="MLHLogo" src="https://static.mlh.io/brand-assets/logo/official/mlh-logo-black.svg"></img>
                </div>
            </div> 
            
            <div id = "hero">
                    <img src={hero}></img> 
            </div>

        </div>

        ) 
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

