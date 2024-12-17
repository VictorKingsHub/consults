import React from 'react'
import styles from './Us.module.css'
import Image from 'next/image'

interface RightSectionProps {
  vissionTitle?: string
  vissionDescription?: string
  vissionImage?: any
  vissionImageAlt?: any
  coreValueTitle?: string
  coreValueImage?: any
  coreValueDescription?: string
  coreValueImageAlt?: string
}
interface LeftSectionProps {
  missionTitle: string
  missionDescription: string
  missionImage: any
  missionImageAlt: string
}

export default function UsSection () {
  return (
    <div className={styles.container}>
      <RightSection
        vissionTitle={'Our Vision'}
        coreValueTitle={''}
        vissionImage={'/team1.jpg'}
        coreValueImage={undefined}
        vissionDescription={
          'Our vision is to bridge cultures, connect minds, and empower futures. We envision a world where education, travel, and career opportunities know no borders, and where individuals can reach their full potential. We strive to be the catalyst for transformative experiences that inspire growth, understanding, and success.'
        }
        vissionImageAlt={'Vission Image'}
      />

      <LeftSection
        missionTitle={'Our Mission'}
        missionDescription={
          'Our mission is to empower students, educators, and professionals to reach their full potential. With our expertise and dedication, we strive to deliver exceptional services that exceed expectations.'
        }
        missionImage={'/team1.jpg'}
        missionImageAlt={'mission Image'}
      />

      <RightSection
        coreValueTitle={'Our Core values'}
        coreValueImage={'/director2.jpg'}
        vissionDescription={
          'We are Nigerian based firm that is into Human Capacity, Seminars and workshops. We train staff of companies, Teachers in private and public schools, school proprietors and Administrators, bankers, Health Officials and Personnel, Staff of security Agencies etc.'
        }
        coreValueDescription='We empower individuals and organisations to reach their full potential, connecting people and opportunities with excellence, inclusivity, and integrity, inspiring creativity and positive impact.'
        coreValueImageAlt='"/team2.jpg"'
      />
    </div>
  )
}

const RightSection = ({
  vissionTitle,
  vissionDescription,
  vissionImageAlt,
  coreValueTitle,
  vissionImage,
  coreValueImage,
  coreValueDescription,
  coreValueImageAlt
}: RightSectionProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.texts}>
        <h1 className={styles.title}>{vissionTitle || coreValueTitle}</h1>
        <p>{vissionDescription || coreValueDescription}</p>
      </div>
      <div className={styles.image}>
        <Image
          src={vissionImage || coreValueImage}
          alt={vissionImageAlt || coreValueImageAlt}
          width={400}
          height={400}
          className={styles.img}
        />
      </div>
    </div>
  )
}

const LeftSection = ({
  missionTitle,
  missionDescription,
  missionImage,
  missionImageAlt
}: LeftSectionProps) => {
  return (
    <div className={styles.wrapper2}>
      <div className={styles.texts}>
        <h1 className={styles.title}> {missionTitle} </h1>
        <p>{missionDescription}</p>
      </div>
      <div className={styles.image}>
        <Image
          src={missionImage}
          alt={missionImageAlt}
          width={400}
          height={400}
          className={styles.img}
        />
      </div>
    </div>
  )
}
