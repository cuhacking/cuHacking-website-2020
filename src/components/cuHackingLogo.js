import React from 'react';
import cuHackingLogo from 'images/logo.svg'

const style = { 
  width: "45px", 
  height: "45px"
}

export default () => (
  <img style={style} id="logo" src={cuHackingLogo} alt="cuHacking"></img>
);
