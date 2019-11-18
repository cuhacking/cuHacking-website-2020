import React from 'react';
import styles from './button.module.css';

class Button extends React.Component {
    render() {
        return (
            <button className={styles.button}>
                {this.props.label}
            </button>
        );  
    }
}

export default Button; 