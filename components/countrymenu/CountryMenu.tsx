"use client"
import React, { useState } from 'react'
import styles from "./CountryMenu.module.css"
import Link from 'next/link'
import Image from 'next/image'


export const COUNTRIES_OPTIONS = [
    // {name: "Select Country", id: 0},
    { name: "UK", photo: "/smile.jpg", link: "/UK", id: 1 },
    { name: "USA", photo: "/Screenshot_20240429-224309.png", link: "/USA", id: 2 },
    { name: "Canada", photo: "/PngItem_254346 (1).png", link: "/Canada", id: 3 },
    { name: "Australia", photo: "/3d.jpg", link: "/Australia", id: 4 },
    { name: "New Zealand", photo: "/calendar.png", link: "/NewZealand", id: 5 },
    { name: "Finland", photo: "/Screenshot_20240430-055509.png", link: "/Finland", id: 6 },
    { name: "Austria", photo: "/worldofhouse.png", link: "/Austria", id: 7 },
    { name: "Watar", photo: "/Screenshot_20240430-063123.png", link: "/Watar", id: 8 },
    { name: "Owan", photo: "/IELTS_Designed.png", link: "/Owan", id: 9 }
]


function CountryMenu() {
    const [selected, setSelected] = useState(1)
    const handleSelection = (getCurrentId: any) => {
        setSelected(getCurrentId(!selected))
    }

    return (
        <div className={styles.container}>
            <div className={styles.edu}>
            </div>
            <div className={styles.both}>
                <div className={styles.wrapper} >
                    {COUNTRIES_OPTIONS.map((list: any) => {
                        return (
                            <div key={list.name}>
                                <div>
                                    <select key={list.id} className={` ${selected === list.id ? styles.active : styles.question} `}  >

                                        <option value={list.name}></option>
                                        {list.name}
                                    </select>
                                </div>
                                <div>
                                    <Image width={300} height={300} alt={list.name} src={list.link}/>
                                </div>
                            </div>
                        )
                    })
                    }

                </div>
                <div className={styles.answer}>

                    {COUNTRIES_OPTIONS.map((list: any) => {
                        return (
                            <div className={styles.allAnswer} key={list.id}>
                                {selected === list.id && (
                                    <div className={styles.com}>
                                        <div className={styles.answerImg}>
                                            <Image className={styles.img} src={list.photo} alt={list.name} width={200} height={200} />
                                        </div>
                                        <div className={styles.answerText}>
                                            <h1 className={styles.title}> {list.name}  </h1>

                                            <div className={styles.but}>
                                                <Link href={list.link} className={styles.button}>
                                                    Go to {list.name}
                                                </Link>
                                            </div>
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

export default CountryMenu
