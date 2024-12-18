"use client"
import React from 'react'
import styles from "./WelcomeHero.module.css"
import { Button, ButtonBackground } from '@/components/reusable/button/Button'
import Image from 'next/image'

export default function WelcomeHero(){
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h1 className={styles.header}>Educational Placement and Travel & Study Abroad</h1>
                <p className={styles.description}>
                    We provide educational consultancy services for schools in Nigeria, supporting academic success and school supervision. We also offer international travel opportunities for students, individuals and groups, promoting cultural exchange and exploration.
                </p>
                <div className={styles.buttons}>
                    <div className={styles.btn}>
                        <ButtonBackground text={'Educational Consulting'} link={'/education'} />
                    </div>
                    <div className={styles.btn}>
                        <Button text={'Study and Work abroad'} link={'/travels'} />
                    </div>
                </div>
            </div>

            <div className={styles.image}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/man.jpg"
                        width={350}
                        height={350}
                        alt='traveller'
                        className={styles.img}
                    />
                </div>
            </div>
        </div>
    )
}