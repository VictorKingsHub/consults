import React from 'react'
import styles from "./Partnerships.module.css"
import Image from 'next/image'


const Partnership = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>Our Parnerships</p>
      </div>
      <div className={styles.logos}>
        <div className={styles.part}>
          <Image src={"/visa.png"} alt='Visa' width={300} height={300} className={styles.img} />
        </div>
        <div className={styles.part}>
          <Image src={"/visa.png"} alt='Visa' width={300} height={300} className={styles.img} />
        </div>
        <div className={styles.part}>
          <Image src={"/visa.png"} alt='Visa' width={300} height={300} className={styles.img} />
        </div>
        <div className={styles.part}>
          <Image src={"/visa.png"} alt='Visa' width={300} height={300} className={styles.img} />
        </div>
        <div className={styles.part}>
          <Image src={"/visa.png"} alt='Visa' width={300} height={300} className={styles.img} />
        </div>
        <div className={styles.part}>
          <Image src={"/visa.png"} alt='Visa' width={300} height={300} className={styles.img} />
        </div>
        <div className={styles.part}>
          <Image src={"/visa.png"} alt='Visa' width={300} height={300} className={styles.img} />
        </div>
        <div className={styles.part}>
          <Image src={"/visa.png"} alt='Visa' width={300} height={300} className={styles.img} />
        </div>
        <div className={styles.part}>
          <Image src={"/visa.png"} alt='Visa' width={300} height={300} className={styles.img} />
        </div>
      </div>

    </div>
  )
}

export default Partnership
