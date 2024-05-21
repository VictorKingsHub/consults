import Link from 'next/link'
import React from 'react'
import styles from "./IconSection.module.css"
import { PiGraduationCapThin, PiHeartLight, PiMapPinAreaLight } from "react-icons/pi";
import { PiAirplaneTiltThin } from "react-icons/pi";
import { CiCompass1 } from "react-icons/ci"
import { PiChalkboardTeacherThin } from "react-icons/pi";
import { PiBookOpenTextThin } from "react-icons/pi";
import { ServicesHead } from '@/app/components/reusable/servicesHead/ServicesHead';

const IconSection = () => {
  return (
    <div className={styles.container}>

      {/* <ServicesHead title='Our Travel Services' /> */}

      <div className={styles.wrapper}>
        <div className={styles.both}>
          <Link href="/travels/visaprocessing" className={styles.link}>
            {/* <CiCompass1 className={styles.serviceIcon} /> */}
            <div className={styles.iconText}> VISA PROCESSING </div>
          </Link>
        </div>
        <div className={styles.both}>
          <Link href="/travels/ielts" className={styles.link} >
            {/* <PiGraduationCapThin className={styles.serviceIcon} /> */}
            <div className={styles.iconText}> IELTS EXAMS </div>
          </Link>
        </div>

        <div className={styles.both}>
          <Link href="/travels/insurance" className={styles.link}>
            {/* <PiBookOpenTextThin className={styles.serviceIcon} /> */}
            <div className={styles.iconText}> TRAVEL INSURANCE </div>
          </Link>
        </div>

        <div className={styles.both}>
          <Link href="/travels" className={styles.link} >
            {/* <PiHeartLight className={styles.serviceIcon} /> */}
            <div className={styles.iconText}> RISK MANAGEMENT </div>
          </Link>
        </div>

        <div className={styles.both}>
          <Link href="/travels" className={styles.link} >
            {/* <PiChalkboardTeacherThin className={styles.serviceIcon} /> */}
            <div className={styles.iconText}> RISK ACCESSMENT </div>
          </Link>
        </div>
        <div className={styles.both}>
          <Link href="/travels" className={styles.link}>
            {/* <PiAirplaneTiltThin className={styles.serviceIcon} /> */}
            <div className={styles.iconText} > TRAVEL AGENCY </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default IconSection
