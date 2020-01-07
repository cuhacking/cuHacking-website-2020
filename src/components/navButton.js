import React from 'react'
import styles from './navButton.module.css'

const NavButton = ({ label, link, onClick = () => {} }) => (
  <a className={styles.button} onClick={onClick} href={link}>
    {label}
  </a>
)

export default NavButton
