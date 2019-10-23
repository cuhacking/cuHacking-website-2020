import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  Navbar, 
  MLHBanner, 
  Landing, 
  Footer,
  Partners
} from 'components';

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      darkMode: matchMedia('(prefers-color-scheme: dark)').matches, 
    };
  }

  render() {
    return (
      <div className={`app`}>
        <Navbar dark={this.state.darkMode} /> 
        <div className="slide-wrapper">
          <Landing dark={this.state.darkMode}/>
          <Partners /> 
        </div>
        <Footer /> 
        <MLHBanner /> 
      </div>
    )
  }
};

ReactDOM.render(<App/>, document.getElementById('root'));
