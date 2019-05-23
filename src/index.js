import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CuHackingLogo from './cuHackingLogo';
import ParticleBackground from './particleBackground';
import SocialLinks from './socialLinks';

const isIE = false || !!document.documentMode;

class App extends React.Component {
    render() {
        return (
            <>
                <div className="content">

                    <div className = "topNav row">
                        <CuHackingLogo/> 
                        <SocialLinks className = "row" /> 
                    </div>
    
                    <div id = "heading"> 
                        <h1 id = "heading-cu"> cuHacking is coming </h1>
                        <h1> January 2020 </h1> 
                    </div>  
    
                    <div id = "bottomNav"> </div> 

                </div> 
    
                {!isIE ? <ParticleBackground id="particleBackground"/> : <></>}

            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

