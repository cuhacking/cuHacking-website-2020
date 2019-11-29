import React from 'react';
import Cookies from 'js-cookie'
import {Helmet} from 'react-helmet';
import {Redirect, Link} from 'react-router-dom'
import 'index.css';
import {
    Input, 
    Button, 
    Navbar,
    Password
} from 'components';
import styles from './create.module.css';
import zxcvbn from 'zxcvbn'; 

// const API_URL = 'https://cuhacking.com/api'
const API_URL = 'http://localhost:3000/api-dev'

class Create extends React.Component {
  // Initial login page to the application, ask for email/password by default. 
  // To think about - do we want to add Sign in with Google/Apple/etc...
  // This should also branch to a create account page if they don't already have one? 

  constructor(props) {
    super(props);

    const token = Cookies.get('token')
    const email = Cookies.get('email')

    this.state = {  email: '',          
                    password: '',     
                    password2: '',
                    validForm: false,
                    error: '',
                    moveOn: token && email
                }; 
    this.handleChange = this.handleChange.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  PasswordStrengthMeter() {

    var strength;
    (this.state.password.length >= 8) ? strength = zxcvbn(this.state.password).score
                                      : strength = -1; 

    function label(strength) {
      switch(strength) {
        case -1: 
          return 'Too short'; 
        case 0:
          return 'Weak';
        case 1:
          return 'Weak';
        case 2:
          return 'Fair';
        case 3:
          return 'Good';
        case 4:
          return 'Strong'; 
        default: 
          return 'Weak'; 
      }
    }

    return (
      <div className={styles.PasswordStrengthMeter}>
        <br/> 
        <strong>Password strength: </strong> {label(strength)}
      </div>    
    )
  }

  validatePassword() {
    return (
      this.state.password.length  >= 8 && 
      this.state.password === this.state.password2 
    )
  }

  handleChange = async (event) => {

    this.setState({error: ''})

    switch(event.target.name) {
      case 'email':
        await this.setState({email: event.target.value})  
        break; 
      case 'pw':
        await this.setState({password: event.target.value}) 
        break; 
      case 'pw2': 
        await this.setState({password2: event.target.value}) 
        break; 
      default: 
       break;          
    }
    this.validatePassword() ? this.setState({validForm: true}) 
                            : this.setState({validForm: false}); 
  }

  handleSubmit(event) {
    event.preventDefault(); 

    const options = {
      method: 'POST', 
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      }), 
      headers: {
          'Access-Control-Request-Headers': 'POST', 
          'Content-Type': 'application/json'
      }
    }; 

    const expiry = {
      expires: 1/23 // A little less than an hour, things fail if the user still has an expired token
    }

    fetch(`${API_URL}/users/register`, options)
      .then(res => {
        res.json().then(body => {
          if(res.status === 201) {
              Cookies.set('email', body.user.email, expiry)
              Cookies.set('token', body.user.token, expiry)

              this.props.history.push("application");
          } else if (res.status === 409) {
              this.setState({error: 'Email already in use.'}); 
          } else if (res.status === 501) {
              // Failure in parsing the token or creating the user in firestore. 
              this.setState({error: '501 - Something went wrong on our end! Try it a minute?'}); 
          } else {
              this.setState({error: 'UNKNOWN STATUS CODE Uh-oh! Something went wrong. Try again?'}); 
          }
        })
      })
      .catch(err => {
          this.setState({error: 'Uh-oh! That didn\'t work. Try again?'}); 
      })
  }

  render () {

    if (this.state.moveOn) {
      return <Redirect to='/'/>
    }

    return (
      <div className={styles.loginPage}>
        <Helmet>
          <title>Register | cuHacking 2020</title>
        </Helmet>
        <Navbar /> 
        <div className={styles.container}> 
          <h2>Create your cuHacking account.</h2> 
          <p>Already have an account? <Link to="/login">Click here to login.</Link></p>
          <form className={styles.loginContainer} onSubmit={this.handleSubmit}> 
            <Input placeholder="email@example.com" name="email"     type="email"    label="Email"        value={this.state.email}      onChange={this.handleChange} required={true}/>
            <Password placeholder="Password" name="pw" label="Create a password. (Minimum 8 characters)" value={this.state.password}   onChange={this.handleChange} required={true}/>
            <Password placeholder="Confirm"  name="pw2"label="Confirm your password."                    value={this.state.password2}  onChange={this.handleChange} required={true}/>     
            {this.PasswordStrengthMeter()}
            <Button type="submit" label="Create Account" disabled={!this.state.validForm}/>      
            <p id="error-message"> {this.state.error} </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Create; 