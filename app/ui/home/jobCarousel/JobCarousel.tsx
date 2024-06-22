import React from 'react'
import Marquee from 'react-fast-marquee'
import styles from "./JobCarousel.module.css"
import Image from 'next/image'
import Link from 'next/link'

const JobCarousel = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <p className={styles.title}> Available Jobs </p>
            </div>

            <Marquee pauseOnHover={true} pauseOnClick={true} gradient={true} gradientColor=" " gradientWidth={50} className={styles.marquee} >
                <div className={styles.job}>
                    <Link href={"/recentJobs"}>
                        <Image
                            src="/britishCounsilL.jpg"
                            // src="/snap.jpg"
                            width={350}
                            height={350}
                            alt='traveller'
                            className={styles.img}
                        />
                    </Link>
                </div>
                <div className={styles.job}>
                    <Link href={"/recentJobs"}>
                        <Image
                            src="/britishCounsilL.jpg"
                            // src="/snap.jpg"
                            width={350}
                            height={350}
                            alt='traveller'
                            className={styles.img}
                        />
                    </Link>
                </div>
                <div className={styles.job}>
                    <Link href={"/recentJobs"}>
                        <Image
                            src="/britishCounsilL.jpg"
                            // src="/snap.jpg"
                            width={350}
                            height={350}
                            alt='traveller'
                            className={styles.img}
                        />
                    </Link>
                </div>
                <div className={styles.job}>
                    <Link href={"/recentJobs"}>
                        <Image
                            src="/britishCounsilL.jpg"
                            // src="/snap.jpg"
                            width={350}
                            height={350}
                            alt='traveller'
                            className={styles.img}
                        />
                    </Link>
                </div>
            </Marquee>
        </div>
    )
}

export default JobCarousel
