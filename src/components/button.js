import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from './button.module.css';

const Button = ({type, label, action, disabled, solid, link, to, ...props}) => {
  
  if (disabled) {
    return (
      <div className={solid ? styles.solidDisabled : styles.disabled}>
        {label.toUpperCase()}
      </div>
    )
  } else if (link) {
    return (
      <Link 
        to={to}
        disabled={disabled}
        className={solid ? styles.solidButton : styles.button}
        {...props}
      >
        {label.toUpperCase()}
      </Link>
    )
  } else {
    return (
      <button
        disabled={disabled}
        type={type || 'button'}
        className={solid ? styles.solidButton : styles.button}
        {...props}
      >
        {label.toUpperCase()}
      </button>
    )
  }
}

export default Button;
