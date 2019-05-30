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
            
            {!isIE ? <ParticleBackground id="particleBackground"/> : <></>}

            <div id="wrapper">

                <div className="content">

       
                        <div className = "top navbar row">
                            <CuHackingLogo/> 
                        </div>
        
                        <div className = "heading"> 
                            <h1 id = "heading-cu"> cuHacking 2020<br/><span id="test"> coming soon </span> </h1>
                        </div>  
                

                    <div className = "bottom navbar"> 
                       <SocialLinks className = "row" /> 
                    </div> 

                </div> 
 
            </div>

            </> 
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

