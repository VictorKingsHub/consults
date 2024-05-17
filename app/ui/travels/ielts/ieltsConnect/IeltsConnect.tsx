import React from 'react'
import styles from "./IeltsConnect.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedin, FaPhone } from 'react-icons/fa6'
import { BiLogoGmail } from 'react-icons/bi'


import { FaSquareWhatsapp, FaTelegram, FaFacebook } from "react-icons/fa6";

const IeltsConnect = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src="/lovely2.jpg" alt='image' width={270} height={300} />
      </div>
      <div className={styles.texts}>
        <div className={styles.label}>
          Join Our Community
        </div>
        <div className={styles.desc}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quasi debitis sequi, eaque quibusdam alias corporis laborum consequatur deserunt natus iste quam mollitia inventore ipsa nemo porro. Repellendus, sint id!</p>
        </div>
        <div className={styles.buttons}>
          <div className={styles.istBtns}>
            <Link target='-blank' href={"tel:+2348028600330"} className={styles.btn}>
              <span> Phone </span> <span><FaPhone /></span>
            </Link>
            <Link target='-blank' href={"https://www.facebook.com/Riskouteduconsults"} className={styles.btn}>
              <span> Facebook </span> <span><FaFacebook /></span>
            </Link>
          </div>
          <div className={styles.secondBtns}>

            <Link target='-blank' href={"https://www.linkedin.com/in/riskout-consults-161511270"} className={styles.btn}>
              <span>  Linkedin </span> <span> <FaLinkedin /> </span>
            </Link>
            <Link target='-blank' href="mailto:riskoutconsults@gmail.com" className={styles.btn}>
              <span>  Mail </span> <span> <BiLogoGmail /> </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IeltsConnect
