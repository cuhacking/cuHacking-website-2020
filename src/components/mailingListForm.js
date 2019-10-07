import React, {Component} from 'react';
import './mailingListForm.css'

const API_URL = "https://cuhacking.com/api/"; 


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
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify(post), 
            headers: {
                'Access-Control-Request-Method': 'POST', 
                'Authorization': 'Bearer test',
                'Content-Type': 'application/json'
            }
        }; 

        fetch(API_URL, options)
            .then(res => res.json())    
            .then(res => {
                if(res.status === "success") {
                    this.setState({status: 'after'}); 
                } else {
                    this.setState({loading: false, status: 'before'}); 
                }
            })
            .catch(err => {
                this.setState({error: 'Uh-oh! That didn\'t work. Try again?', value: '', valid: false, loading: false}); 
            })
    }

    buttonText() {
       // return this.state.loading ? "Working on it..." : "Submit"; 
        return ">"; 
    }

    text() {
        return this.state.status === 'before' ? <p className="bodyText" id="mailingListText"> Be the first to know when applications open! Join our mailing list! </p>
                                              : <p className="bodyText" id="mailingListText"> Thanks! We'll keep you in the loop!</p> 
    }

    render() {
        return (
            <div id="mailingListForm" onClick={this.openField}>
                {this.text()}
                <form className={`emailForm ${this.state.status}`} onSubmit={this.handleSubmit}>
                    <input className="emailField"    disabled={this.state.loading || this.state.status === "after"} type="text" placeholder="Enter your email address.." value={this.state.value} onChange={this.handleChange} />
                    <input className="submitButton"  disabled={this.state.loading || this.state.status === "after" || !this.state.valid} type="submit" value={this.buttonText()} />
                </form>
            </div>
        );  
    } 


}

