"use client"
import React, { useState } from 'react'
import styles from "./Faq.module.css"

const data = [
    {
        id: 0, question: "What is Cambridge Curriculum?", answer: "The Cambridge International Curriculum was introduced by Cambridge Assessment International Education, a globally recognized provider of international qualifications. This curriculum shapes an individualapos;s education from age five to 19 and allows them to focus on subjects based on their strengths and interests." 
    },
    {
        id: 1, question: "What is the Cambridge method of teaching?", answer: "The framework describes four stages of a teacher's development (Foundation, Developing, Proficient and Expert) across five categories of teacher knowledge and skills: Learning and the Learner. Teaching, Learning and Assessment. Language Ability."
    },
    { 
        id: 2, question: "How are courses taught in Cambridge", answer: "Most of your teaching will take place in person. In other cases, where there are good reasons to do so, a blend of in-person and online teaching is delivered. At Cambridge, you'll also attend supervisions, a system of personal tuition that is one of our greatest strengths." 
    },
    {
         id: 3, question: "Why choose Cambridge Curriculum?", answer: "A Cambridge education prepares students for life, helping them develop an informed curiosity and a lasting passion for learning. Schools can shape a Cambridge curriculum around how they want their students to learn, helping them discover new abilities and a wider world."
     },
    {
        id: 4, question: "What is IGCSE", answer: "Answer 4The International General Certificate of Secondary Education is an English language-based examination programme designed for international students ages 14 to 16 years old, preparing them for continued and higher education." 
},
]

function Faq() {
    const [selected, setSelected] = useState(0)

    const handleSelection = (getCurrentId: any) => {
        setSelected(getCurrentId === selected ? getCurrentId : getCurrentId)
    }

    console.log(selected)

    return (
        <div className={styles.container}>
            <div className={styles.name}>FAQ</div>
            <div className={styles.all}>
                {data && data.length > 0 ?
                    data.map((list) => {
                        return (
                            <div key={list.id} className={styles.wrapper}>
                                <div className={styles.question}
                                    onClick={() => handleSelection(list.id)}>
                                    <div> {list.question} </div>
                                    <div> {selected === list.id ? "-" : "+"} </div>
                                </div>
                                <div className={selected === list.id ? `${styles.answer}` : ""} >
                                    {selected === list.id && (
                                        list.answer
                                    )
                                    }
                                </div>
                            </div>
                        )
                    }) :
                    <div>{null}</div>
                }
            </div>
        </div>
    )
}

export default Faq
