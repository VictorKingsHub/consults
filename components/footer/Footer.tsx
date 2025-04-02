"use client";
import { FOOTER_CONTENT } from "@/components/constants";
import styles from "./Footer.module.css";
import Marquee from "react-fast-marquee";
import { IoMdTime } from "react-icons/io";
import { ButtonBackground } from "../reusable/button/Button";
import SocialMediaLinks from "../reusable/socialMediaIcons/SocialMediaLinks";
import PhonesNumbers from "../reusable/phoneNumbers/Phones";
import OfficeAddress from "../reusable/officeAddress/OfficeAddress";
import Image from "next/image";
import footerImage from "../../public/footer.jpg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <div className={styles.one}>
        <div className={styles.image}>
          <Image src={footerImage} width={300} height={200} alt="services" />
        </div>

        <div className={styles.office}>
          <OfficeAddress />
          <PhonesNumbers />
          <SocialMediaLinks />
        </div>

        <div className={styles.quick_links}>
          <h1 className={styles.title}>QUICK LINK</h1>
          {FOOTER_CONTENT.footerNav.map((nav) => {
            return (
              <div key={nav.id}>
                {" "}
                <a href={nav.link} className={styles.menu_item}>
                  {" "}
                  {nav.label}{" "}
                </a>{" "}
              </div>
            );
          })}
        </div>

        <div className={styles.opening}>
          <h1 className={styles.title}>OPENING DAYS</h1>

          <div
            className="md:text-center"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <div className={styles.time}>
              {" "}
              <span className=" text-[#f8f8f8] ">
                <IoMdTime />{" "}
              </span>{" "}
              <p className="ml-3 text-[#f8f8f8]">
                Monday - Friday: 8:00am - 5:00pm
              </p>{" "}
            </div>
            <div className={styles.time}>
              {" "}
              <span className=" text-[#f8f8f8]">
                <IoMdTime />{" "}
              </span>{" "}
              <p className="ml-3 text-[#f8f8f8]"> Saturday: 9:00am - 3:00pm </p>{" "}
            </div>
          </div>
          <div className="mt-5">
            <ButtonBackground
              text={"Request an appointment"}
              link={"/contact"}
            />
          </div>
        </div>
      </div>

      <div className={styles.last}>
        <div className={styles.two}>
          <Marquee
            pauseOnHover={true}
            pauseOnClick={true}
            gradient={true}
            gradientColor=" "
            gradientWidth={50}
          >
            <div className={styles.marque}>
              <span className="mx-[10vw]">
                An organization built on respect and integrity.
              </span>
              <span className="mx-[10vw]">
                The quality of our service makes the difference
              </span>
            </div>
          </Marquee>
        </div>
        <div className={styles.three}>
          <div className={styles.right}>
            <p>&copy; {currentYear} Riskout Consults. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
