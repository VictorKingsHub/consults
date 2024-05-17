import React from 'react'
import styles from "./Join.module.css"
import { Button, ButtonBackground } from '@/app/components/reusable/button/Button'
const Join = () => {
    return (
        <div className={styles.container}>
        {/* <div className='join_wrapper py-5 self-left container '> */}
            <div className={styles.join_content}>
                <h1 className={styles.satisfying}>Get the most satisfying services</h1>
                <p className={styles.description} > At Riskout, we believe that the beauty of life lies in the little things that give us a better expression of ourselves, make us more social and connect emotionally. </p>
                <div className={styles.buttons}>
                    <Button text={'Learn More'} link={'/travels'} />
                    <ButtonBackground text={'Contact Us'} link={'/contact'} />
                </div>
            </div>
        </div>
    )
}

export default Join