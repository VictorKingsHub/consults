import React from 'react'
import styles from "./Ieltsintro.module.css"
import Image from 'next/image'
import Link from 'next/link'

export function IeltsIntro() {
    return (
        <div className={styles.container}>
            <div className={styles.up}>
                <h1 className={styles.title}>International English Language Testing System </h1>
                <p className={styles.description}>The international English Language Testing System is designed to help you achieve your ambition of working, studying or moving to a country where English is the native language.</p>
            </div>
            <div className={styles.photo}>
                <div>
                    <Image src="/house3.jpg" alt='' width={300} height={300} className={styles.img} />
                    <span className='font-semibold'>General IELTS class</span>
                </div>
                <div>
                    <Image src="/house3.jpg" alt='' width={300} height={300} className={styles.img} />
                    <span className='font-semibold'>Private Executive class</span>
                </div>
                <div>
                    <Image src="/house3.jpg" alt='' width={300} height={300} className={styles.img} />
                    <span className='font-semibold'>Private Executive Home Service</span>
                </div>
                <div>
                    <Image src="/house3.jpg" alt='' width={300} height={300} className={styles.img} />
                    <span className='font-semibold'>Vrtual Class Tutoting (Private/General) </span>
                </div>
            </div>
            <div className={styles.register}>
                <h2>Click the following buton to register for your IELTS class</h2>
                <Link href="#" > Register</Link>
            </div>
        </div>
    )
}
