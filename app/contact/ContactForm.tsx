import React from 'react'
import styles from "./ContactForm.module.css"

const ContactForm = () => {
    return (
        <div className={styles.container}>

            <form action="" className={styles.form}>
                <div className={styles.divisions}>
                    <label htmlFor="name" className={styles.label}> Full Name</label>
                    <input type="text" name="name" placeholder='Enter your name' className={styles.input} />
                </div>
                <div className={styles.divisions}>
                    <label htmlFor="email" className={styles.label}> Full Name</label>
                    <input type="email" name="email" placeholder='Enter your email' className={styles.input} />
                </div>
                <div className={styles.divisions}>
                    <label htmlFor="message" className={styles.label}>Your Message</label>
                    <textarea name="textarea" className={styles.textarea} placeholder='type your message here' cols={30} rows={10}></textarea>
                </div>
                <button type="submit" className={styles.button}> Submit</button>
                <div className="notification mt-1 flex flex-col text-left bg-slate-100">
                    <h5 className={styles.message}>Message</h5>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
