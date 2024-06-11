import React from 'react'
import styles from "./IeltsLearnings.module.css"
import Image from 'next/image'
import Link from 'next/link'

const IeltsLearning = () => {
  return (
    <div className={styles.container}>

<div className={styles.down}>
        <div className={styles.texts}>
          
          <div className={styles.side} >
            <h1 className={styles.title}>Join Us Today</h1>
            <p className={styles.desc}> Did you score low in your IELTS Tests?
            <br/>We are here to guide you to your desired band score for both Academic and General Training test.
            <br/>Even if this is your first attempt, you need this ongoing training.
            </p>
          </div>
          <div className={styles.side}>
            <p className={styles.desc}>We will also help you with your IELTS registration for free on training with us. All study IELTS is concerned about helping you get your desired Band Score. We also offer specific assistance to people who patronize using which eveyway</p>
          </div>
        </div>
       
      </div>

      
      <div className={styles.image}>
          <Image src="/ielt.png" width={200} height={200} alt='ielts' className={styles.img} />
        </div>
      
        <div className={styles.up}>
        <div>
          <h1 className={styles.title}>Get Test Ready</h1>
          <p className={styles.desc}>For more than 30 years IELTS has set the standard for English Language Testing. Trusted by governments, employers and educational institutions – we have helped millions of people to achieve their goals</p>
        </div>
        <div>
            <h1 className={styles.title2}>Levels of Tests</h1>
            <div className={styles.all}>
              <p>Speaking</p>
              <p>Listening</p>
              <p>Reading</p>
              <p>Writing</p>
            </div>
            <div className={styles.button}>
              <Link href="http://bit.ly/IELTSExamRegForm"> Register </Link>
            </div>
          </div>
      </div>

    </div>
  )
}

export default IeltsLearning
