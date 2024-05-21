"use client"
import React, { useState } from 'react'
import styles from "./Team.module.css"
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook } from 'react-icons/fa6'
import { BsLinkedin, BsTelegram, BsTwitterX } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import { RiTwitterXFill } from 'react-icons/ri'

const data = [
    {
        id: 1, number: "01", image: "/director.JPG", year: "2021 2033", name: "Mr. Iyiegbu Justice", position: "Lead Consultant Riskout Consults",
        socials: [
            { id: 1, facebookIcon: <FaFacebook />, facebookLink: "https://web.facebook.com/iyiegbu.justice?_rdc=1&_rdr", LinkedinIcon: <BsLinkedin />, linkdinLink: "LinkdinLink", twitterIcon: <RiTwitterXFill />, twiiterLink: "teitterLinkinghere", gmailIcon: <SiGmail />, gmailLink: "gmail Link Here", telegramIcon: <BsTelegram />, telegramLink: "telegram Link" }
        ]
    },
    {
        id: 2, number: "02", image: "/jeja.PNG", year: "2021 2033", name: "Mrs. Efeomo Promise", position: "Jeja Edu Consults",
        socials: [
            { id: 2, facebookIcon: <FaFacebook />, facebookLink: "https://web.facebook.com/iyiegbu.justice?_rdc=1&_rdr", LinkedinIcon: <BsLinkedin />, linkdinLink: "LinkdinLink", twitterIcon: <BsTwitterX />, twiiterLink: "teitterLinkinghere", gmailIcon: <SiGmail />, gmailLink: "gmail Link Here", telegramIcon: <BsTelegram />, telegramLink: "telegram Link" }
        ]
    },
    { id: 3, number: "03", image: "/mma.PNG", year: "2021 2033", name: "Ms. Chidinma Idika", position: "Riskout Consults Admin", },
    { id: 4, number: "04", image: "/banky.JPG", year: "2021 2033", name: "Mr. Blessed Banky", position: "Riskout Consults Educator", },
    { id: 5, number: "05", image: "/resilient.JPG", year: "2021 2033", name: "Ms. Resilient Mentor", position: "Diction instructor/ Mental Health Advocate", },
    { id: 6, number: "06", image: "/chioma.JPG", year: "2021 2033", name: "Mrs. Chioma Michael", position: "Riskout Educator", },
    { id: 7, number: "07", image: "/henry.JPEG", year: "2021 2033", name: "Mr. Henry Chinonso", position: "Riskout IELTS Instructor/Media Manager", },

]

export default function TeamSection() {
    const [selected, setSelected] = useState(1)

    const handleSelection = (getCurrentId: any) => {
        setSelected(getCurrentId)
    }

    return (
        <div className={styles.container}>
            <div className="mb-3">
                <div className={styles.topTitle}>
                    <h1>Our <span className={styles.speaks}>Creative Team</span></h1>
                </div>
            </div>
            <div className={styles.wrapper}>

                <div className={styles.answer}>
                    {data.map((ans) => {
                        return (
                            <div className={styles.allAnswer} key={ans.id}>
                                {selected === ans.id && (
                                    <div className={styles.com}>
                                        <div className={styles.answerImg}>
                                            <Image className={styles.img} src={ans.image} alt={ans.name} width={400} height={200} />
                                        </div>
                                        <div className={styles.answerText}>
                                            <h1 className={styles.title}> {ans.name}  </h1>
                                            <p className={styles.desc}>{ans.position}</p>

                                            <div >
                                                {  ans.socials?.map((icon) => {
                                                    return (
                                                        <div key={icon.id} className={styles.socialIcons}>
                                                            <span className={styles.facebook}>
                                                                <Link href={icon.facebookLink}>
                                                                    {icon.facebookIcon}
                                                                </Link>
                                                            </span>
                                                            <span className={styles.linkdin}>
                                                                <Link href={icon.linkdinLink}>
                                                                    {icon.LinkedinIcon}
                                                                </Link>
                                                            </span>
                                                            <span className={styles.gmail}>
                                                                <Link href={icon.gmailLink}>
                                                                    {icon.gmailIcon}
                                                                </Link>
                                                            </span >
                                                            <span className={styles.telegram}>
                                                                <Link href={icon.telegramLink}>
                                                                    {icon.telegramIcon}
                                                                </Link>
                                                            </span>
                                                            <span className={styles.x}>
                                                                <Link href={icon.twiiterLink}>
                                                                    {icon.twitterIcon}
                                                                </Link>
                                                            </span>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )
                                }
                            </div>
                        )
                    })}
                </div>

                <div className={styles.year}>
                    {data.map((dedicate) => {
                        return (
                            <div key={dedicate.id}>
                                <div className={` ${selected === dedicate.id ? styles.active : styles.question}`}
                                    onClick={() => handleSelection(dedicate.id)}>
                                    <div > {dedicate.number} </div>
                                </div>
                            </div>
                        )
                    })
                    }

                </div>

            </div>
        </div>
    )
}

