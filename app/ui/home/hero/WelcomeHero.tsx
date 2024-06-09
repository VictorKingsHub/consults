import React from 'react'
import styles from "./WelcomeHero.module.css"
import Image from 'next/image'
import photo4 from "@/public/plane.png"
import Link from 'next/link'
import { ButtonBackground, Button } from '@/app/components/reusable/button/Button'
// import phpt from 

const WelcomeHero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <span className={styles.welcome}>Welcome</span>
                <h1 className={styles.header}>Educational Placement and Travel Consulting</h1>
                <p className={styles.description}>
                    
                    {/* We provide services to a large clientele seeking academic pursuit overseas and families pursuing working and resident permit Abroad */}
                    
                    We provide educational consultancy services for schools in Nigeria, supporting academic success and school supervision. We also offer international travel opportunities for students, individuals and groups, promoting cultural exchange and exploration.

                    </p>
                <div className={styles.buttons}>
                    <ButtonBackground text={'Educational Consulting'} link={'/education'} />
                    <Button text={'Study and Work abroad'} link={'/travels'} />
                </div>
                {/* <div className={styles.img}>
                    <Image src={photo4} alt='plane' width={250} height={250} className={styles.imgplane} />
                </div> */}
            </div>

            <div className={styles.image}>
                <div className={styles.imageWrapper}>
                    <Image
                        // src="/man.jpg"
                        src="/snap.jpg"
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

export default WelcomeHero
