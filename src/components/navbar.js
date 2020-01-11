import React from 'react'
import styles from './navbar.module.css'
import { NavButton } from 'components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const navSlide = () => {
  const nav = document.querySelector('#navLinkList')
  console.log(styles.navActive)
  nav.classList.toggle(styles.navActive)
}

export default () => (
  /*
  <div id={styles.container}>
    <nav id={styles.navbar}> 
      <a href="/">
        <div id={styles.navLogo}/>
      </a>
      <div className={styles.linkSection}>
        <NavButton label='Home' link='#home'/> 
        <NavButton label='FAQ'  link='#faq'/> 
        <NavButton label='Sponsors' link='#sponsors'/> 
        <NavButton label='Login' link='https://my.cuhacking.com/login'/> 
      </div>
    </nav>
  </div>*/

  <nav id={styles.container}>
    <a href='/#' className={styles.logoContainer}>
      <div id={styles.navLogo} />
    </a>
    <ul className={styles.navLinks} id='navLinkList'>
      <li>
        <NavButton label='Home' link='#' onClick={navSlide} />
      </li>
      <li>
        <NavButton label='FAQ' link='#faq' onClick={navSlide} />
      </li>
      <li>
        <NavButton label='Sponsors' link='#sponsors' onClick={navSlide} />
      </li>
      <li>
        <NavButton label='Contact Us' link='#footer' onClick={navSlide} />
      </li>
      {/* <li>
        <NavButton label='Login' link='https://my.cuhacking.com/login' onClick={navSlide} />
      </li> */}
      <li>
        <NavButton label='Live' link='https://live.cuhacking.com/profile' onClick={navSlide} />
      </li>
    </ul>
    <FontAwesomeIcon icon={faBars} className={styles.burger} id='burger' onClick={navSlide} size='lg' />
  </nav>
)
