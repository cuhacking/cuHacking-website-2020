import React, {useState} from 'react'
import {ReactComponent as Logo} from 'assets/largeLogo.svg'
import styles from './pageNav.module.css'

const PageButton = ({id, page, label}) => {
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
        if (!disabled) page.changeTo(id)
      }}
    >
      <div className={page.current === id ? styles.indicatorOn : styles.indicatorOff}/>
      <span className={styles.buttonLabel}>{label}</span>
    </button>
  )
}

const PageNav = () => {
  // Hoist this state once you use the component
  const [current, changeTo] = useState(0)
  const stage = 3 // This is the currently unfinished page (i.e. the furthest point in the application)

  const page = {current, changeTo, stage}

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo className={styles.logo}/>
      </div>
      <div className={styles.pageButtons}>
        <PageButton id={0} page={page} label='Basic Info'/>
        <PageButton id={1} page={page} label='About You'/>
        <PageButton id={2} page={page} label='Skills & Feats'/>
        <PageButton id={3} page={page} label='Profiles & Links'/>
        <PageButton id={4} page={page} label='Submit'/>
      </div>
      <button className={styles.logoutButton}>Logout</button>
    </div>
  )
}

export default PageNav
