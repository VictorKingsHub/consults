import React from 'react'
import styles from "./IeltsTakes.module.css"
import Link from 'next/link';
// import videoSrc from 

interface IeltsTakesProps {
  subTitle: string;
  title: string;
  desc: string;
  btnBackText: string;
  btnBackLink: string;
  btnLink: string;
  btnText: string;
  videoAlt: string;
  videoSrc: any;
}

const IeltsTakes = ({ subTitle, title, desc, btnBackLink, btnBackText, btnLink, btnText, videoAlt, videoSrc }: IeltsTakesProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.texts}>
        <div className={styles.subtitle}> {subTitle} </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.desc}>
          <p>{desc}</p>
        </div>
        <div className={styles.buttons}>
          <Link href={btnBackLink} className={styles.btnBack}>
            <button> {btnBackText} </button>
          </Link>
          <Link href={btnLink} className={styles.btn}>
            <button> {btnText} </button>
          </Link>
        </div>
      </div>
      <div className={styles.image}>

      <iframe
      src="/https://www.youtube.com/watch?v=gfU1iZnjRZM"
      frameborder="0"
      allowfullscreen
    />

      </div>
    </div>
  )
}

export default IeltsTakes
