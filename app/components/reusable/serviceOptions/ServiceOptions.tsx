"use client"
import React from 'react'
import styles from "./ServiceOptions.module.css"
import Link from 'next/link';

interface ServiceOptionsProps {
    label1: string;
    label2: string;
    label3: string;
    label4: string;
    desc1: string;
    desc2: string;
    desc3: string;
    desc4: string;

}
const ServiceOptions = ({ label1, label2, label3, label4, desc1, desc2, desc3, desc4 }: ServiceOptionsProps) => {
  return (

    <div className={styles.container}>
            <div className={styles.service}>
                <Link href={"/education/servicesOption/ServiceOption.tsx"}>
                    <p className={styles.desc}>{desc1}</p>
                    <h3 className={styles.label}>{label1}</h3>
                </Link>
            </div>

            <div className={styles.service}>
                    <h3 className={styles.label}>{label2}</h3>
                    <p className={styles.desc}>{desc2}</p>
            </div>

            <div className={styles.service}>
                    <h3 className={styles.label}>{label3}</h3>
                    <p className={styles.desc}>{desc3}</p>
            </div>

            <div className={styles.service}>
                    <h3 className={styles.label}>{label4}</h3>
                    <p className={styles.desc}>{desc4}</p>
            </div>
    </div>
  )
}

export default ServiceOptions