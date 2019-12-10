import React from 'react'
import { Helmet } from 'react-helmet'
import 'index.css'
import { Navbar, Button } from 'components'
import styles from './index.module.css'

class Forgot extends React.Component {
  render() {
    return (
      <div className={styles.invalidPage}>
        <Helmet>
          <title>Page not found</title>
        </Helmet>
        <Navbar />
        <div className={styles.container}>
          <p className={styles.heading}> 404 </p>
          <p> Uh-oh, looks like you've wandered a little too far.</p>
          <Button link to='/' label='Return to Safety' />
        </div>
      </div>
    )
  }
}

export default Forgot
