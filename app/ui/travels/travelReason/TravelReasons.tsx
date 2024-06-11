import React from 'react'
import styles from "./TravelReasons.module.css"
import Link from 'next/link'
import { TRAVELREASONS } from '@/components/constants'

const TravelReasons = () => {
    return (
        <div className={styles.container}>
            {TRAVELREASONS.map((item, index) => {
                return (
                    <div className="travelReasonsItem" key={index}>
                        <div >
                            <h1 className={styles.h1}> {item.label} </h1>
                        </div>
                        <div>
                            <p className={styles.p}>{item.details}</p>
                        </div>
                        <div className='buttons_group'>
                            <div className='button_link'>
                                <Link href={item.button1Link}> {item.button1} </Link>
                            </div>
                            <div className='button_link'>
                                <Link href={item.button2Link}> {item.button2} </Link>
                            </div>
                            <div className='button_link'>
                                <Link href={item.button3Link}> {item.button3} </Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TravelReasons
