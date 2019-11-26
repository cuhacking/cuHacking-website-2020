import React from 'react';
import 'index.css';
import {
    Input, 
    Button, 
    Navbar
} from 'components';
import styles from './create.module.css';

class Create extends React.Component {
  // Initial login page to the dashboard, ask for email/password by default. 
  // To think about - do we want to add Sign in with Google/Apple/etc...
  // This should also branch to a create account page if they don't already have one? 

  constructor(props) {
    super(props);
    this.state = {  email: '',          
                    password: '',     
                    password2: '',
                    validForm: false,
                    error: ''    
                }; 
    this.handleChange = this.handleChange.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this);
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

    fetch("https://cuhacking.com/api-dev/register", options)
      .then(res => {
        res.json()
        if(res.status === 201) {
            // token? 
            this.props.history.push("dashboard");
        } else if (res.status === 501) {
            // Failure in parsing the token or creating the user in firestore. 
            this.setState({error: '501 - Something went wrong on our end! Try it a minute?'}); 
        } else {
            this.setState({error: 'UNKNOWN STATUS CODE Uh-oh! Something went wrong. Try again?'}); 
        }
      })
      .catch(err => {
          this.setState({error: 'Uh-oh! That didn\'t work. Try again?'}); 
      })
  }

  render () {
    return (
      <div className={styles.loginPage}>
        <Navbar /> 
        <div className={styles.container}> 
          <h2>Create your cuHacking account.</h2> 
          <p>Already have an account? <a href="/login"> Click here to login.</a></p>
          <form className={styles.loginContainer} onSubmit={this.handleSubmit}> 
            <Input name="email"     type="email"    label="Email"                                     value={this.state.email}      onChange={this.handleChange} required={true}/>
            <Input name="pw"        type="password" label="Create a password. (Minimum 8 characters)" value={this.state.password}   onChange={this.handleChange} required={true}/>
            <Input name="pw2"       type="password" label="Verify your password."                     value={this.state.password2}  onChange={this.handleChange} required={true}/>     
            <Button type="submit" label="Create Account" disabled={!this.state.validForm}/>      
            <p id="error-message"> {this.state.error} </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Create; 