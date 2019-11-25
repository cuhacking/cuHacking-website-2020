import React from 'react';
import styles from './input.module.css';

const Input = ({label, type, value, onChange}) => (
  <div className={styles.inputContainer}> 
    <input className={styles.input} type={type} label={label} value={value} onChange={onChange}/>
    <p className={styles.label}>{label}</p>
  </div> 
);

export default Input; 