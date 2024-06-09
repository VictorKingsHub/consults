"use client"
import React, { useState } from 'react'
import styles from "./EducationServices.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { EDUCATIONSERVICES } from '@/app/constants'

const EducationServicesPage = () => {

    const [selected, setSelected] = useState(1)

    const handleSelection = (getCurrentId: any) => {
        setSelected(getCurrentId)
    }

    return (
        <div className={styles.container}>
            <div className={styles.popular}>
                <div className={styles.toplabel}> Our Top Services</div>
                {/* <div className={styles.topDesc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vero fugiat quisquam excepturi adipisci tempore nam iste, molestiae at saepe!  molestiae at saepe!  molestiae at saepe!
                </div> */}
            </div>
            <div className={styles.wrapper}>
                {EDUCATIONSERVICES.map((serviceItem) => {
                    return (
                        <div className={styles.service} key={serviceItem.id}>
                            <Link href={serviceItem.link}>
                                <Image
                                    src={serviceItem.image}
                                    width={200}
                                    height={200}
                                    alt={serviceItem.label}
                                    onMouseEnter={() => handleSelection(serviceItem.id)}
                                    onMouseLeave={() => handleSelection(null)}
                                    className={` ${selected === serviceItem.id ? styles.activeImg : styles.img} `}
                                />
                            </Link>
                            <div className={styles.both}>
                                <h1
                                    className={` ${selected === serviceItem.id ? styles.activeLabel : styles.label} `}
                                >{serviceItem.label}</h1>
                                <p className={styles.desc}> {serviceItem.description} </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default EducationServicesPage