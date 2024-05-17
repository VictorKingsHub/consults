import React from 'react'
import styles from "./SocialMediaLinks.module.css"
import Link from 'next/link'
import { FaFacebook, FaLinkedin, FaPhone } from 'react-icons/fa6'
import { BiLogoGmail } from 'react-icons/bi'

export default function SocialMediaLinks() {
    return (
        <div className={styles.container}>
                <div className="text-[#4da251] text-[1.2rem]" >
                    <Link target='-blank' href="tel:+2348028600330 "> <FaPhone /> </Link>
                </div>
                <div className="ml-5 text-[1.5rem] text-[#e34133]">
                    <Link target='-blank' href="mailto:riskoutconsults@gmail.com"> <BiLogoGmail /> </Link>
                </div>
                <div className="ml-5 text-[1.5rem] text-[#3d73eb]">
                    <Link target='-blank' href="https://www.facebook.com/Riskouteduconsults"> <FaFacebook /> </Link>
                </div>
                <div className="ml-5 text-[1.5rem] text-[#3c7ab6]">
                    <Link target='-blank' href="https://www.linkedin.com/in/riskout-consults-161511270"> <FaLinkedin /> </Link>
                </div>
        </div>
    )
}
