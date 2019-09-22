import React, {Component} from 'react';
import SocialLinks from './socialLinks.js';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isIE: false || !!document.documentMode
    }
  }

  render() {
    return (
      <div className="footer-wrapper">
        <p>Made with &lt;3 by the <span id="footer-purple">cu</span>Hacking team</p> 
        <SocialLinks/>
      </div>
    )
  }
}
