"use client"
import React, { useEffect, useState } from 'react'
import styles from "./BannerSection.module.css"
import { FaAngleDoubleRight } from 'react-icons/fa'

const BannerSection = () => {

  const [animate, setAnimate] = useState(true)
  const handleAnimation = () => {
    setAnimate(!animate)
  }

  return (
    <div className={styles.container}>
      <div className={styles.first} onMouseOver={handleAnimation} onMouseLeave={handleAnimation}>
        <div className={styles.firstTitle}>Travel And Tour</div>
        <div className={`${animate ? styles.showfirstIcon : styles.firstIcon}`} ><FaAngleDoubleRight /></div>
      </div>
      <div className={styles.second}>
        <div className={styles.up}>
          <div className={styles.upTitle}>Degrees</div>
          <div className={styles.upIcon}><FaAngleDoubleRight /></div>
        </div>
        <div className={styles.down}>
          <div className={styles.downTitle}> Relaxation</div>
          <div className={styles.downIcon}><FaAngleDoubleRight /></div>
        </div>
      </div>

    </div>
  )
}

export default BannerSection
