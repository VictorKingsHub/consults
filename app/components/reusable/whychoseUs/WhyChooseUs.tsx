import React from 'react'
import styles from "./WhyChooseUs.module.css"
import Image from 'next/image'

interface whyChooseUsProps {
  img: any;
  why: string;
  us: string;
  icon1?: any;
  icon2?: any;
  icon3?: any;
  icon4?: any;
  icon5?: any;
  icon6?: any;
  label1?: string;
  label2?: string;
  label3?: string;
  label4?: string;
  label5?: string;
  label6?: string;
  description1?: string;
  description2?: string;
  description3?: string;
  description4?: string;
  description5?: string;
  description6?: string
}
const WhyChooseUs = ({ img, why, us, icon1, icon2, icon3, icon4, icon5, icon6, label1, label2, label3, label4, label5, label6, description1, description2, description3, description4, description5, description6 }: whyChooseUsProps) => {


  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <div className={styles.imageWrapper}>
          <Image
            src={img}
            width={350}
            height={350}
            alt='traveller'
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.text}>
        <div className={styles.title}>
          <span className={styles.why}>{why}</span>{us}
        </div>
        <div className={styles.wrapper}>
          <div className={styles.both}>
            <div className={styles.iconWrapperO}>
              <div className={styles.iconO}> {icon1} </div>
            </div>
            <div className={styles.texts}>
              <div className={styles.label}>
                {label1}
              </div>
              <div className={styles.desc}>
                {description1}
              </div>
            </div>
          </div>
          <div className={styles.both}>
            <div className={styles.iconWrapperE}>
              <div className={styles.iconE}> {icon2} </div>
            </div>
            <div className={styles.texts}>
              <div className={styles.label}>
                {label2}
              </div>
              <div className={styles.desc}>
                {description2}
              </div>
            </div>
          </div>
          <div className={styles.both}>
            <div className={styles.iconWrapperO}>
              <div className={styles.iconO}> {icon3} </div>
            </div>
            <div className={styles.texts}>
              <div className={styles.label}>
                {label3}
              </div>
              <div className={styles.desc}>
                {description3}
              </div>
            </div>
          </div>
          <div className={styles.both}>
            <div className={styles.iconWrapperE}>
              <div className={styles.iconE}> {icon4} </div>
            </div>
            <div className={styles.texts}>
              <div className={styles.label}>
                {label4}
              </div>
              <div className={styles.desc}>
                {description4}
              </div>
            </div>
          </div>
          <div className={styles.both}>
            <div className={styles.iconWrapperO}>
              <div className={styles.iconO}> {icon5} </div>
            </div>
            <div className={styles.texts}>
              <div className={styles.label}>
                {label5}
              </div>
              <div className={styles.desc}>
                {description5}
              </div>
            </div>
          </div>
          <div className={styles.both}>
            <div className={styles.iconWrapperE}>
              <div className={styles.iconE}> {icon6} </div>
            </div>
            <div className={styles.texts}>
              <div className={styles.label}>
                {label6}
              </div>
              <div className={styles.desc}>
                {description6}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
