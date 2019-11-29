import React from 'react';
import 'index.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import styles from './password.module.css';

class Password extends React.Component {
    // Initial login page to the application, ask for email/password by default. 
    // To think about - do we want to add Sign in with Google/Apple/etc...
    // This should also branch to a create account page if they don't already have one? 
  
    constructor(props) {
      super(props);
      this.state = {  hidden: true,          
                      eyeIcon: {faEyeSlash}  
                  }; 
      this.toggleVisibility = this.toggleVisibility.bind(this); 
    }

    toggleVisibility() {
      this.state.hidden ? this.setState({hidden: false})
                        : this.setState({hidden: true})
    } 
    
    eyeIcon(){
      if(this.state.hidden) {
        return <FontAwesomeIcon className={styles.selectIcon} icon={faEyeSlash} size='sm'/>
      } else {
        return <FontAwesomeIcon className={styles.selectIcon} icon={faEye} size='sm'/>
      }
    }

    render () {
      return (
        <div className={styles.inputContainer}>
          <div className={styles.passwordField}> 
            <input name={this.props.name} onChange={this.props.onChange} type={this.state.hidden? 'password' : 'text'} className={styles.input} label={this.props.label} placeholder={this.props.placeholder} required={true}/>
            <div className={styles.visibilityToggle} onClick={this.toggleVisibility}> {this.eyeIcon()} </div>
          </div>
          <p className={styles.label}>{this.props.label}</p>
        </div>
      );
    }

  }
  
  export default Password; 