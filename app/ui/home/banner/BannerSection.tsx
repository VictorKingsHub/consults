'use client'
import Link from 'next/link'
import styles from './BannerSection.module.css'
import { FaAngleDoubleRight } from 'react-icons/fa'

const BannerSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <Link href={'/travels'}>
          <div className={styles.firstTitle}>Travel And Tour</div>
          <div className={styles.icon}>
            <FaAngleDoubleRight />
          </div>
        </Link>
      </div>
      <div className={styles.second}>
        <div className={styles.up}>
          <Link href={'/education'}>
            <div className={styles.upTitle}>Degrees</div>
            <div className={styles.icon}>
              <FaAngleDoubleRight />
            </div>
          </Link>
        </div>
        <div className={styles.down}>
          <Link href={'/travels'}>
            <div className={styles.downTitle}> Relaxation</div>
            <div className={styles.icon}>
              <FaAngleDoubleRight />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BannerSection
