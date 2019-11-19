import React from 'react';
import 'index.css';
import {
    Input, 
    Button, 
    Navbar
} from 'components';
import styles from './index.module.css';

class Login extends React.Component {
  // Initial login page to the dashboard, ask for email/password by default. 
  // To think about - do we want to add Sign in with Google/Apple/etc...
  // This should also branch to a create account page if they don't already have one? 

  constructor(props) {
    super(props);
    this.state = {  email: '',          
                    password: 'before',          
                }; 
    this.handleSubmit = this.handleSubmit.bind(this);
}

  handleSubmit(event) {
    event.preventDefault(); 
    this.props.history.push("dashboard");
    /* this is where we handle the all the logic for attempting (and maybe succeeding) to sign in */ 
    // for now, we're going to say if the email is 'email@email.com' and the password is p then 
    // succeed - have to figure this out on the APi after. 
  }

  render () {
    return (
      <div className={styles.loginPage}>
        <Navbar /> 
        <div className={styles.loginContainer}> 
          <h2>Welcome to cuHacking!</h2> 
          <form onSubmit={this.handleSubmit} > 
            <Input type="email" label="Email" />
            <Input type="password" label="Password" />
            <Button type="submit" label="Login"/> 
          </form>
        </div>
      </div>
    );
  }

}

export default Login; 