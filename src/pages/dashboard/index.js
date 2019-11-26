import React, {useState} from 'react';
import styles from './dashboard.module.css';
import {
  Input,
  Button,
} from 'components';
import PageNav from './pageNav'
import Dropbox from './dropbox'
import {Redirect} from 'react-router-dom';

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
    privacyPolicy: false
    // contestTerms: false // TODO: Remind Ryan that we don't need this anymore
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

  // TODO: use actual school options
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
          <Input checked={personalInfo.wantsShuttle} inputStyle='checkbox' name='wantsShuttle' label="I'm interested in a shuttle coming to my city (based on demand)."/>
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

const Submit = ({initialState, submitApplication}) => {
  const [terms, setInfo] = useState(initialState)

  // Updates the state for the part of the form which changed
  const onChange = event => setInfo({
    ...terms,
    [event.target.name]: (event.target.checked || APPLICATION_SCHEMA.terms[event.target.name])
  })

  const Link = ({href, children}) => (
    <a
      style={{color: 'var(--secondaryColour)'}}
      href={href}
      target='_blank'
      rel='noopener noreferrer external'
    >
      {children}
    </a>
  )

  return (
    <div className={styles.page} id={styles.submit}>
      <h1 className={styles.formHeading}> Submit </h1>
      <form onSubmit={() => submitApplication({terms})} onChange={onChange} className={styles.formContainer}>
        <div className={styles.section}>
          <Input
            checked={terms.codeOfConduct}
            inputStyle='checkbox'
            name='codeOfConduct'
            label={
              <div>
                I have read and agree to the <Link href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH Code of Conduct</Link>.
              </div>
            }
          />
        </div>
        <div className={styles.section}>
          <Input
            checked={terms.privacyPolicy}
            inputStyle='checkbox'
            name='privacyPolicy'
            label={
              <div>
                I authorize you to share certain application/registration information for event administration, ranking, MLH administration, pre and post-event informational e-mails, and occasional messages about hackathons in-line with the <Link href='https://github.com/MLH/mlh-policies/blob/master/prize-terms-and-conditions/contest-terms.md'>MLH Privacy Policy</Link>. I further I agree to the terms of both the <Link href='https://mlh.io/privacy'>MLH Contest Terms and Conditions</Link> and the <Link href='https://mlh.io/privacy'>MLH Privacy Policy</Link>.
              </div>
            }
          />
        </div>
        <Button label="Submit" type='submit'/>
      </form>
    </div>
  )
}

const Submitted = () => (
  <div className={styles.page} id={styles.start}>
    <h1 id={styles.superTitle}>Application</h1>
    <h2 id={styles.title}>Submitted</h2>
    <p>We have received your application! Keep an eye on your email for updates.</p>
  </div>
)

const Application = (props) => {

  const [stage, changeStage] = useState(0)
  const [page, changePage] = useState(0)

  const [applicationForm, setApplication] = useState(APPLICATION_SCHEMA)
  const [resume, setResume] = useState()

  if(props.location.state.token === undefined) {
    return (<Redirect to="/login"/>); 
  }

  const nextPage = pageNumber => formData => {
    // Move to the next page
    changeStage(pageNumber)
    changePage(pageNumber)

    // TODO: Save using the API

    // Save the application
    if (formData) {
      setApplication({...applicationForm, ...formData})
    }
  }

  const submitApplication = formData => {
    // Move to the next page
    changeStage(6)
    changePage(6)

    // TODO: Send the whole application to the api

    // TODO: pull 'submitted' into a constant
    setApplication({...applicationForm, ...formData, status: 'submitted'})
  }

  const pages = [
    <StartPage nextPage={nextPage(1)}/>,
    <BasicInfo initialState={applicationForm.basicInfo} nextPage={nextPage(2)}/>,
    <AboutYou initialState={applicationForm.personalInfo} nextPage={nextPage(3)}/>,
    <Skills initialState={applicationForm.skills} nextPage={nextPage(4)}/>,
    <Profile initialState={applicationForm.profile} nextPage={nextPage(5)} resume={resume} setResume={setResume}/>,
    <Submit initialState={applicationForm.terms} submitApplication={submitApplication}/>,
    <Submitted/>
  ]

  return (
    <div className={styles.dashboard}>
      <PageNav
        currentPage={page}
        changePage={changePage}
        stage={stage}
        submitted={applicationForm.status === 'submitted'}
      />
      {pages[page]}
    </div>
  )
}

export default Application;