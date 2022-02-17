import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import projectStyles from '../style.module.css'
import styles from './hireme.module.css'

const Hireme = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>hire me - monkehub</title>
        <meta
          name="description"
          content="monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke yeah"
        />
        <meta property="og:title" content="hire me - monkehub" />
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
                rootClassName="rootClassName4"
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
            <h1 className={` ${styles['text02']} ${projectStyles['heading']} `}>
              Portfolio
            </h1>
            <h2
              className={` ${styles['Subheading']} ${projectStyles['subheading']} `}
            >
              <span>hire me pls</span>
            </h2>
          </div>
        </div>
      </div>
      <div id="main-section" className={styles['Main']}>
        <ul className={` ${styles['ul']} ${projectStyles['list']} `}>
          <li className={` ${styles['li']} ${projectStyles['list-item']} `}>
            <a
              href="https://youtu.be/YpWSiFkYQ_E"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link']}
            >
              https://youtu.be/YpWSiFkYQ_E
            </a>
          </li>
          <li className={` ${styles['li01']} ${projectStyles['list-item']} `}>
            <span className={styles['text04']}>
              <a
                href="https://www.youtube.com/channel/UCx_Llug_37nnbzE_EMY03oA"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className={styles['text05']}>
                  https://www.youtube.com/channel/UCx_Llug_37nnbzE_EMY03oA
                </span>
              </a>
              <span className={styles['text06']}>
                {' '}
                - Everything on this channel
              </span>
            </span>
          </li>
          <li className={` ${styles['li02']} ${projectStyles['list-item']} `}>
            <a
              href="https://youtu.be/UdcwKBDdFpA"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link2']}
            >
              https://youtu.be/UdcwKBDdFpA
            </a>
          </li>
          <li className={` ${styles['li03']} ${projectStyles['list-item']} `}>
            <span className={styles['text07']}>
              <span>https://youtu.be/pv33HQNtELg</span>
              <a
                href="https://youtu.be/pv33HQNtELg"
                target="_blank"
                rel="noreferrer noopener"
              ></a>
            </span>
          </li>
          <li className={` ${styles['li04']} ${projectStyles['list-item']} `}>
            <span className={styles['text09']}>
              <span>Note - Some of these</span>
              <span>
                {' '}
                have had text/music added buy the client to fit the yt shorts/
                tiktok target
              </span>
              <a
                href="https://youtu.be/pv33HQNtELg"
                target="_blank"
                rel="noreferrer noopener"
              ></a>
            </span>
          </li>
          <li className={` ${styles['li05']} ${projectStyles['list-item']} `}>
            <span className={styles['text12']}>V</span>
          </li>
          <li className={projectStyles['list-item']}>
            <a
              href="https://youtu.be/Sdy4FIiaRiA"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link5']}
            >
              https://youtu.be/Sdy4FIiaRiA
            </a>
          </li>
          <li className={projectStyles['list-item']}>
            <a
              href="https://youtu.be/O2hloJusI5U"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link6']}
            >
              https://youtu.be/O2hloJusI5U
            </a>
          </li>
          <li className={projectStyles['list-item']}>
            <a
              href="https://youtu.be/O2hloJusI5U"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link7']}
            >
              https://youtu.be/ACkdNpFz1BU
            </a>
          </li>
          <li className={projectStyles['list-item']}>
            <a
              href="https://youtu.be/mO1l3WkOjpk"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link8']}
            >
              https://youtu.be/mO1l3WkOjpk
            </a>
          </li>
        </ul>
      </div>
      <footer className={styles['Footer']}>
        <div className={styles['Menu']}>
          <h1>
            <span>Monke</span>
            <span className={styles['text14']}>Hub</span>
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
            <span className={styles['text15']}>
              yeah there&apos;s a monke here to
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Hireme