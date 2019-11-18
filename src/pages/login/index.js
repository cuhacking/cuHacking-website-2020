import React from 'react';
import 'index.css';
import {
    Input, 
    Button, 
    Navbar
} from 'components';
import styles from './index.module.css';

function Login() {
  // Initial login page to the dashboard, ask for email/password by default. 
  // To think about - do we want to add Sign in with Google/Apple/etc...
  // This should also branch to a create account page if they don't already have one? 

  function handleSubmit(event) {
    event.preventDefault(); 
    console.log(event);      
  }

  return (
    <div className={styles.loginPage}>
      <Navbar /> 
      <div className={styles.loginContainer}> 
        <h2>Welcome to cuHacking!</h2> 
        <form onSubmit={handleSubmit} > 
          <Input type="email" label="Email"/>
          <Input type="password" label="Password"/>
          <Button type="submit" label="Login"/> 
        </form>
      </div>
    </div>
  );

}

export default () => (
  <>
      <Login /> 
  </>
);