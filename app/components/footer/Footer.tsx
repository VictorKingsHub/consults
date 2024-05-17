"use client"

import { FOOTER_CONTENT } from "@/app/constants"
import styles from "./Footer.module.css"
import Link from "next/link"
import Marquee from "react-fast-marquee";
// import ReactPlayer from 'react-player'

import { FaLinkedin } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { ButtonBackground } from "../reusable/button/Button";
import SocialMediaLinks from "../reusable/socialMediaIcons/SocialMediaLinks";
import PhonesNumbers from "../reusable/phoneNumbers/Phones";
import OfficeAddress from "../reusable/officeAddress/OfficeAddress";

export default function Footer() {
  return (
    <div className={styles.container}>

      <div className={styles.one}>
        <div className={styles.video}>
          <video controls={true} muted={true} width="280px" height="250px">
            <source src="https://www.youtube.com/watch?v=LXb3EKWsInQ" />
          </video>
        </div>
        <div className={styles.office}>

        <OfficeAddress />
{/*           
          <h1 className={styles.title}>OFFICE ADDRESS</h1>

          <div className={styles.address}>
            {FOOTER_CONTENT.address.map((address) => {
              return (
                <div key={address.id} className={styles.menu_item_title}>
                  <p key={address.id}> {address.office} </p>
                </div>
              )
            })}
          </div> */}

          <PhonesNumbers />

          <SocialMediaLinks />

        </div>
        <div className={styles.quick_links}>
          <h1 className={styles.title} >QUICK LINK</h1>
          {FOOTER_CONTENT.footerNav.map((nav) => {
            return (<div key={nav.id}> <a href={nav.link} className="menu_item" > {nav.label} </a> </div>)
          })}
        </div>
        <div className={styles.opening}>
          <h1 className={styles.title} >OPENING DAYS</h1>

          <div className="md:text-center" style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
            <div className={styles.time}> <span className=" text-gray-500 "><IoMdTime /> </span> <p className="ml-3 ">Monday - Friday: 8:00am - 5:00pm</p>  </div>
            <div className={styles.time}> <span className=" text-gray-500"><IoMdTime /> </span> <p className="ml-3"> Saturday: 9:00am - 3:00pm </p>  </div>
          </div>
          <div className="mt-5">
            <ButtonBackground text={"Request an apointment"} link={"/contact"} />
          </div>

        </div>
      </div>

      <div className={styles.last}>
        <div className={styles.two}>
          <Marquee pauseOnHover={true} pauseOnClick={true} gradient={true} gradientColor=" " gradientWidth={50} >
            <div className={styles.marque} >The Best Travel and Educational consulting firm</div>
          </Marquee>
        </div>
        <div className={styles.three}>
          <div className={styles.right}>©2024. Riskoutconsults.com. All Rights Reserved.</div>
        </div>
      </div>
    </div>
  )
}