"use client"
import React from 'react'
import styles from "./ServiceOptions.module.css"

interface ServiceOptionsProps {
    label1: string;
    label2: string;
    label3: string;
    desc1: string;
    desc2: string;
    desc3: string;

}
const ServiceOptions = ({ label1, label2, label3, desc1, desc2, desc3 }: ServiceOptionsProps) => {
  return (

    <div className={styles.container}>
            <div className={styles.service}>
                    <h3 className={styles.label}>{label1}</h3>
                    <p className={styles.desc}>{desc1}</p>
            </div>

            <div className={styles.service}>
                    <h3 className={styles.label}>{label2}</h3>
                    <p className={styles.desc}>{desc2}</p>
            </div>

            <div className={styles.service}>
                    <h3 className={styles.label}>{label3}</h3>
                    <p className={styles.desc}>{desc3}</p>
            </div>
    </div>
  )
}

export default ServiceOptions