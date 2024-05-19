import { REVIEW } from '@/app/constants'
import Image from 'next/image'
import React from 'react'
import styles from "./reviewSection.module.css"
import { ServicesHead } from '@/app/components/reusable/servicesHead/ServicesHead'

const Review = () => {
  return (
    <div className={styles.container}>
      <div className={styles.h1}>
        <h1>Clients' Review</h1>
      </div>
      <div className={styles.client_comment}>
        {REVIEW.map((item) => {
          return (
            <div className={styles.client} key={item.id} >
              <div className={styles.fz} >
                <div>
                  <Image src={item.img} alt={item.name} width={50} height={50} className={styles.img} />
                </div>
                <div className={styles.details}>
                  <span className={styles.name}> {item.name} </span>
                  <span className={styles.prof}> {item.professionn}</span>
                </div>
              </div>
              <div className={styles.comment}>  {item.Comment}  </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Review
