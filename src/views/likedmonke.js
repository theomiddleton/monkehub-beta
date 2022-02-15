import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import projectStyles from '../style.module.css'
import styles from './likedmonke.module.css'

const Likedmonke = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Liked monke - monkehub</title>
        <meta
          name="description"
          content="monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke yeah"
        />
        <meta property="og:title" content="Liked monke - monkehub" />
        <meta
          property="og:description"
          content="i like monke, you like monke. i make website for monke. :)"
        />
      </Helmet>
      <div className={styles['Top-container']}>
        <nav className={styles['Navbar']}>
          <h1>
            <span className={styles['text']}>Monke</span>
            <span className={styles['text01']}>Hub</span>
          </h1>
          <div className={styles['Right-side']}>
            <div className={styles['Links-container']}>
              <Link to="/" className={styles['navlink']}>
                Home
              </Link>
              <Link to="/aboutus" className={styles['navlink1']}>
                About
              </Link>
              <Link to="/contact" className={styles['navlink2']}>
                Contact
              </Link>
            </div>
            <Link to="/" className={styles['navlink3']}>
              <SolidButton
                button="Monke"
                rootClassName="rootClassName3"
                className={styles['component']}
              ></SolidButton>
            </Link>
          </div>
          <svg viewBox="0 0 1024 1024" className={styles['Burger-menu']}>
            <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
          </svg>
        </nav>
        <div className={styles['Hero']}>
          <div className={styles['Content-container']}>
            <h1 className={` ${projectStyles['heading']} ${styles['text02']} `}>
              <span className={styles['text03']}>yep, still does nothing</span>
            </h1>
            <h2
              className={` ${styles['Subheading']} ${projectStyles['subheading']} `}
            >
              <span>im not a web dev</span>
              <br></br>
              <span>and anyway what do you</span>
              <br></br>
              <span>want it to do</span>
            </h2>
          </div>
          <span className={styles['thats-about-it']}>
            <span>thats about it</span>
            <br></br>
            <span></span>
          </span>
          <span className={styles['pic-comment']}>
            <span>
              i like this monke pic
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>it goes hard</span>
          </span>
        </div>
      </div>
      <div className={styles['Footer']}>
        <div className={styles['Menu']}>
          <h1>
            <span>Monke</span>
            <span className={styles['text16']}>Hub</span>
          </h1>
          <div className={styles['Links-container1']}>
            <div className={styles['container1']}>
              <Link to="/aboutus" className={styles['navlink4']}>
                About us
              </Link>
              <Link to="/contact" className={styles['navlink5']}>
                Contact
              </Link>
            </div>
          </div>
          <div className={styles['Follow-container']}>
            <span className={styles['text17']}>still monke</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Likedmonke
