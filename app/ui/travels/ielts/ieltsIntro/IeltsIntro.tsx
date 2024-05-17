import React from 'react'
import styles from "./Ieltsintro.module.css"

export function IeltsIntro() {
    return (
        <div className={styles.container}>
                <h1 className={styles.title}>International English Language Testing System </h1>
    
                <p className={styles.description}>The international English Language Testing System is designed to help you achieve your ambition of working, studying or moving to a country where English is the native language.</p>
        </div>
    )
}
