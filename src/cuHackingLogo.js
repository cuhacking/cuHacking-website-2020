import React from 'react';
import cuHackingLogo from './images/logo.svg'

const style = { 
    width: "30px", 
    height: "30px"
}

export default () => ( 
    <img style={style} id="logo" src={cuHackingLogo} alt="Logo for cuHacking."></img>
);
