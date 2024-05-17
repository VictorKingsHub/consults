import React from 'react'
import styles from "./VisaProcessingHero.module.css"
const VisaProcessingHero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1>VISA PROCESSING</h1>
        </div>
        <div className={styles.desc}>
          <p>Our new Visa processing time guide gives you an indication of how long your Visa application may take to process</p>
        </div>
      </div>

    </div>
  )
}

export default VisaProcessingHero
