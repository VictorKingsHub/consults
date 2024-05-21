import React from 'react'
import styles from "./ContactForm.module.css"
import PhonesNumbers from '@/app/components/reusable/phoneNumbers/Phones'
import SocialMediaLinks from '@/app/components/reusable/socialMediaIcons/SocialMediaLinks'

const ContactForm = () => {
    return (
        <div className={styles.container}>
            <div className={styles.address}>
                <div className={styles.intro}>
                    <h1 className={styles.links}>Quick Links</h1>
                    <p>Your way to making your best travel and educational decision</p>
                </div>
                <div className={styles.connets}>
                    <PhonesNumbers />
                    <SocialMediaLinks />
                </div>
            </div>

            <div className={styles.formsection}>
                <div className={styles.fill}> <p> Please, fill out the form </p> </div>
                <form className={styles.form}>
                    <div>
                        <label > Name</label>
                        <input type="text" name="Your Name" placeholder='Enter Your Name' />
                    </div>
                    <div>
                        <label > Phone number</label>
                        <input type="number" name="your Phone" placeholder='Enter Your Phone' />
                    </div>
                    <div>
                        <label > Email</label>
                        <input type="text" name="your Phone" placeholder='Enter Your Phone' />
                    </div>
                    <div>
                        <label > Message</label>
                        <textarea cols={50} rows={5} placeholder='Enter Your Message Here'>
                        </textarea>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default ContactForm
