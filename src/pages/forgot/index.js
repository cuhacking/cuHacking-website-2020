import React from 'react';
import 'index.css';
import {
    Input, 
    Button, 
    Navbar
} from 'components';
import styles from './forgot.module.css';

class Forgot extends React.Component {
  // Initial login page to the application, ask for email/password by default. 
  // To think about - do we want to add Sign in with Google/Apple/etc...
  // This should also branch to a create account page if they don't already have one? 

  constructor(props) {
    super(props);
    this.state = {  email: '',          
                    password: '',
                    error: '',
                    validForm: false, 
                    visibleForm: true        
                }; 
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = async (event) => {
    await this.setState({email: event.target.value})  
    this.state.email.length !== 0 
      ? this.setState({validForm: true}) 
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

    fetch("https://cuhacking.com/api-dev/resetpassword", options)
      .then(res => {
          res.json()
          if(res.status === 200) {
            this.setState({visibleForm: false}); 
          } else if (res.status === 500) {
              this.setState({error: 'Uh-oh! We had a problem on our end, please try again later.'}); 
          } else {
              this.setState({error: 'Uh-oh! Something went wrong. Try again?'}); 
          }
      })
      .catch(err => {
          this.setState({error: 'Uh-oh! That didn\'t work. Try again?'}); 
      })
  }

  text() { 
    return this.state.visibleForm ? <p> Type your email address and we'll send you password reset link!</p>
                                  : <>
                                      <p> Check your inbox! We just sent a password reset link to you!</p> 
                                      <br/> 
                                      <a href="/"> Click here to return to the homepage! </a>
                                    </>
  }

  render () {
    return (
      <div className={styles.forgotPage}>
        <Navbar /> 
        <div className={styles.container}> 
          <h2>Forgot your password?</h2> 
          {this.text()}
          <form className={this.state.visibleForm? styles.formVisible : styles.formInvisible} onSubmit={this.handleSubmit}> 
            <Input  type="email"    name="email"    label="Email"     value={this.state.email} onChange={this.handleChange} required={true}/>
            <Button type="submit"   label="Reset Password" disabled={!this.state.validForm}/> 
          </form>
        </div>
      </div>
    );
  }

}

export default Forgot; 