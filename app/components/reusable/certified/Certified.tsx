import React from 'react'
import styles from "./Certified.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { ButtonBackground } from '../button/Button';

interface GetCertifiedProps {
    label1: string;
    label2: string;
    desc1: string;
    desc2?: string;
    connect: string;
    imgSrc: any;
    link: string;
    alt: string;
    labelSP?: string;
    l1: string;
    l2: string;
    l3: string;
    l4: string;
    l5: string;
    l6: string;

}

const GetCertified = ({ label1, label2, labelSP, desc1, desc2, connect, imgSrc, link, alt, l1, l2, l3, l4, l5, l6 }: GetCertifiedProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.texts}>
                <div className={styles.one}>
                    <h1 className={styles.label}> {label1} <span className={styles.labelSP}>{labelSP}</span></h1>
                    <p className={styles.desc}> {desc1} </p>
                </div>
                <div className={styles.two}>
                    <h1 className={styles.label2}> {label2}</h1>

                        <p className={styles.desc2}> {desc2} </p>
                    <div className={styles.uls}>
                        <ul >
                            <li className={styles.l}>{l1}</li>
                            <li className={styles.l}>{l2}</li>
                            <li className={styles.l}>{l3}</li>
                        </ul>
                        <ul >
                            <li className={styles.l}>{l4}</li>
                            <li className={styles.l}>{l5}</li>
                            <li className={styles.l}>{l6}</li>
                        </ul>
                    </div>

                </div>
                <div className={styles.three}>
                    <ButtonBackground text={connect} link={link} />
                </div>
            </div>
            <div className={styles.image}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={imgSrc}
                        alt={alt}
                        width={300}
                        height={300}
                        className={styles.img} />
                </div>
            </div>
        </div>
    )
}

export default GetCertified
