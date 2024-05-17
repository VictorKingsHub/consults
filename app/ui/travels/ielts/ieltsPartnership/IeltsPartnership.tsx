import React from 'react'
import styles from "./IeltsPartnership.module.css"
import Image from 'next/image'

const Partners = [
    { label: "Cambridge English", img: "/CambridgeEnglish.PNG", id: 1 },
    { label: "British Council", img: "/britishCounsilL.JPG", id: 2 },
    { label: "IDP", img: "/idp.PNG", id: 3 }
]

const IeltsPartnership = () => {
    return (
        <div className={styles.container}>
            <div className={styles.up}>
                <div className={styles.left}>
                    <h1 className={styles.title}>A global partnership
                    </h1>
                </div>
                <div className={styles.right}> <p>Jointly owned by the British Council; IDP IELTS; and Cambridge University Press & Assessment - IELTS combines global presence with a commitment to academic research.</p> </div>
            </div>
            <div className={styles.down}>
                {Partners.map((partner) => {
                    return (
                        <div className={styles.partner}>
                            <div className={styles.img}>
                                <Image src={partner.img} width={300} height={300} alt={partner.label} key={partner.id} />
                            </div>
                            <span className={styles.title}>{partner.label}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default IeltsPartnership
