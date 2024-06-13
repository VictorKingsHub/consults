import React from 'react'
import styles from "./cambridgeFAQ.module.css"

const CambridgeFAQ = () => {
    return (
        <div className={styles.container}>
            <div className={styles.keyPoints}>
                <div className={styles.one}>
                    <h1>KEY BENEFITS</h1>
                    <p>The Cambridge International Curriculum is based on set of common principles underpinned by the best educational and assessment practice. It is international in it’s outlook and commitment. </p>
                    <ul>
                        <li>Quality and coherence delivery</li>
                        <li> Professional Assesment Standards </li>
                        <li> High Professional Resources </li>
                        <li> Training and Professional Development </li>
                        <li> A Partnership Approach </li>
                    </ul>
                </div>
                <div className={styles.two}>
                    <h1>FEATURING</h1>
                    <p>The Cambridge International Curriculum is based on set of common principles underpinned by the best educational and assessment practice. It is international in it’s outlook and commitment. </p>
                    <ul>
                        <li>  Overview of British Curriculum (EYFS, Cambridge, Pearson-Edexel, etc)</li>
                        <li> EYFS statutory framework </li>
                        <li> Relativities of core skills of learning, Bloom Taxonomy and learning differentiation in British Curriculum</li>
                        <li> Child initiated learning in the EYFS</li>
                        <li> Preparing lesson plan in the British curriculum way</li>
                        <li> Table-top Activities in EYFS</li>
                        <li>  Content pedagogy of Cambridge Primary, lower Secondary, upper Secondary and Advanced</li>
                        <li>  Evaluation Technically of setting Questions in British Curriculum </li>
                        <li> Review of past questions and marking guide</li>
                    </ul>
                </div>
            </div>
            <div className={styles.FAQ}></div>
        </div>
    )
}

export default CambridgeFAQ
