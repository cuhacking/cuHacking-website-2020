import React from 'react';
import 'index.css';
import {
  Redirect
} from 'react-router-dom'; 
import {
    Navbar, 
    Button 
} from 'components';
import styles from './index.module.css';

class Forgot extends React.Component {
  render () {
    return (
      <div className={styles.invalidPage}> 
        <Navbar /> 
        <div className={styles.container}>
          <p className={styles.heading}> 404 </p>
          <p> Uh-oh, this isn't supposed to happen.</p> 
          <Button link to='/' label='Return to Safety'/>
        </div>
      </div>
    );
  }
}

export default Forgot; 