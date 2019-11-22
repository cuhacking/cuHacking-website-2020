import React, {Component} from 'react';
import ReactDOM from 'react-dom';  
import styles from './dashboard.module.css';
import {ReactComponent as Logo} from 'assets/logo-animated.svg'
import {
  Input, 
  Button, 
} from 'components';

function SideNav() {
  function logout() {
    console.log('save application status and logout'); 
  }

  return (
    <div className={styles.sideNav}>
      <Logo className={styles.landingLogo}/>
      <div className={styles.sideNavList}>
        <ul>
          <li>Basic Info</li>
          <li>About You </li>
          <li>Skills & Feats</li> 
          <li>Profile</li>
          <li>Submit</li>
        </ul>
      </div>
      <div className={styles.sideNavLogout} onClick={logout}>
        <p>Logout</p>
      </div>
    </div>
  )
}

function Start() {

  function handleNext(event) {
    event.preventDefault();  
    ReactDOM.render(<BasicInfo/>, document.getElementById('form-container')); 
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

  var email = ''; 
  var basicInfo = {
    firstName:'',
    lastName:'',
    gender:'',
    race:'',
    emergencyPhone:''
  }
  
  function handleChange(event) {

    if (event.target.name === "email") {
      email = event.target.value; 
    } else if (event.target.name in basicInfo) { 
      basicInfo[event.target.name] = event.target.value; 
    }

  }

  function handleNext(event) {
    event.preventDefault(); 
    console.log(basicInfo);  
    ReactDOM.render(<AboutYou/>, document.getElementById('form-container')); 
  }

  return (
    <div className={styles.page} id={styles.basicInfo}>
      <h1 className={styles.formHeading}> Basic Info </h1> 

      <form onSubmit={handleNext} onChange={handleChange}> 

        <div className={styles.row}>
          <Input name="email" type="email" label="Email *" placeholder="example@email.com" required={true}/> 
        </div>

        <div className={styles.row}>
          <Input name="firstName" type="text" label="First Name *" placeholder="John" required={true}/>
          <Input name="lastName"  type="text" label="Last Name *" placeholder="Smith" required={true}/>          
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
          <Input name="emergencyPhone" type="text" label="What is your phone number (for emergencies)? *" placeholder="(123) 456-7890" required={true}/> 
        </div>

        <Button className={styles.nextButton} label="Next"/>
      </form> 
    </div>
  )
}


function AboutYou() {

  /* Information this form needs to pull: 

  */ 
  
  function handleNext(event) {
    event.preventDefault(); 
    ReactDOM.render(<SkillsFeats/>, document.getElementById('form-container')); 
  }

  return (
    <div className={styles.page} id={styles.basicInfo} >
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
  
  /* Information this form needs to pull: 

  */ 
  
  function handleNext(event) {
    event.preventDefault(); 
    ReactDOM.render(<Profile/>, document.getElementById('form-container')); 
  }

  return (
    <div className={styles.page} id={styles.basicInfo}>
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
  
  /* Information this form needs to pull: 

  */ 
  
  function handleNext(event) {
    event.preventDefault(); 
    ReactDOM.render(<Submit/>, document.getElementById('form-container')); 
  }

  return (
    <div className={styles.page} id={styles.basicInfo}>
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

function Submit() {
  
  /* Information this form needs to pull: 

  */ 
  
  function handleNext(event) {
    event.preventDefault(); 
    ReactDOM.render(<Status/>, document.getElementById('form-container')); 
  }

  return (
    <div className={styles.page} id={styles.submit}>
      <h1 className={styles.formHeading}> Submit </h1> 
      <form  onSubmit={handleNext}> 
          <div className={styles.row}> 
            <p> check </p>
            <p> I have read and agree to the <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"> MLH Code of Conduct.</a></p>
          </div> 
          <div className={styles.row}> 
            <p> check </p>
            <p> I have read and agree to the <a href="https://mlh.io/privacy"> MLH Privacy Policy.</a></p>
          </div> 
          <div className={styles.row}> 
            <p> check </p>
            <p> I have read and agree to the <a href="https://static.mlh.io/docs/mlh-member-event-guidelines.pdf"> MLH Contest Terms.</a></p>
          </div>
          <Button className={styles.nextButton} label="Submit"/> 
        </form> 
      </div>
  )
}

function Status() {
  return (
    <div className={styles.page} id={styles.start}>
      <p id={styles.cuHacking2020}> cuHacking 2020 </p>  
      <p id={styles.applicationTitle}> Application </p> 
      <p> We have received your application! Keep an eye on your email for updates! </p> 
    </div>
    )
}


class Dashboard extends Component {
  // Initial login page to the dashboard, ask for email/password by default. 
  // To think about - do we want to add Sign in with Google/Apple/etc...
  // This should also branch to a create account page if they don't already have one? 

  constructor(props) {
    super();
    /* if (application === "inProgress") {
      this.state = {application: that in progress application} 
    } else { 
      this.state = a new application object 
    }*/ 

    this.state = {
      application: {
        status: 'unsubmitted', 
        basicInfo: {
          firstName: '',
          lastName: '', 
          gender: '',
          race: '', 
          emergencyPhone: ''
        }, 
        personalInfo: {
          school: '',
          major: '', 
          minor: '',
          degree: '', 
          expectedGraduation: -1, 
          cityOfOrigin: '',
          tShirtSize: '',
          dietaryRestrictions: '',
          wantsShuttle: false
        },
        skills: {
          numHackathons: -1,
          selfTitle: '',
          accomplishmentStatement: '',
          challengeStatement: ''
        },
        profile: {
          gitHub: '',
          linkedin: '', 
          website: '',
          soughtPosition: '', 
          resume: '// Can firebase store .pdf files?' 
        },
        terms: {
          codeOfConduct: false,
          privacyPolicy: false,
          contestTerms: false
        }        
      }        
    }; 

  }

  handler(data){
    console.log("dashboard -> " + data); 
  }

  render () {
    return (
      <div className={styles.dashboard}>
      <SideNav />
      <div className={styles.formContainer} id="form-container">
        <BasicInfo handler={this.handler.bind(this)}/> 
      </div>
    </div>
    );
  }

}

export default Dashboard; 