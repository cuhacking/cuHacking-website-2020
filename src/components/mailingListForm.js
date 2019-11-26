import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

import styles from './mailingListForm.module.css';

const API_URL = "https://cuhacking.com/api/mailinglist/subscribe"; 

export default class MailingListForm extends Component {

    constructor(props) {
        super(props);
        this.state = {  value: '',          // The value of the email form (email@email.com)
                        status: 'before',   // Before: Before a submission, After: after a submission
                        loading: false,     // false: not waiting for response, true: waiting for response
                        valid: false,       // email in value is a valid email
                        error: ''           // Error message displayed below email form.        
                    }; 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    emailValidator(email) {
        // Rudimentary and borrowed from the API, temporary. 
        return email.includes("@") && email.includes(".");
    }

    handleChange(event) {
        this.setState({value: event.target.value, error: ''}); 
        this.emailValidator(this.state.value) ? this.setState({valid:true}) : this.setState({valid:false})
    }

    handleSubmit(event) {
        
        this.setState({loading: true}); 
        this.render(); 

        event.preventDefault();
        
        const post = {
            email: this.state.value
        }

        const options = {
            method: 'POST', 
            body: JSON.stringify(post), 
            headers: {
                'Access-Control-Request-Headers': 'POST', 
                'Content-Type': 'application/json'
            }
        }; 

        fetch(API_URL, options)
            .then(res => {
                res.json()
                if(res.status === 201) {
                    // The email was added successfully. 
                    this.setState({status: 'after'}); 
                } else if (res.status === 400) {
                    // Server said the email was invalid. 
                    this.setState({error: 'That email didn\'t look right! Try again?', loading: false, status: 'before'}); 
                } else if (res.status === 500) {
                    this.setState({error: 'Something went wrong on our end! Try it again!', loading: false, status: 'before'});
                } else {
                    this.setState({error: 'Uh-oh! That didn\'t work. Try again?', value: '', valid: false, loading: false}); 
                }
            })
            .catch(err => {
                this.setState({error: 'Uh-oh! That didn\'t work. Try again?', value: '', valid: false, loading: false}); 
            })
    }


    text() {
        return this.state.status === 'before' ? <p className={styles.dialogText} id={styles.mailingListText}> Join our mailing list! Be the first to know when applications are sent out!</p>
                                              : <p className={styles.dialogText} id={styles.mailingListText}> Thanks! We'll keep you in the loop!</p> 
    }

    render() {
       return (
        <div id={styles.mailingListForm} onClick={this.openField}>
            {this.text()}
            <form className={`${styles.emailForm} ${this.state.status === 'after' ? styles.after : ''}`} onSubmit={this.handleSubmit}>
                <input className={styles.emailField}     disabled={this.state.loading || this.state.status === "after"} type="text" placeholder="Enter your email address.." value={this.state.value} onChange={this.handleChange} />
                <button className={styles.submitButton}  disabled={this.state.loading || this.state.status === "after" || !this.state.valid} type="submit"> <FontAwesomeIcon icon={faArrowRight}/></button>
            </form>
            <p className={styles.errorMessage}>&nbsp;{this.state.error}</p>
        </div>
    );  
    } 
}
