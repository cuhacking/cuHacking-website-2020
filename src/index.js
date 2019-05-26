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
            <div id="wrapper">
                <div className="content">

                        <div className = "top navbar row">
                            <CuHackingLogo/> 
                        </div>
        
                        <div className = "heading"> 
                            <h1 id = "heading-cu"> cuHacking 2020<br/>coming soon</h1>
                        </div>  


                    <div className = "bottom navbar"> 
                       <SocialLinks className = "row" /> 
                    </div> 

                </div> 
              
                <div id="backgroundImage"/>  
                   
                {!isIE ? <ParticleBackground id="particleBackground"/> : <></>}

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

