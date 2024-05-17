import React from 'react'
import styles from "./TravelHeroSection.module.css"
import photo from "@/public/skyscraperTop.jpg"
// skyscraperTop
import Image from 'next/image'

const TravelHeroSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <svg className={styles.svg}>
                    <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                        Travel, Study and Work Conveniently
                    </text>
                </svg>

            </div>
            <div className={styles.desc}>
                <p>You stand to get the best travel experience with Riskout Consults </p>
            </div>
            <div className={styles.buttons}>
                <button className={styles.cambridge}> Cambridge Curriculum</button>
                <button className={styles.sponsorship}> Sponsorship</button>
                <button className={styles.traineTeachers}> Trained Teachers</button>
            </div>
            <div className={styles.icon}>
            </div>
        </div>
    )
}

export default TravelHeroSection
