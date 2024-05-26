"use client"
import React, { useState } from 'react'
import styles from "./PhotoSpeaks.module.css"
import Link from 'next/link'
import Image from 'next/image'


const data = [
    { id: 1, number: "01", image: "/seminar1.jpg", year: "2021 2033", title: "Educational Consulting" },
    { id: 2, number: "02", image: "/seminar2.jpg", year: "2021-2022", title: "Trained Teachers" },
    { id: 3, number: "03", image: "/seminar3.jpg", year: "2021-2022", title: "IELTS" },
    { id: 4, number: "04", image: "/seminar4.jpg", year: "2021-2022", title: "Follow Up" },
    { id: 5, number: "05", image: "/seminar6.jpg", year: "2021-2022", title: "Sponsorships" },
    { id: 6, number: "06", image: "/seminar7.jpg", year: "2021-2022", title: "Teachers Staffing" },
    { id: 7, number: "07", image: "/seminar8.jpg", year: "2021-2022", title: "Teachers Staffing" },
    { id: 8, number: "08", image: "/seminar9.jpg", year: "2021-2022", title: "Teachers Staffing" },

]

export default function PhotoSpeaksSection() {
    const [selected, setSelected] = useState(1)

    const handleSelection = (getCurrentId: any) => {
        setSelected(getCurrentId)
    }

    return (
        <div className={styles.container}>
            <div className="mb-3">
                <div className={styles.topTitle}>
                    <h1>Photo <span className={styles.speaks}>Speaks</span></h1>
                </div>
            </div>
            <div className={styles.wrapper}>
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
                <div className={styles.answer}>
                    {data.map((ans) => {
                        return (
                            <div className={styles.allAnswer} key={ans.id}>
                                {selected === ans.id && (
                                    <div className={styles.com}>
                                        <div className={styles.answeImgr}>
                                            <Image className={styles.img} src={ans.image} alt={ans.title} width={400} height={200} />
                                        </div>
                                        <div className={styles.answerText}>
                                            <h1 className={styles.title}> {ans.title}  </h1>
                                            <p className={styles.desc}>{ans.year}</p>
                                        </div>
                                    </div>
                                )
                                }
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

