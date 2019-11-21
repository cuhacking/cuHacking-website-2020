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
    <div className={styles.page} id={styles.start}>
      <p id={styles.cuHacking2020}> cuHacking 2020 </p>  
      <p id={styles.applicationTitle}> Application </p> 
      <form className={styles.nextButton} onSubmit={handleNext}>
        <Button label="Start"/>
      </form>
    </div>
  )
}

function BasicInfo() {
  function handleNext(event) {
    event.preventDefault(); 
    console.log('switch to something else in a graceful way'); 
  }

  return (
    <div className={styles.page} id={styles.basicInfo} id="start">
      <h1 className={styles.formHeading}> Basic Info </h1> 

      <form  onSubmit={handleNext}> 

        <div className={styles.row}>
          <Input type="email" label="Email *" required/> 
        </div>

        <div className={styles.row}>
          <Input type="text" label="First Name *" required/>
          <Input type="text" label="Last Name *" required/>          
        </div>

        <div className={styles.row}>
          <div className={styles.column, styles.colItem}>
            <Input type="text" label="What do you identify as?"/> 
            <Input type="text" label="If other, please specify." />
          </div>
          <div className={styles.column, styles.colItem}>
            <Input type="text" label="What is your race/ethnicity??"/> 
            <Input type="text" label="If other, please specify." />
          </div>   
        </div>

        <div className={styles.row}>
          <Input type="number" label="What is your phone number (for emergencies)? *" required/> 
        </div>

        <Button className={styles.nextButton} label="Next"/>
      </form> 
    </div>
  )

}

function AboutYou() {
  function handleNext(event) {
    event.preventDefault(); 
    console.log('switch to something else in a graceful way'); 
  }

  return (
    <div className={styles.page} id={styles.basicInfo} id="about">
      <h1 className={styles.formHeading}> About You </h1> 

      <form  onSubmit={handleNext}> 

        <div className={styles.row}>
          <Input type="text" label="What school do you attend? *" required/> 
        </div>

        <div className={styles.row}>
          <Input type="text" label="What is your major?*" required/>
          <Input type="text" label="What is your minor (if applicable)?" required/>          
        </div>

        <div className={styles.row}>
          <Input type="dropdown" label="What degree are you pursuing?"/>
          <Input type="dropdown" label="When do you expect to graduate?"/>
        </div> 

        <div className={styles.row}>
          <Input type="dropdown" label="Where will you be travelling from?"/>
          <Input type="dropdown" label="What's your T-Shirt size? *"/>
        </div> 

        <div className={styles.row}>
          <Input type="text" label="Please specify (in detail) any dietary restrctions you have. *" required/> 
        </div>

        <div className={styles.row}>
          <p>If you are not travelling from Ottawa, are you interested in a shuttle? <br/> We'll be creating them based on demand.</p>
          <p>checkbox here</p>
        </div>

        <Button className={styles.nextButton} label="Next"/> 
      </form> 
    </div>
  )


}

function SkillsFeats() {
  function handleNext(event) {
    event.preventDefault(); 
    console.log('switch to something else in a graceful way'); 
  }

  return (
    <div className={styles.page} id={styles.basicInfo} id="skills">
      <h1 className={styles.formHeading}> Skills & Feats </h1> 

      <form  onSubmit={handleNext}> 

        <div className={styles.row}>
          <Input type="dropdown" label="How many hackathons have you been to?"/>
          <Input type="text" label="How would you describe yourself?"/> 
        </div> 

        <div className={styles.row}>
          <Input type="textarea" label="What are you looking to learn or accomplish at cuHacking 2020? (250 words max)"/> 
        </div>

        <div className={styles.row}>
          <Input type="textarea" label="Tell us about a time you faced a challenge, and how you overcame it. (500 words max)."/> 
        </div>

        <Button className={styles.nextButton} label="Next"/> 
      </form> 
    </div>
  )


}

function Profile() {
  function handleNext(event) {
    event.preventDefault(); 
    console.log('switch to something else in a graceful way'); 
  }

  return (
    <div className={styles.page} id={styles.basicInfo} id="skills">
      <h1 className={styles.formHeading}> Profile </h1> 

      <form  onSubmit={handleNext}> 

        <div className={styles.row}>
          <Input type="text" label="Github"/>
          <Input type="text" label="LinkedIn"/> 
        </div> 


        <div className={styles.row}>
          <Input type="text" label="Personal Website"/>
          <Input type="dropdown" label="What type of positions are you looking for?"/> 
        </div> 

        <div className={styles.column}>
          <div id={styles.resume}>
             <p> lil icon </p>
             <p> Resume </p>
          </div> 
          <div className={styles.row}>
            <p> <i> By uploading your resume, you agree to having it distributed to our sponsors attending the event.</i> </p>
            <p> a check box </p> 
          </div>
        </div>

        <Button className={styles.nextButton} label="Next"/> 
      </form> 
    </div>
  )
}

function Submit() {{
  function handleNext(event) {
    event.preventDefault(); 
    console.log('switch to something else in a graceful way'); 
  }

  return (
    <div className={styles.page} id={styles.basicInfo} id="skills">
      <h1 className={styles.formHeading}> Profile </h1> 

      <form  onSubmit={handleNext}> 

        <div className={styles.row}>
          <Input type="text" label="Github"/>
          <Input type="text" label="LinkedIn"/> 
        </div> 


        <div className={styles.row}>
          <Input type="text" label="Personal Website"/>
          <Input type="dropdown" label="What type of positions are you looking for?"/> 
        </div> 

        <div className={styles.column}>
          <div id={styles.resume}>
              <p> lil icon </p>
              <p> Resume </p>
          </div> 
          <p> <i> By uploading your resume, you agree to having it distributed to our sponsors attending the event.</i> </p>
        </div>

          <Button className={styles.nextButton} label="Next"/> 
        </form> 
      </div>
    )
  }

}

export default () => (
  <div className={styles.dashboard}>
    <SideNav />
    <div className={styles.formContainer}>
      <Submit /> 
    </div>
  </div>
);