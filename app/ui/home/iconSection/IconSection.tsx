import Link from 'next/link'
import React from 'react'
import styles from "./IconSection.module.css"
import { PiGraduationCapThin, PiHeartLight, PiMapPinAreaLight } from "react-icons/pi";
import { PiAirplaneTiltThin } from "react-icons/pi";
import { CiCompass1 } from "react-icons/ci"
import { PiChalkboardTeacherThin } from "react-icons/pi";
import { PiBookOpenTextThin } from "react-icons/pi";
import { SiSemanticscholar } from 'react-icons/si';

const IconSection = () => {
  return (
    <div className={styles.container}>

      <div className={styles.wrapper}>
        <div className={styles.both}>
          <Link href="/travels/visaprocessing" className={styles.link}>
            <CiCompass1 className={styles.serviceIcon} />
            <div className={styles.iconText}> Visa Processing </div>
          </Link>
        </div>
        <div className={styles.both}>
          <Link href="/travels/ielts" className={styles.link} >
            <PiGraduationCapThin className={styles.serviceIcon} />
            <div className={styles.iconText}> IELTS Exams </div>
          </Link>
        </div>

        <div className={styles.both}>
          <Link href="/travels/insurance" className={styles.link}>
            <PiBookOpenTextThin className={styles.serviceIcon} />
            <div className={styles.iconText}> Travel Insurance </div>
          </Link>
        </div>

        <div className={styles.both}>
          <Link href="/travels" className={styles.link} >
            <PiHeartLight className={styles.serviceIcon} />
            <div className={styles.iconText}> Risk Management </div>
          </Link>
        </div>

        <div className={styles.both}>
          <Link href="/travels" className={styles.link} >
            <PiChalkboardTeacherThin className={styles.serviceIcon} />
            <div className={styles.iconText}> Risk Accessment </div>
          </Link>
        </div>
        <div className={styles.both}>
          <Link href="/education/scholarships" className={styles.link}>
            <SiSemanticscholar className={styles.serviceIcon} />
            <div className={styles.iconText} > Scholarships </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default IconSection
