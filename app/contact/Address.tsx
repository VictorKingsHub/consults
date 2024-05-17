import React from 'react'
import { FOOTER_CONTENT } from '../constants'
import Link from 'next/link'
import { FaFacebook, FaLinkedin, FaPhone } from 'react-icons/fa6'
import { BiLogoGmail } from 'react-icons/bi'
import styles from "./Address.module.css"
import SocialMediaLinks from '../components/reusable/socialMediaIcons/SocialMediaLinks'
import PhonesNumbers from '../components/reusable/phoneNumbers/Phones'
import OfficeAddress from '../components/reusable/officeAddress/OfficeAddress'

const Address = () => {
    return (
        <div className={styles.container}>
            <OfficeAddress />
            <div className={styles.contacts}>
                <PhonesNumbers />
                <SocialMediaLinks />
            </div>
        </div>
    )
}

export default Address
