import React from 'react'
import styles from "./ContactProfile.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { BiLogoGmail } from 'react-icons/bi'

const ContactProfile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={"/ielts2.jpg"} alt='Customer care photo' width={300} height={300} className={styles.img} />
      </div>
      <div className={styles.texts}>
        <h1 className={styles.label}>Speak With Customer Care</h1>
        <div className={styles.contacts}>
          <p>
            <span className='text-blue-800'> Phones: </span>
            <Link target='-blank' href="tel:+2348037855426" className={styles.link} > +234803 785 5426 </Link> ,
            <Link target='-blank' href="tel:+2348037995433" > +234803 785 0000 </Link>
          </p>
          <hr />
          <p>
            <span className='text-blue-800'> Email: </span>
            <Link target='-blank' href="mailto:riskoutconsults@gmail.com" className='pl-3'> riskoutconsults@gmail.com </Link>
          </p>
          <hr />
          <p>
            <span className='text-blue-800'> Time Available: </span>
            <span className='ml-3'> 8am - 4pm</span>
          </p>
          <hr style={{color: "red", borderBlockColor: "red"}} />
          <p>
            <span className='text-blue-800'> Days Available: </span> <span className='ml-3'>
              Mondays - Sundays
            </span>
          </p>
          <hr />
        </div>
      </div>
    </div>
  )
}

export default ContactProfile
