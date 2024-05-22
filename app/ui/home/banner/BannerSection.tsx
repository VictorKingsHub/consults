"use client"
import React, { useEffect, useState } from 'react'
import styles from "./BannerSection.module.css"
import { FaAngleDoubleRight } from 'react-icons/fa'

const BannerSection = () => {


  return (
    <div className={styles.container}>
      <div className={styles.first} >
        <div className={styles.firstTitle}>Travel And Tour</div>
        <div className={styles.firstIcon} ><FaAngleDoubleRight /></div>
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
