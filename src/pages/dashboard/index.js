import React from 'react';
import styles from './index.module.css';
import {
  Input, 
  Button, 
} from 'components';

function SideNav() {
  return (
    <div className={styles.sideNav}>
      <ul>
        <li> logo </li>
        <li> start </li>
        <li> stuff </li> 
        <li> logo </li>3
      </ul>
    </div>
  )
}

function Start() {

  function handleNext(event) {
    event.preventDefault(); 
    console.log('switch to about you in a graceful way'); 
  }

  return (
    <div className={styles.applicationPage} id="start">
      <h1>cuHacking 2020</h1> 
      <h2>Application</h2> 
      <form className={styles.nextButton} onSubmit={handleNext}>
        <Button label="Start"/>
      </form>
    </div>
  )
}

function basicInfo() {


}

function aboutYou() {


}

function skillsFeats() {


}

function profile() {


}

function submit() {


}

export default () => (
  <div className={styles.dashboard}>
    <SideNav />
    <Start />
  </div>
);