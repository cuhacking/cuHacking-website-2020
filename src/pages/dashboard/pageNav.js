import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {useMobile} from 'hooks'
import {ReactComponent as Logo} from 'assets/largeLogo.svg'
import styles from './pageNav.module.css'

const PageButton = ({id, page, label, closeOverlay}) => {
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

const PageNav = () => {
  const isMobile = useMobile()
  const [showOverlay, toggleOverlay] = useState(false)

  // Hoist this state once you use the component
  const [current, changeTo] = useState(0)
  const stage = 3 // This is the currently unfinished page (i.e. the furthest point in the application)

  const page = {current, changeTo, stage}

  const menu = (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo className={styles.logo}/>
      </div>
      <div className={styles.pageButtons}>
        <PageButton closeOverlay={() => toggleOverlay(false)} id={0} page={page} label='Basic Info'/>
        <PageButton closeOverlay={() => toggleOverlay(false)} id={1} page={page} label='About You'/>
        <PageButton closeOverlay={() => toggleOverlay(false)} id={2} page={page} label='Skills & Feats'/>
        <PageButton closeOverlay={() => toggleOverlay(false)} id={3} page={page} label='Profiles & Links'/>
        <PageButton closeOverlay={() => toggleOverlay(false)} id={4} page={page} label='Submit'/>
      </div>
      <button className={styles.logoutButton}>Logout</button>
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
