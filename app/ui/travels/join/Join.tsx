import React from 'react'
import styles from "./Join.module.css"
import { Button, ButtonBackground } from '@/components/reusable/button/Button'
const Join = () => {
    return (
        <div className={styles.container}>
            <div className={styles.join_content}>
                <h1 className={styles.satisfying}>Get the most satisfying services</h1>
                <p className={styles.description} > At Riskout, we believe that the beauty of life lies in the little things that give us a better expression of ourselves, make us more social and connect emotionally. </p>
                <div className={styles.buttons}>
                    <div className={styles.btn}>
                        <ButtonBackground text={'Contact Us'} link={'/contact'} />
                    </div>
                    <div className={styles.btn}>
                        <Button text={'Learn More'} link={'/travels'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Join