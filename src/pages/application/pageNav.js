import React, {useState} from 'react'
import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {useMobile} from 'hooks'
import {ReactComponent as Logo} from 'assets/largeLogo.svg'
import styles from './pageNav.module.css'

// const API_URL = 'https://cuhacking.com/api'
// const API_URL = 'http://localhost:3000/api-dev'

const PageButton = ({id, page, label, closeOverlay}) => {
  if (id === 6) {
    return (
      <button
        className={styles.selectedButton}
        type='button'
      >
        <div className={styles.indicatorOn}/>
        <span className={styles.buttonLabel}>{label}</span>
      </button>
    )
  }

  const disabled = id > page.stage
  const active = id === page.current

  let style = ''

  if (disabled) {
    style = styles.disabledButton
  } else if (active) {
    style = styles.selectedButton
  } else {
    style = styles.pageButton
  }

  return (
    <button
      className={style}
      type='button'
      onClick={() => {
        if (!disabled) {
          page.changeTo(id)
          closeOverlay()
        }
      }}
    >
      <div className={page.current === id ? styles.indicatorOn : styles.indicatorOff}/>
      <span className={styles.buttonLabel}>{label}</span>
    </button>
  )
}

const PageNav = ({stage, currentPage, changePage, submitted}) => {
  const isMobile = useMobile()
  const history = useHistory()
  const [showOverlay, toggleOverlay] = useState(false)

  const page = {
    current: currentPage,
    changeTo: changePage,
    stage
  }

  const buttons = !submitted ? (
    <>
      <PageButton closeOverlay={() => toggleOverlay(false)} id={1} page={page} label='Basic Info'/>
      <PageButton closeOverlay={() => toggleOverlay(false)} id={2} page={page} label='About You'/>
      <PageButton closeOverlay={() => toggleOverlay(false)} id={3} page={page} label='Skills & Feats'/>
      <PageButton closeOverlay={() => toggleOverlay(false)} id={4} page={page} label='Profile'/>
      <PageButton closeOverlay={() => toggleOverlay(false)} id={5} page={page} label='Submit'/>
    </>
  ) : (
    <PageButton closeOverlay={() => toggleOverlay(false)} id={6} label='Application Status'/>
  )

  const logout = () => {
    // const token = Cookies.get('token')
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'Access-Control-Request-Headers': 'GET',
    //     'Authorization': `Bearer ${token}`
    //   }
    // };

    Cookies.remove('email')
    Cookies.remove('token')

    history.push('/')

    // FIXME: Use the sign out api to disable the token
    // fetch(`${API_URL}/users/signout`, options)
    //   .then(res => {
    //     Cookies.remove('email')
    //     Cookies.remove('token')

    //     history.push('/')
    //   })
    //   .catch(error => console.log('something went wrong when logging out!'))
  }

  const menu = (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo className={styles.logo}/>
      </div>
      <div className={styles.pageButtons}>
        {buttons}
      </div>
      <button className={styles.logoutButton} onClick={logout}>Logout</button>
    </div>
  )

  if (isMobile) {
    return (
      <>
        <FontAwesomeIcon
          className={styles.menuButton}
          icon={faBars}
          size='3x'
          onClick={() => toggleOverlay(true)}
        />
        <div
          style={{display: showOverlay ? 'flex' : 'none'}}
          className={styles.overlay}
        >
          {menu}
          <div
            style={{width: '100%', height: '100%'}}
            onClick={() => toggleOverlay(false)}
          />
        </div>
      </>
    )
  } else {
    return menu
  }
}

export default PageNav
