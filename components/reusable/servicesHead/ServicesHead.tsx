import React from 'react'
import styles from "./ServicesHead.module.css"

interface ServicesHeadProps {
  title?: string;
  description?: string;
}

export function ServicesHead({  title, description, }: ServicesHeadProps) {
  return (
    <div className={styles.container}>
      <div>
        <span className={styles.title}>{title}</span>
      </div>
        <hr className={styles.hr} />
      <div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}
