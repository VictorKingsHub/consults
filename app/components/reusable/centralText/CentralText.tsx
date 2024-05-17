import React from 'react'
import styles from "./CentralText.module.css"
import Link from 'next/link';
import { ButtonBackground } from '../button/Button';
interface TextColumnComponentProps {
    subTitle?: string;
    title?: string;
    title2?: string;
    description?: string;
    link?: string;
    text?: string;
}

export function CentralText({ subTitle, title, title2, description, link, text }: TextColumnComponentProps) {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div>
                    <span className={styles.subtitle}>{subTitle}</span>
                </div>
                <div>
                    <h1 className={styles.title}>{title} <span className={styles.title2}>{title2}</span> </h1>
                </div>
                <div>
                    <hr className={styles.hr} />
                </div>
                <div>
                    <p className={styles.description}>{description}</p>
                </div>
                <div>
                    <hr className={styles.hr} />
                </div>
                <div className="mt-3">
                    {link && <ButtonBackground text={'Connect With Us'} link={"/about"} />
                    }

                </div>
            </div>
        </div>
    )
}
