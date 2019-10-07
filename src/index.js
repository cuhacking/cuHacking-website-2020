import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  Navbar, 
  AboutUs, 
  Sponsors, 
  MLHBanner, 
  Landing, 
  Footer
} from 'components';

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  render() {
    return (
      <div className={`app`}>
        <Navbar /> 
        <div className="slide-wrapper">
          <Landing />
          <AboutUs />
          <Sponsors /> 

        </div>
        <Footer /> 
        <MLHBanner /> 
      </div>
    )
  }
};

ReactDOM.render(<App/>, document.getElementById('root'));
