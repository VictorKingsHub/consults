import { FOOTER_CONTENT } from '@/components/constants'
import React from 'react'
import styles from "./OfficeAddress.module.css"

export default function OfficeAddress() {
    return (
        <div className={styles.container}>
            <p className={styles.title}>OFFICE ADDRESS</p>
            <div className={styles.address}>
                {FOOTER_CONTENT.address.map((address) => {
                    return (
                        <div key={address.id} className={styles.both}>
                            <h1 className={styles.location} key={address.id}>{address.location}</h1>
                            <p key={address.id} className={styles.office}> {address.office} </p>
                        </div>
                    )
                })}
            </div>



        </div>
    )
}
