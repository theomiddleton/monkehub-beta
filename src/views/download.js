import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './download.module.css'

const Download = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>download - monkehub</title>
        <meta
          name="description"
          content="monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke monke yeah"
        />
        <meta property="og:title" content="download - monkehub" />
        <meta
          property="og:description"
          content="i like monke, you like monke. i make website for monke. :)"
        />
      </Helmet>
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    </div>
  )
}

export default Download
