'use client'
import React from 'react'
import styles from './WelcomeHero.module.css'
import { Button, ButtonBackground } from '@/components/reusable/button/Button'
import Image from 'next/image'
import { motion } from 'framer-motion';

export default function WelcomeHero () {
  return (
    <motion.div
      className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.header}>
          Educational Placement and Travel & Study Abroad
        </h1>
        <p className={styles.description}>
          We provide educational consultancy services for schools in Nigeria,
          supporting academic success and school supervision. We also offer
          international travel opportunities for students, individuals and
          groups, promoting cultural exchange and exploration.
        </p>
        <div className={styles.buttons}>
          <div className={styles.btn}>
            <ButtonBackground
              text={'Educational Consulting'}
              link={'/education'}
            />
          </div>
          <div className={styles.btn}>
            <Button text={'Study and Work abroad'} link={'/travels'} />
          </div>
        </div>
      </div>

      <div className={styles.image}>
        <motion.div className={styles.imageWrapper}
           whileHover={{
            scale: 1.1,
            rotate: 5,
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 10 }}
        >
          <Image
            src='/man.jpg'
            width={350}
            height={350}
            alt='traveller'
            className={styles.img}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
