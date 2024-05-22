import React from 'react'
import styles from "./BannerSection.module.css"

const BannerSection = () => {
  return (
    <div className={styles.container}>
        <div className={styles.first}></div>
        <div className={styles.second}>
            <div className={styles.up}></div>
            <div className={styles.down}></div>
        </div>
      
    </div>
  )
}

export default BannerSection
