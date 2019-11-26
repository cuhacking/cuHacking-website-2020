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
    firstName: '',
    lastName: '',
    gender: 'Prefer not to answer',
    otherGender: '',
    ethnicity: 'Prefer not to answer',
    otherEthnicity: '',
    emergencyPhone: ''
  },
  personalInfo: {
    school: '',
    major: '',
    minor: '',
    degree: '',
    expectedGraduation: 2019,
    cityOfOrigin: '',
    tShirtSize: '',
    dietaryRestrictions: '',
    wantsShuttle: false
  },
  skills: {
    numHackathons: 0,
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
    <Button label='Start' action={() => nextPage()}/>
  </div>
)

const BasicInfo = ({initialState, nextPage}) => {
  const [basicInfo, setInfo] = useState(initialState)

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
      <form onSubmit={() => nextPage({basicInfo})} onChange={onChange} className={styles.formContainer}>
        {/* <div className={styles.section}>
          <Input name="email" type="email" label="Email *" placeholder="example@email.com" required={true}/>
        </div> */}
        <div className={styles.section}>
          <Input value={basicInfo.firstName} name="firstName" type="text" label="First Name *" placeholder="John" required={true}/>
          <Input value={basicInfo.lastName} name="lastName"  type="text" label="Last Name *" placeholder="Smith" required={true}/>
        </div>
        <div className={styles.section}>
          <Input value={basicInfo.gender} name='gender' type="text" label="What do you identify as?" inputStyle='select' options={genderOptions}/>
          <Input value={basicInfo.otherGender} name='otherGender' type="text" label="If other, please specify." />
        </div>
        <div className={styles.section}>
          <Input value={basicInfo.ethnicity} name='ethnicity' type="text" label="What is your race/ethnicity?" inputStyle='select' options={ethnicityOptions}/>
          <Input value={basicInfo.otherEthnicity} name='otherEthnicity' type="text" label="If other, please specify." />
        </div>
        <div className={styles.section}>
          <Input value={basicInfo.emergencyPhone} name="emergencyPhone" type="tel" label="What is your phone number (for emergencies)? *" placeholder="(123) 456-7890" required={true}/>
        </div>
        <Button label="Next" type='submit'/>
      </form>
    </div>
  )
}

const AboutYou = ({initialState, nextPage}) => {
  const [personalInfo, setInfo] = useState(initialState)

  const onChange = ({target}) => setInfo({
    ...personalInfo,
    [target.name]:
      ((target.type === 'checkbox' ? target.checked : target.value) || APPLICATION_SCHEMA.personalInfo[target.name])
  })

  const schoolOptions = [
    1, 2, 3, 4
  ]

  const degreeOptions = [
    'Other',
    'High School Diploma',
    'College Diploma',
    'Bachelor',
    'Master',
    'Doctorate'
  ]

  const graduationOptions = [
    2019,
    2020,
    2021,
    2022,
    2023,
    2024,
    2025
  ]

  const tShirtSizes = [
    'Small',
    'Medium',
    'Large',
    'Extra Large'
  ]

  console.log(personalInfo.wantsShuttle)
  return (
    <div className={styles.page}>
      <h1 className={styles.formHeading}>About You</h1>
      <form onSubmit={() => nextPage({personalInfo})} onChange={onChange} className={styles.formContainer}>
        <div className={styles.section}>
          <Input value={personalInfo.school} name="school" type="text" label="What school do you attend? *" required={true} inputStyle='select' options={schoolOptions}/>
        </div>
        <div className={styles.section}>
          <Input placeholder='Computer Science' value={personalInfo.major} name="major" type="text" label="What is your major?*" required={true}/>
          <Input placeholder='Psychology' value={personalInfo.minor} name="minor" type="text" label="What is your minor (if applicable)?" required={true}/>
        </div>
        <div className={styles.section}>
          <Input value={personalInfo.degree} name="degree" label="What degree are you pursuing?" inputStyle='select' options={degreeOptions} required/>
          <Input value={personalInfo.expectedGraduation} name="expectedGraduation" label="When do you expect to graduate?" inputStyle='select' options={graduationOptions} required/>
        </div>
        <div className={styles.section}>
          <Input value={personalInfo.tShirtSize} name="tShirtSize" label="What is your T-Shirt size (unisex)? *" required inputStyle='select' options={tShirtSizes}/>
        </div>
        <div className={styles.section}>
          <Input placeholder="e.x. I'm vegeterian" value={personalInfo.dietaryRestrictions} name="dietaryRestrictions" type="text" label="Please specify (in detail) any dietary restrictions you may have."/>
        </div>
        <div className={styles.section}>
          <Input placeholder='Ottawa, Ontario' value={personalInfo.cityOfOrigin} name="cityOfOrigin" label="Where will you be travelling from? * " required/>
        </div>
        <div className={styles.section} style={{paddingTop: 10}}>
          <label>
            <input
              name="wantsShuttle"
              type="checkbox"
              checked={personalInfo.wantsShuttle}
              onChange={onChange}
              // className={styles.checkbox}
            />
            <i>I'm interested in a shuttle coming to my city (based on demand).</i>
          </label>
          {/* <p>If you are not travelling from Ottawa, are you interested in a shuttle? <br/> We'll be creating them based on demand.</p> */}
        </div>
        <Button label="Next" type='submit'/>
      </form>
    </div>
  )
}

const Skills = ({initialState, nextPage}) => {
  const [skills, setInfo] = useState(initialState)

  // Updates the state for the part of the form which changed
  const onChange = event => setInfo({
    ...skills,
    [event.target.name]: (event.target.value || APPLICATION_SCHEMA.skills[event.target.name])
  })

  return (
    <div className={styles.page}>
      <h1 className={styles.formHeading}>Skills & Feats</h1>
      <form onSubmit={() => nextPage({skills})} onChange={onChange} className={styles.formContainer}>
        <div className={styles.section}>
          <Input value={skills.numHackathons} name="numHackathons" type="number" min={0} label="How many hackathons have you been to?"/>
          <Input value={skills.selfTitle} placeholder='Frontend Developer (React)' name="selfTitle" type="text" label="How would you describe yourself?"/>
        </div>
        <div className={styles.section}>
          <Input value={skills.accomplishmentStatement} name="accomplishmentStatement" inputStyle='long' label="What are you looking to learn or accomplish at cuHacking 2020? (~250 words)"/>
        </div>
        <div className={styles.section}>
          <Input value={skills.challengeStatement} name="challengeStatement" inputStyle='long' label="Tell us about a time you faced a challenge, and how you overcame it. (500 words max)."/>
        </div>
        <Button label="Next" type='submit'/>
      </form>
    </div>
  )
}

const Profile = ({initialState, nextPage, resume, setResume}) => {
  const [profile, setInfo] = useState(initialState)

  // Updates the state for the part of the form which changed
  const onChange = event => setInfo({
    ...profile,
    [event.target.name]: (event.target.value || APPLICATION_SCHEMA.profile[event.target.name])
  })

  const employmentTypes = [
    'Internship (Co-op)',
    'Full time',
    'Part time'
  ]

  return (
    <div className={styles.page}>
      <h1 className={styles.formHeading}>Profile</h1>
      <form onSubmit={() => nextPage({profile})} onChange={onChange} className={styles.formContainer}>
        <div className={styles.section}>
          <Input value={profile.github} name="github" type="text" label="Github"/>
          <Input value={profile.linkedin} name="linkedin" type="text" label="LinkedIn"/>
        </div>
        <div className={styles.section}>
          <Input value={profile.website} name="website" type="text" label="Website"/>
          <Input value={profile.soughtPosition} name="soughtPosition" label="What type of positions are you looking for?" inputStyle='select' options={employmentTypes}/>
        </div>
        <div className={styles.section}>
          <Dropbox resume={resume} setResume={setResume}/>
        </div>
        <div className={styles.section}>
          <p><i>By uploading your resume, you agree to having it distributed to our sponsors attending the event.</i></p>
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
      <form onSubmit={handleNext} onChange={props.onChange} className={styles.formContainer}>
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

const Application = () => {
  const [stage, changeStage] = useState(0)
  const [page, changePage] = useState(0)

  const [applicationForm, setApplication] = useState(APPLICATION_SCHEMA)
  const [resume, setResume] = useState()

  const nextPage = pageNumber => formData => {
    // Move to the next page
    changeStage(pageNumber)
    changePage(pageNumber)

    // Save the application
    if (formData) {
      setApplication({...applicationForm, ...formData})
    }
  }

  const pages = [
    <StartPage nextPage={nextPage(1)}/>,
    <BasicInfo initialState={applicationForm.basicInfo} nextPage={nextPage(2)}/>,
    <AboutYou initialState={applicationForm.personalInfo} nextPage={nextPage(3)}/>,
    <Skills initialState={applicationForm.skills} nextPage={nextPage(4)}/>,
    <Profile initialState={applicationForm.profile} nextPage={nextPage(5)} resume={resume} setResume={setResume}/>,
    // <Submit initialState={applicationForm.terms}/>
  ]

  return (
    <div className={styles.dashboard}>
      <PageNav
        currentPage={page}
        changePage={changePage}
        stage={stage}
      />
      {pages[page]}
    </div>
  )
}

export default Application;