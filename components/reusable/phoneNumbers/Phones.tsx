import Link from 'next/link'
import React from 'react'
import styles from "./Phones.module.css"

export default function PhonesNumbers() {
    return (
            <div className={styles.container}>
                <Link target='-blank' href="tel:+2348028600330" className={styles.link}> +234(0)802 860 0330 </Link>
                <Link target='-blank' href="tel:+2348037855426" className={styles.link}> +234(0)803 785 5426 </Link>
                <Link target='-blank' href="tel:+2347025530041" className={styles.link}> +234(0)702 553 0041</Link>
            </div>

    )
}
