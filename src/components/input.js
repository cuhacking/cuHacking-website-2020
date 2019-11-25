import React from 'react';
import styles from './input.module.css';

const Input = ({label, inputStyle, ...props}) => {
  switch (inputStyle) {
    case 'long':
      return (
        <div className={styles.inputContainer}>
          <textarea className={styles.longInput} rows={4} label={label} {...props} />
          <p className={styles.label}>{label}</p>
        </div>
      )
    default:
      return (
        <div className={styles.inputContainer}>
          <input className={styles.input} label={label} {...props}/>
          <p className={styles.label}>{label}</p>
        </div>
      )
  }
};

export default Input;
