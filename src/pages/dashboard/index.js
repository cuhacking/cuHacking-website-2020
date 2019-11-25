import React, {Component, useState} from 'react';
import ReactDOM from 'react-dom';
import styles from './dashboard.module.css';
import {
  Input,
  Button,
} from 'components';
import PageNav from './pageNav'
import Dropbox from './dropbox'

const APPLICATION_SCHEMA = {
  status: 'unsubmitted',
  basicInfo: {
    firstName: 'asdas',
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

const StartPage = ({nextPage}) => (
  <div className={styles.page} id={styles.start}>
    <h1 id={styles.superTitle}>cuHacking 2020</h1>
    <h2 id={styles.title}>Application</h2>
    <Button label='Start' action={nextPage}/>
  </div>
)

const BasicInfo = ({nextPage}) => {
  const [basicInfo, setInfo] = useState(APPLICATION_SCHEMA.basicInfo)

  // Updates the state for the part of the form which changed
  const onChange = event => setInfo({
    ...basicInfo,
    [event.target.name]: (event.target.value || APPLICATION_SCHEMA.basicInfo[event.target.name])
  })

  const genderOptions = [
    'Prefer not to answer',
    'Female',
    'Male',
    'Other (please specify)'
  ]

  const ethnicityOptions = [
    'Prefer not to answer',
    'Indigenous',
    'Asian',
    'Black / African American',
    'Hispanic',
    'White / Caucasian',
    'Mixed / Other (please specify)'
  ]

  return (
    <div className={styles.page}>
      <h1 className={styles.formHeading}>Basic Info</h1>
      <form onSubmit={nextPage} onChange={onChange} className={styles.formContainer}>
        <div className={styles.section}>
          <Input name="email" type="email" label="Email *" placeholder="example@email.com" required={true}/>
        </div>
        <div className={styles.section}>
          <Input name="firstName" type="text" label="First Name *" placeholder="John" required={true}/>
          <Input name="lastName"  type="text" label="Last Name *" placeholder="Smith" required={true}/>
        </div>
        <div className={styles.section}>
          <Input type="text" label="What do you identify as?" inputStyle='select' options={genderOptions}/>
          <Input type="text" label="If other, please specify." />
        </div>
        <div className={styles.section}>
          <Input type="text" label="What is your race/ethnicity?" inputStyle='select' options={ethnicityOptions}/>
          <Input type="text" label="If other, please specify." />
        </div>
        <div className={styles.section}>
          <Input name="emergencyPhone" type="tel" label="What is your phone number (for emergencies)? *" placeholder="(123) 456-7890" required={true}/>
        </div>
        <Button label="Next" type='submit'/>
      </form>
    </div>
  )
}

const AboutYou = ({nextPage}) => {
  const [personalInfo, setInfo] = useState(APPLICATION_SCHEMA.personalInfo)

  const onChange = event => setInfo({
    ...personalInfo,
    [event.target.name]: (event.target.value || APPLICATION_SCHEMA.basicInfo[event.target.name])
  })

  return (
    <div className={styles.page}>
      <h1 className={styles.formHeading}>About You</h1>
      <form onSubmit={nextPage} onChange={onChange}>
        <div className={styles.section}>
          <Input name="school" type="text" label="What school do you attend? *" required={true}/>
        </div>
        <div className={styles.section}>
          <Input name="major" type="text" label="What is your major?*" required={true}/>
          <Input name="minor" type="text" label="What is your minor (if applicable)?" required={true}/>
        </div>
        <div className={styles.section}>
          <Input name="degree" type="dropdown" label="What degree are you pursuing?"/>
          <Input name="expectedGraduation" type="dropdown" label="When do you expect to graduate?"/>
        </div>
        <div className={styles.section}>
          <Input name="cityOfOrigin" type="dropdown" label="Where will you be travelling from?"/>
          <Input name="tShirtSize" type="dropdown" label="What is your T-Shirt size? *"/>
        </div>
        <div className={styles.section}>
          <Input name="dietaryRestrictions" type="text" label="Please specify (in detail) any dietary restrctions you may have. *"/>
        </div>
        <div className={styles.section}>
          <p>If you are not travelling from Ottawa, are you interested in a shuttle? <br/> We'll be creating them based on demand.</p>
          <p name="wantsShuttle">checkbox here</p>
        </div>
        <Button label="Next" type='submit'/>
      </form>
    </div>
  )
}

function SkillsFeats(props) {

  function handleNext(event) {
    event.preventDefault();
    ReactDOM.render(<Profile onChange={props.onChange}/>, document.getElementById('form-container'));
  }

  return (
    <div className={styles.page} id={styles.basicInfo}>
      <h1 className={styles.formHeading}> Skills & Feats </h1>

      <form  onSubmit={handleNext} onChange={props.onChange}>

        <div className={styles.row}>
          <Input name="numHackathons" type="dropdown" label="How many hackathons have you been to?"/>
          <Input name="selfTitle" type="text" label="How would you describe yourself?"/>
        </div>

        <div className={styles.row}>
          <Input name="accomplishmentStatement" type="textarea" label="What are you looking to learn or accomplish at cuHacking 2020? (250 words max)"/>
        </div>

        <div className={styles.row}>
          <Input name="challengeStatement" type="textarea" label="Tell us about a time you faced a challenge, and how you overcame it. (500 words max)."/>
        </div>
        <Button label="Next" type='submit'/>
      </form>
    </div>
  )
}

function Profile(props) {

  function handleNext(event) {
    event.preventDefault();
    ReactDOM.render(<Submit/>, document.getElementById('form-container'));
  }

  return (
    <div className={styles.page} id={styles.basicInfo}>
      <h1 className={styles.formHeading}> Profile </h1>

      <form onSubmit={handleNext} onChange={props.onChange}>

        <div className={styles.row}>
          <Input name="github" type="text" label="Github"/>
          <Input name="linkedin" type="text" label="LinkedIn"/>
        </div>


        <div className={styles.row}>
          <Input name="website" type="text" label="Personal Website"/>
          <Input name="soughtPosition" type="dropdown" label="What type of positions are you looking for?"/>
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

        <Button label="Next" type='submit'/>
      </form>
    </div>
  )
}

function Submit(props) {

  function handleNext(event) {
    event.preventDefault();
    ReactDOM.render(<Status/>, document.getElementById('form-container'));
  }

  return (
    <div className={styles.page} id={styles.submit}>
      <h1 className={styles.formHeading}> Submit </h1>
      <form  onSubmit={handleNext}  onChange={props.onChange}>
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
          <Button label="Next"/>
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

// class Dashboard extends Component {
//   // Initial login page to the dashboard, ask for email/password by default.
//   // To think about - do we want to add Sign in with Google/Apple/etc...
//   // This should also branch to a create account page if they don't already have one?

//   constructor(props) {
//     super();
//     /* if (application === "inProgress") {
//       this.state = {application: that in progress application}
//     } else {
//       this.state = a new application object
//     }*/

    // this.state = {
    //   application: {
    //     status: 'unsubmitted',
    //     basicInfo: {
    //       firstName: '',
    //       lastName: '',
    //       gender: '',
    //       race: '',
    //       emergencyPhone: ''
    //     },
    //     personalInfo: {
    //       school: '',
    //       major: '',
    //       minor: '',
    //       degree: '',
    //       expectedGraduation: -1,
    //       cityOfOrigin: '',
    //       tShirtSize: '',
    //       dietaryRestrictions: '',
    //       wantsShuttle: false
    //     },
    //     skills: {
    //       numHackathons: -1,
    //       selfTitle: '',
    //       accomplishmentStatement: '',
    //       challengeStatement: ''
    //     },
    //     profile: {
    //       gitHub: '',
    //       linkedin: '',
    //       website: '',
    //       soughtPosition: '',
    //       resume: '// Can firebase store .pdf files?'
    //     },
    //     terms: {
    //       codeOfConduct: false,
    //       privacyPolicy: false,
    //       contestTerms: false
    //     }
    //   }
    // };

//   }

//   handleFormChange(event){
//     /*  Commenting this out to suppress console spam, BUT
//         event.target.name ->  the name of the field being changed,
//                               this is working great for text, will need to test for other
//                               types.
//         event.target.value -> the value of the field being changed.
//     Next step is to figure out how to apply these to the state.
//     console.log(event.target.name);
//     console.log(event.target.value);
//     */
//    console.log(event.target.name);
//   }

//   render () {
//     return (
//       <div className={styles.dashboard}>
//       <PageNav />
//       <div className={styles.formContainer} id="form-container">
//         <Start onChange={this.handleFormChange}/>
//       </div>
//     </div>
//     );
//   }

// }

const Application = () => {
  const [stage, changeStage] = useState(0)
  const [page, changePage] = useState(0)

  const [applicationForm, setApplication] = useState(APPLICATION_SCHEMA)

  const nextPage = pageNumber => formData => {
    // Move to the next page
    changeStage(pageNumber)
    changePage(pageNumber)

    // Save the application
    setApplication({...applicationForm, ...formData})
  }

  const pages = [
    <StartPage nextPage={nextPage(1)}/>,
    <BasicInfo nextPage={nextPage(2)}/>,
    <AboutYou nextPage={nextPage(3)}/>,
    <SkillsFeats nextPage={nextPage(4)}/>,
    <Profile nextPage={nextPage(5)}/>,
    <Submit/>
  ]

  return (
    <div className={styles.dashboard}>
      <PageNav
        currentPage={page}
        changePage={changePage}
        stage={stage}
      />
      {/* <div className={styles.formContainer} id="form-container"> */}
        {pages[page]}
      {/* </div> */}
    </div>
  )
}

export default Application;