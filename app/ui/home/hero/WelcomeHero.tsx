"use client";
import React, { useEffect, useRef } from "react";
import styles from "./WelcomeHero.module.css";
import { Button, ButtonBackground } from "@/components/reusable/button/Button";
import Image from "next/image";
import gsap from "gsap";

export default function WelcomeHero() {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const imageDivRef = useRef<HTMLDivElement>(null);
  const textDivRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (headerRef.current && textDivRef.current) {
      const originalText = headerRef.current.textContent || ""; // Add null check and fallback
      let animatedText = "";
      let charIndex = 0;

      gsap.to(
        {},
        {
          duration: 2,
          onUpdate: () => {
            if (charIndex < originalText.length) {
              animatedText += originalText[charIndex];
              headerRef.current!.textContent = animatedText; // Use non-null assertion
              charIndex = Math.floor(
                (charIndex + 1) * (originalText.length / originalText.length)
              );
            }
            if (charIndex >= originalText.length) {
              gsap.killTweensOf({});
            }
          },
          ease: "linear",
          onStart: () => {
            gsap.to(textDivRef.current, { opacity: 1, duration: 0.5 });
          },
        }
      );
    }

    if (imageDivRef.current && imageRef.current) {
      gsap.to(imageDivRef.current, {
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        onComplete: () => {
          gsap.to(imageRef.current, {
            scale: 1.05,
            duration: 0.2,
            yoyo: true,
            repeat: 1,
            ease: "power1.inOut",
          });
        },
      });
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.text} ref={textDivRef}>
        <h1 className={styles.header} ref={headerRef}>
          Educational Placement and Travel & Study Abroad
        </h1>
        <p className={styles.description}>
          We provide educational consultancy services for schools in Nigeria,
          supporting academic success and school supervision. We also offer
          international travel opportunities for students, individuals and
          groups, promoting cultural exchange and exploration.
        </p>
        <div className={styles.buttons}>
          <div className={styles.btn}>
            <ButtonBackground
              text={"Educational Consulting"}
              link={"/education"}
            />
          </div>
          <div className={styles.btn}>
            <Button text={"Study and Work abroad"} link={"/travels"} />
          </div>
        </div>
      </div>

      <div className={styles.image} ref={imageDivRef}>
        <div className={styles.imageWrapper}>
          <Image
            ref={imageRef}
            src="/man.jpg"
            width={350}
            height={350}
            alt="traveller"
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
}