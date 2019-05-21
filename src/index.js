import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import cuHackingLogo from './images/logo.png'
import facebookLogo from './images/facebookLogo.png'
import instagramLogo from './images/instagramLogo.png'
import twitterLogo from './images/twitterLogo.png'
import githubLogo from './images/githubLogo.png'
import linkedinLogo from './images/linkedinLogo.png'
import ParticleBackground from './ParticleBackground'


class App extends React.Component {
    render() {
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
                        <a target="_blank" href="https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=white"> <img id="MLHLogo" src="https://static.mlh.io/brand-assets/logo/official/mlh-logo-black.svg"></img> </a> 
                    </div> 

                    <div id="bottomNav-right">
                        <a target="_blank" href="https://www.facebook.com/cuhacking/"> <img className ="socialLink" src={facebookLogo}></img> </a> 
                        <a target="_blank" href="https://www.linkedin.com/company/cuhacking/"> <img className ="socialLink" src={linkedinLogo}></img> </a> 
                        <a target="_blank" href="https://www.instagram.com/cuHacking/"> <img className ="socialLink" src={instagramLogo}></img> </a> 
                        <a target="_blank" href="https://twitter.com/cuhacking?lang=en"> <img className ="socialLink" src={twitterLogo}></img> </a> 
                        <a target="_blank" href="https://github.com/cuhacking"> <img className ="socialLink" src={githubLogo}></img> </a> 
                    </div>

                </div>
            
            </div> 

            <div id="particles"> 
                <ParticleBackground/>
            </div> 

        </div> 

        ) 
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

