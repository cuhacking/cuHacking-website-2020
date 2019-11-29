import React, {useState} from 'react';
import Cookies from 'js-cookie'
import 'index.css';
import {
    Input,
    Button,
    Navbar,
    Password
} from 'components';
import styles from './login.module.css';
import {useAuth} from 'hooks'
import { Redirect, Link } from 'react-router-dom';

// const API_URL = 'https://cuhacking.com/api'
const API_URL = 'http://localhost:3000/api-dev'

class LoginComponent extends React.Component {
  // Initial login page to the application, ask for email/password by default.
  // To think about - do we want to add Sign in with Google/Apple/etc...
  // This should also branch to a create account page if they don't already have one?

  constructor(props) {
    super(props);

    const token = Cookies.get('token')
    const email = Cookies.get('email')

    this.state = {  email: email || '',
                    password: '',
                    validForm: false,
                    error: '',
                    success: token ? true : false,
                    token: token || null
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
      default:
        break;
    }

    this.state.email.length !== 0 && this.state.password.length >= 8
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

    const expiry = {
      expires: 1/23 // A little less than a hour so nothing weird happens
    }

    fetch(`${API_URL}/users/signin`, options)
      .then(res => {
          if(res.status === 200) {
              res.json().then(body => {
                Cookies.set('email', this.state.email, expiry)
                Cookies.set('token', body.token, expiry)

                this.setState({
                  token: res.token,
                  success: true
                })  
              })
          } else if (res.status === 401) {
              // Incorrect password
              this.setState({error: 'Incorrect email or password.'});
          } else if (res.status === 403) {
              // Failure in parsing the token or creating the user in firestore.
              this.setState({error: 'Uh-oh! That didn\'t look right. Try again?'});
          } else {
              this.setState({error: 'I\'m not sure what happened. Try again?'});
          }
      })
      .catch(err => {
          this.setState({error: 'Uh-oh! That didn\'t work. Try again?'});
      })
  }

  render () {

    if(this.state.success) {
      return <Redirect to={{
        pathname:"/application",
        email: this.state.email,
        token: this.state.token
       }} />
    }

    return (
      <div className={styles.loginPage}>
        <Navbar />
        <div className={styles.container}>
          <h2>Welcome to cuHacking!</h2>
          <p>Don't have an account? <Link to="/register"> Sign up now.</Link></p>
          <form className={styles.loginContainer} onSubmit={this.handleSubmit} >
            <Input  type="email"    name="email"    label="Email"     value={this.state.email} onChange={this.handleChange} required={true}/>
            <Password  type="password" name="password" label="Password"  value={this.state.password} onChange={this.handleChange} required={true}/>
            {/* <p className={styles.forgotPassword}><a href="/forgot"> Forgot your password? </a></p> */}
            <Button type="submit"   label="Login" disabled={!this.state.validForm}/>
            <p className="error-message"> {this.state.error} </p>
          </form>
        </div>
      </div>
    );
  }

}

const Login = () => {
  const auth = useAuth()
  const [validForm, validateForm] = useState(false)
  const [creds, setCreds] = useState({
    email: '',
    password: ''
  })

  const onChange = event => {
    event.preventDefault()
    setCreds({...creds, [event.target.name]: event.target.value})

    validateForm(creds.email.length !== 0 && creds.password.length >= 8)
  }

  const onSubmit = async () => {
    const success = await auth.login(creds.email, creds.password)
    
    if (success) {
      console.log('SUCCESS')
      // return <Redirect to='/'/>
    }
  }

  // Immediately redirects to the application if the user exists
  // if (auth.user) {
  //   return <Redirect to='/application'/>
  // }

  return (
    <div className={styles.loginPage}>
      <Navbar />
      <div className={styles.container}>
        <h2>Welcome to cuHacking!</h2>
        <p>Don't have an account? <a href="/register"> Click here.</a></p>
        <form className={styles.loginContainer} onSubmit={onSubmit} onChange={onChange} >
          <Input type="email" name="email" label="Email" required={true}/>
          <Password type="password" name="password" label="Password" required={true}/>
          {/* <p className={styles.forgotPassword}><a href="/forgot"> Forgot your password? </a></p> */}
          <Button type="submit"   label="Login" disabled={!validForm}/>
          {/* <p className="error-message"> {this.state.error} </p> */}
        </form>
      </div>
    </div>
  )
}
export default LoginComponent;
