import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import styles from './input.module.css';

const Input = ({label, inputStyle, options = [], ...props}) => {
  switch (inputStyle) {
    case 'checkbox':
      return (
        <label className={styles.checkInput}>
          <input
            type="checkbox"
            {...props}
          />
          <i>{label}</i>
        </label>
      )
    case 'select':
      return (
        <div className={styles.inputContainer}>
          <div className={styles.selectContainer}>
            <select className={styles.selectInput} label={label} {...props}>
              {options.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
            <FontAwesomeIcon className={styles.selectIcon} icon={faChevronDown} size='lg'/>
          </div>
          <p className={styles.label}>{label}</p>
        </div>
      )
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
