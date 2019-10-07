import React, {Component} from 'react';
import CuHeader from './cuHeader.js';
import feather2 from '../assets/images/feather2.svg'

class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: props.question, 
      answer: props.answer
    }
  }

  render() {
    return (
      <div className="faq-item">
        <div className="faq-question">
          <img id="feather2" src={feather2} alt=""/> 
          <h2>{this.state.question}</h2> 
        </div>
        <p> {this.state.answer}</p> 
      </div>
    )
  }
}

export default class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isIE: false || !!document.documentMode
    }
  }

  render() {
    return (
      <div className="slide FAQ" id="FAQ">
        <CuHeader text="Frequently Asked Questions"/> 
        
        <div className="faq-questions-wrapper">
          <div className="faq-left">
            <Question question="What is cuHacking?" answer="cuHacking is Ottawa's Largest Hackathon.."/>
            <Question question="This is a placeholder?" answer="How does the formatting look if I put another question here?"/>
          </div>
          <div className="faq-right">
            <Question question="Who are you?" answer="How does the length of the text affect the place that this goes?."/>
          </div>
        </div>
      </div> 
    )
  }
}
