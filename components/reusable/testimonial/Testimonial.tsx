import React from 'react'
import styles from "./Testimonial.module.css"
import Image from 'next/image'

interface testimonialProps {
  topHeader: string;
  topDesc: string;
  name1: string;
  prof1: string;
  img1: any;
  desc1: string;
  name2: string;
  prof2: string;
  img2: any;
  desc2: string;
  name3: string;
  prof3: string;
  desc3: string;
  img3: any;
}

const Testimonial = ({ topHeader, topDesc, desc1, desc2, desc3, name1, prof1, img1, name2, prof2, img2, name3, prof3, img3 }: testimonialProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.popular}>
        <div className={styles.toplabel}> {topHeader}</div>
        <div className={styles.topDesc}>
          {topDesc}
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.testimony}>
          <div className={styles.about}>
            <div className={styles.img}>
              <Image src={img1} width={50} height={50} alt='first testimonial' className={styles.photo} />
            </div>
            <div className={styles.details}>
              <div className={styles.name}>{name1}</div>
              <div className={styles.prof}>{prof1}</div>
            </div>
          </div>
          <div className={styles.desc}>
            <p>{desc1}</p>
          </div>
        </div>

        <div className={styles.testimony}>
          <div className={styles.about}>
            <div className={styles.img}>
              <Image src={img2} width={50} height={50} alt='first testimonial' className={styles.photo} />
            </div>
            <div className={styles.details}>
              <div className={styles.name}>{name2}</div>
              <div className={styles.prof}>{prof2}</div>
            </div>
          </div>
          <div className={styles.desc}>
            <p>{desc2}</p>
          </div>
        </div>

        <div className={styles.testimony}>
          <div className={styles.about}>
            <div className={styles.img}>
              <Image src={img3} width={50} height={50} alt='first testimonial' className={styles.photo} />
            </div>
            <div className={styles.details}>
              <div className={styles.name}>{name3}</div>
              <div className={styles.prof}>{prof3}</div>
            </div>
          </div>
          <div className={styles.desc}>
            <p>{desc3}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Testimonial
