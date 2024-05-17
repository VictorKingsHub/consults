import Image from 'next/image'
import React from 'react'
import IeltsPhoto4 from "../../../../../public/ieltsimg.jpg"
import styles from "./HeroImage.module.css"

const HeroImage = () => {
  return (
    <div className={styles.container}>
      <Image src={IeltsPhoto4} width={400} height={400} className={styles.img} alt='ielts Photo'/>
    </div>
  )
}

export default HeroImage
