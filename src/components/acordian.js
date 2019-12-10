import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import styles from './acordian.module.css'

export default ({ title, children }) => {
  const [isOpen, toggle] = useState(false)

  return (
    <div className={styles.container} onClick={() => toggle(!isOpen)}>
      <div className={styles.titleSpace}>
        <h4 className={styles.title}>{title}</h4>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} size='lg' />
      </div>
      <div className={isOpen ? styles.contentOpen : styles.contentClosed}>{isOpen ? children : <div />}</div>
    </div>
  )
}
