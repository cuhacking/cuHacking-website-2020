import React from 'react';
import styles from './input.module.css';

class Input extends React.Component {

    
    render() {
        if (this.props.required) {
            return (
                <div className={styles.inputContainer}> 
                    <input className={styles.input} type={this.props.type} label={this.props.label} required>
                    </input>
                    <p className={styles.label}>{this.props.label}</p>
                </div> 
            );  
        } else {
            return (
                <div className={styles.inputContainer}> 
                    <input className={styles.input} type={this.props.type} label={this.props.label}>
                    </input>
                    <p className={styles.label}>{this.props.label}</p>
                </div> 
            );  
        }
    }
}

export default Input; 