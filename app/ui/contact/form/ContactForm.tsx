'use client'
import React, { useState } from 'react'
import styles from './ContactForm.module.css'
import Link from 'next/link'
import SocialMediaLinks from '@/components/reusable/socialMediaIcons/SocialMediaLinks'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false)


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = {
      name,
      phoneNumber,
      email,
      message
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setFormSubmitted(true)
      setName('')
      setPhoneNumber('')
      setEmail('')
      setMessage('')
    } catch (error) {
      console.error(error)
      // Handle errors gracefully (e.g., display an error message to the user)
    }
  }

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
              <Link
                target='-blank'
                href='tel:+2348028600330'
                className={styles.link}
              >
                {' '}
                +234(0)802 860 0330{' '}
              </Link>
            </div>
            <div>
              <Link
                target='-blank'
                href='tel:+2348037855426'
                className={styles.link}
              >
                {' '}
                +234(0)803 785 5426{' '}
              </Link>
            </div>
            <div>
              <Link
                target='-blank'
                href='tel:+2347025530041'
                className={styles.link}
              >
                {' '}
                +234(0)702 553 0041
              </Link>
            </div>
          </div>

          <SocialMediaLinks />
        </div>
      </div>

      <div className={styles.formsection}>
        <div className={styles.fill}>
          {' '}
          <p> Please, fill out the form </p>{' '}
        </div>
        <form className={styles.form}>
          <div>
            <label htmlFor='name'> Name</label>
            <input
              type='text'
              name='name'
              id='name'
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder='Enter Your Name'
              required
            />
          </div>
          <div>
            <label htmlFor='phoneNumber'> Phone number</label>
            <input
              type='tel'
              id='phoneNumber'
              name='phoneNumber'
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
              placeholder='Enter Your Phone'
              required
            />
          </div>
          <div>
            <label  htmlFor="email"> Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='Enter Your Email'
              required
            />
          </div>
          <div>
            <label> Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter Your Message Here"
              required
            ></textarea>
          </div>
          <div className={styles.submit}>
          <button type="submit" className={styles.btn} disabled={formSubmitted}>
              {formSubmitted ? 'Submitted' : 'Submit'}
            </button>
          </div>
        </form>

        {formSubmitted && (
          <p className={styles.successMessage}>
            Your message has been sent successfully!
          </p>
        )}
        
      </div>
    </div>
  )
}

export default ContactForm
