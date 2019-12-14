import React from 'react'
import { Helmet } from 'react-helmet'
import { useInView } from 'react-intersection-observer'
import { Button, Navbar, MLHBanner, Footer, Acordian } from 'components'
import { ReactComponent as Logo } from 'assets/logo-animated.svg'
import { ReactComponent as Cu } from 'assets/cu-animated.svg'
import { questions } from './faq.json'

import logoMLH from 'assets/partners/mlh.svg'
import logoSCE from 'assets/partners/sce.png'
import logoSCS from 'assets/partners/scs.png'
import {
  OnePassword,
  Balsamiq,
  CaseWare,
  Ciena,
  Cse,
  Deloitte, // TODO: use deloitte's dark logo in dark theme
  DigitalOcean,
  Ea,
  FdmGroup,
  Fullscript,
  JetBrains,
  Kinaxis,
  LighthouseLabs,
  MarchNetworks,
  Rbc,
  RossVideo,
  Sketch,
  Voiceflow,
  Wolfram,
  Stickermule,
  Martello
} from 'assets/sponsors'
import styles from './index.module.css'

const Landing = () => (
  <div className={styles.slide} id={styles.landing}>
    <Logo className={styles.landingLogo} />
    <div className={styles.landingInfo}>
      <div className={styles.shortLogo2020} />
      <div>
        <h3 className={styles.eventInfo}>January 11-12</h3>
        <p className={styles.eventInfo}>Richcraft Hall · Carleton University</p>
      </div>
      <div className={styles.landingButtons}>
        <Button link to='/login' label='Apply Now' disabled />
        {/* <Button link to='/sponsorship' label='Sponsor Us' /> */}
      </div>
      <p className={styles.notice}>Second wave of applications begins Decemeber 14.</p>
    </div>
  </div>
)

const HackathonDefinition = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <div ref={ref} className={styles.slide} id={styles.hackathonDefinition}>
      {inView ? <Cu className={styles.feature} /> : <div className={styles.feature} />}
      <div className={styles.explanationLeft}>
        <h1>What's a hackathon?</h1>
        <p>
          Think of it as a marathon of building and learning new things. Students from different universities and
          backgrounds get to work together to turn an idea into a reality. Be it an app, website, or hardware hack, the
          sky's the limit!
        </p>
        <p>
          At cuHacking, we’ll provide you with the freedom and incentive to make something cool in 24 hours. We welcome
          everyone - regardless of your background, education, or experience! All you have to bring is a laptop and a
          winning attitude.
        </p>
      </div>
    </div>
  )
}

const Volunteer = () => (
  <div className={styles.slide} id={styles.volunteer}>
    <div className={styles.feature} id={styles.richcraft} />
    <div className={styles.explanationRight}>
      <h1>I want to volunteer!</h1>
      <p>
        Looking to be more involved than just a regular hacker? Sign up to get instant access to all the
        behind-the-scenes cuHacking fun.
      </p>
      <Button
        external
        link
        to='https://docs.google.com/forms/d/e/1FAIpQLSeQjgCEb6PNZBK1PEm3rFA9EHkO7LmyxSSBNGLu16XzIY_B7Q/viewform'
        target='_blank'
        rel='noopener noreferrer'
        label='Volunteer'
        style={{ marginLeft: 0 }}
      />
      <p>
        Have a knack for photography or videography? We have a special spot for you.{' '}
        <span role='img' aria-label='wink ;)'>
          😉
        </span>
      </p>
      <Button
        external
        link
        to='https://forms.gle/JEX6iR6NvJcmH4wK7'
        target='_blank'
        rel='noopener noreferrer'
        label='Photograph'
        style={{ marginLeft: 0 }}
      />
    </div>
  </div>
)

const Faq = () => (
  <div className={styles.slide} id={styles.faq}>
    <h1>Frequently Asked Questions</h1>
    {questions.map(({ question, answer }) => {
      if (question === 'Where is cuHacking 2020 taking place?') {
        return (
          <Acordian key={question} title={question}>
            <p>
              cuHacking 2020 will take place in{' '}
              <a href='https://carleton.ca/campus/map/#RB' target='_blank' rel='noopener noreferrer'>
                Richcraft Hall (RB)
              </a>{' '}
              at Carleton University in Ottawa, Ontario.
            </p>
          </Acordian>
        )
      } else {
        return (
          <Acordian key={question} title={question}>
            <p>{answer}</p>
          </Acordian>
        )
      }
    })}
  </div>
)

function Sponsors() {
  const Partner = ({ id, url, src, alt }) => (
    <a className={styles.partnerLogo} href={url} target='_blank' rel='noopener noreferrer'>
      <img id={id} src={src} alt={alt} />
    </a>
  )

  const sponsorLogo = (id, url, Logo) => (
    <a id={id} className={styles.logo} href={url} target='_blank' rel='noopener noreferrer'>
      <Logo />
    </a>
  )

  return (
    <div className={styles.slide}>
      <h2>SPONSORS</h2>
      <div className={styles.tier}>
        <div className={styles.logoSection}>
          {sponsorLogo(styles.martello, 'https://martellotech.com/', Martello)}
          {sponsorLogo(styles.rossVideo, 'https://www.rossvideo.com/', RossVideo)}
          {sponsorLogo(styles.rbc, 'https://www.rbcroyalbank.com', Rbc)}
        </div>
      </div>
      <div className={styles.tier}>
        <div className={styles.logoSection}>
          {sponsorLogo(styles.ciena, 'https://www.ciena.ca', Ciena)}
          {sponsorLogo(styles.marchNetworks, 'https://marchnetworks.com', MarchNetworks)}
          {sponsorLogo(styles.cse, 'https://www.cse-cst.gc.ca/en', Cse)}
          {sponsorLogo(styles.caseWare, 'https://idea.caseware.com/products/idea/', CaseWare)}
        </div>
        <div className={styles.logoSection}>
          {sponsorLogo(styles.fullscript, 'https://fullscript.com', Fullscript)}
          {sponsorLogo(styles.lighthouseLabs, 'https://www.lighthouselabs.ca', LighthouseLabs)}
          {sponsorLogo(styles.deloitte, 'https://www2.deloitte.com/', Deloitte)}
        </div>
      </div>
      <div className={styles.tier}>
        <div className={styles.logoSection}>
          {sponsorLogo(styles.balsamiq, 'https://balsamiq.com', Balsamiq)}
          {sponsorLogo(styles.fdmGroup, 'https://fdmgroup.com', FdmGroup)}
          {sponsorLogo(styles.kinaxis, 'https://www.kinaxis.com/', Kinaxis)}
        </div>
      </div>
      <div className={styles.tier}>
        <div className={styles.logoSection}>
          {sponsorLogo(styles.onePassword, 'https://1password.com', OnePassword)}
          {sponsorLogo(styles.digitalOcean, 'https://www.digitalocean.com/', DigitalOcean)}
          {sponsorLogo(styles.ea, 'https://www.ea.com', Ea)}
          {sponsorLogo(styles.jetbrains, 'https://www.jetbrains.com/', JetBrains)}
        </div>
        <div className={styles.logoSection}>
          {sponsorLogo(styles.sketch, 'https://www.sketch.com/', Sketch)}
          {sponsorLogo(styles.voiceflow, 'https://www.voiceflow.com/', Voiceflow)}
          {sponsorLogo(styles.wolfram, 'https://wolfram.com', Wolfram)}
          {sponsorLogo(
            styles.stickermule,
            'https://www.stickermule.com/unlock?ref_id=0539570701&utm_source=sponsorship&utm_campaign=mlh-sponsorship-2019&utm_medium=referral',
            Stickermule
          )}
        </div>
      </div>
      <h2>PARTNERS</h2>
      <div className={styles.logoSection} id={styles.partners}>
        <Partner
          id={styles.SCSLogo}
          url='https://carleton.ca/scs/'
          src={logoSCS}
          alt="Link to Carleton's School of Computer Science Webpage"
        />
        <Partner
          id={styles.SCELogo}
          url='https://carleton.ca/sce/'
          src={logoSCE}
          alt="Link to Carleton's School of Computer and Systems Engineering Webpage"
        />
        <Partner id={styles.MLHLogo} url='https://mlh.io/' src={logoMLH} alt='Link to MLH Webpage' />
      </div>
    </div>
  )
}

export default () => (
  <>
    <Helmet>
      <title>cuHacking 2020</title>
    </Helmet>
    <Navbar />
    <div id={styles.topContent}>
      <Landing />
      <HackathonDefinition />
      <Volunteer />
    </div>
    <div id={styles.otherContent}>
      <Faq />
    </div>
    <div id={styles.otherContent}>
      <Sponsors />
    </div>
    <Footer />
    <MLHBanner />
  </>
)
