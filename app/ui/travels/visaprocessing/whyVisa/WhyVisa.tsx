import React from 'react'
import styles from "./WhyVisa.module.css"
import { FaUserFriends } from 'react-icons/fa'
import { FaMartiniGlassCitrus } from 'react-icons/fa6'
import { BsSubtract } from 'react-icons/bs'

const WhyUs = [
  {label: "Affordability", icon:  <FaUserFriends /> , desc: "You can benefit from the agent's expertise and experience, as well as the knowledge of the latest migration policies and procedures. This can help to ensure that your Visa application is as strong as possible and minimize the risk of delay or refusal. We provide our clients with clear, straight forward advice and aim to simplify the Visa processing for you, saving you from unnecessary expenses and delays", id: 1},
  {label: "Accreditation", icon: <FaMartiniGlassCitrus />, desc: "The process of applying for an accredited employer status through immigration can be complicated but Riskout Travels will help simplify it by walking you through everything you need to know about the process from becoming accredited to applying for the Accredited Employer Work Visa (AEWV) on behalf of your skilled workers. We will help you with every step in the journey", id: 2},
  {label: "Track Record", icon: <BsSubtract />, desc: "The process of applying for an accredited employer status through immigration can be complicated but Riskout Travels will help simplify it by walking you through everything you need to know about the process from becoming accredited to applying for the Accredited Employer Work Visa (AEWV) on behalf of your skilled workers. We will help you with every step in the journey", id: 2}
]

const WhyVisa = () => {
  return (
    <div className={styles.container}>
      {WhyUs.map((why) => {
        return (
          <div className={styles.why} key={why.id}>
            <div className={styles.icon} key={why.id}> {why.icon} </div>
            <p className={styles.title} > {why.label}</p>
            <div className={styles.desc} > {why.desc} </div>
          </div>
        )
      })}
    </div>
  )
}

export default WhyVisa
