import React from 'react'
import ContactForm from './ContactForm'
import Address from './Address'
import styles from "./page.module.css"

const contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Contact Us</h1>
      <p className={styles.fill}>Fill out the form below</p>
      <hr />

      <div className={styles.component}>
        <ContactForm />
        <Address />
      </div>
    </div>
  )
}

export default contact
