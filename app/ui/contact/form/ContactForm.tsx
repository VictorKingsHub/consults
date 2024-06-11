import React from 'react'
import styles from "./ContactForm.module.css"
import Link from 'next/link'
import SocialMediaLinks from '@/components/reusable/socialMediaIcons/SocialMediaLinks'

const ContactForm = () => {

    return (
        <div className={styles.container}>
            <div className={styles.address}>
                <div className={styles.intro}>
                    <h1 className={styles.links}>Quick Links</h1>
                    <p>Your way to making your best travel and educational decision</p>
                </div>
                <div className={styles.connets}>

                    <div className={`mt-3 ${styles.numbers}`}>
                        <div>
                            <Link target='-blank' href="tel:+2348028600330" className={styles.link}> +234(0)802 860 0330 </Link>
                        </div>
                        <div>
                            <Link target='-blank' href="tel:+2348037855426" className={styles.link}> +234(0)803 785 5426 </Link>
                        </div>
                        <div>
                            <Link target='-blank' href="tel:+2347025530041" className={styles.link}> +234(0)702 553 0041</Link>
                        </div>
                    </div>

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
                    <div className={styles.submit}>
                        <button type="submit" className={styles.btn}>Submit</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default ContactForm
