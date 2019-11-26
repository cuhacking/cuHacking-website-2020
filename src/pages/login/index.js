import React from 'react';
import 'index.css';
import {
    Input, 
    Button, 
    Navbar
} from 'components';
import styles from './login.module.css';

class Login extends React.Component {
  // Initial login page to the dashboard, ask for email/password by default. 
  // To think about - do we want to add Sign in with Google/Apple/etc...
  // This should also branch to a create account page if they don't already have one? 

  constructor(props) {
    super(props);
    this.state = {  email: '',          
                    password: '',
                    validForm: false, 
                    error: ''           
                }; 
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = async (event) => {

    switch(event.target.name) {
      case 'email':
        await this.setState({email: event.target.value})  
        break; 
      case 'password':
        await this.setState({password: event.target.value}) 
        break; 
    }

    this.state.email.length !== 0 && this.state.password.length >= 8
      ? this.setState({validForm: true}) 
      : this.setState({validForm: false}); 

  }

  handleSubmit(event) {

    event.preventDefault(); 
    const post = {
      email: this.state.email,
      password: this.state.password
    }

    const options = {
      method: 'POST', 
      body: JSON.stringify(post), 
      headers: {
          'Access-Control-Request-Headers': 'POST', 
          'Content-Type': 'application/json'
      }
    }; 

    fetch("https://cuhacking.com/api/mailinglist/signin", options)
      .then(res => {
          res.json()
          if(res.status === 200) {
              // token? 
              this.props.history.push("dashboard");
          } else if (res.status === 403) {
              // Failure in parsing the token or creating the user in firestore. 
              this.setState({error: '403 Uh-oh! That didn\'t look right. Try again?'}); 
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
        <div className={styles.loginContainer}> 
          <h2>Welcome to cuHacking!</h2> 
          <form onSubmit={this.handleSubmit} > 
            <Input  type="email"    name="email"    label="Email"     value={this.state.email} onChange={this.handleChange} required={true}/>
            <Input  type="password" name="password" label="Password"  value={this.state.password} onChange={this.handleChange} required={true}/>
            <p className="error-message"> {this.state.error} </p>
            <Button type="submit"   label="Login" disabled={!this.state.validForm}/> 
          </form>
        </div>
      </div>
    );
  }

}

export default Login; 