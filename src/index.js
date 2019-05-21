import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import cuHackingLogo from './images/logo.png'
import ParticleBackground from './ParticleBackground'
import SocialLinks from './SocialLinks';

const isIE = false || !!document.documentMode;

class App extends React.Component {
    render() {

        console.log(isIE);

        return (
          <div id = "content">
            <div id="leftSide">

                <div id = "topNav">
                    <img id="logo" src={cuHackingLogo} alt="Logo for cuHacking."></img>
                </div>

                <div id = "heading"> 
                    <h1> cuHacking is coming </h1>
                    <h1> January 2020 </h1>
                </div>  

                <div className = "bottomNav">

                    <div id="bottomNav-left"> 
                        <a target="_blank" rel="noopener noreferrer" href="https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=white"> 
                            <img id="MLHLogo" alt="Major League Hacking Logo" src="https://static.mlh.io/brand-assets/logo/official/mlh-logo-black.svg"></img> 
                        </a> 
                    </div> 

                    <div id="bottomNav-right">
                        <SocialLinks /> 
                     </div>

                </div>
            
            </div> 

            <div id="particles"> 
                <ParticleBackground /> 
            </div> 

        </div> 

        ) 
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

