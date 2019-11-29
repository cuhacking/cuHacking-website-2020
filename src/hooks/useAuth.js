import React, { useState, useEffect, useContext, createContext } from 'react'
import Cookies from 'js-cookie'

// const API_URL = 'https://cuhacking.com/api'
const API_URL = 'http://localhost:3000/api-dev'

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null)

  const login = async (email, password) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {
        'Access-Control-Request-Headers': 'POST',
        'Content-Type': 'application/json'
      }
    }

    try {
      return fetch(`${API_URL}/users/signin`, options).then(response => {
        response.json()

        switch (response.status) {
          case 200:
            Cookies.set('email', email)
            Cookies.set('token', response.token)
  
            setUser({
              email,
              token: response.token
            })
            return true
          default:
            console.log(`Sign in failure, status: ${response.status}`)
            setUser(null)
            return false
        }
      })
    } catch (error) {
      console.log('Uh oh in Sign up', error)
      console.log('URL: ', `${API_URL}/users/signin`)
      setUser(null)
      return false
    }
  }

  const register = async (email, password) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {
        'Access-Control-Request-Headers': 'POST',
        'Content-Type': 'application/json'
      }
    }

    try {
      const response = (await fetch(`${API_URL}/users/register`, options)).json()

      switch (response.status) {
        case 201:
          // Automatically authenticate the user
          await login(email, password)
          break
        default:
          console.log(`Registration failure, status: ${response.status}`)
          setUser(null)
      }
    } catch (error) {
      console.log('Uh oh in Registration', error)
      setUser(null)
    }
  }

  const signout = () => {

  }

  const sendPasswordResetEmail = email => {

  }

  /* The first time the component is rendered, it tries to
   * fetch the auth data from a source, like a cookie or
   * the localStorage.
   */
  useEffect(() => {
    const token = Cookies.get('token')
    const email = Cookies.get('email')
    if (token) {
      setUser({email, token});
    }
  }, []);

  // Return the user object and auth methods
  return {
    user,
    login,
    register,
    signout,
    sendPasswordResetEmail
  }
}

const authContext = createContext()

export const ProvideAuth = ({children}) => {
  const auth = useProvideAuth()

  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => useContext(authContext)