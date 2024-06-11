"use client"
import React, { useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import styles from "./WelcomeHero.module.css"
import { Button, ButtonBackground } from '@/components/reusable/button/Button'
import Image from 'next/image'

export default function WelcomeHero(){
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h1 className={styles.header}>Educational Placement and Travel & Study Abroad</h1>
                <p className={styles.description}>
                    We provide educational consultancy services for schools in Nigeria, supporting academic success and school supervision. We also offer international travel opportunities for students, individuals and groups, promoting cultural exchange and exploration.
                </p>
                <div className={styles.buttons}>
                    <div className={styles.btn}>
                        <ButtonBackground text={'Educational Consulting'} link={'/education'} />
                    </div>
                    <div className={styles.btn}>
                        <Button text={'Study and Work abroad'} link={'/travels'} />
                    </div>
                </div>
                {/* <div className={styles.img}>
                    <Image src={photo4} alt='plane' width={250} height={250} className={styles.imgplane} />
                </div> */}
            </div>

            <div className={styles.image}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/man.jpg"
                        // src="/snap.jpg"
                        width={350}
                        height={350}
                        alt='traveller'
                        className={styles.img}
                    />

                    {/* <WelcomeCarouselTravel /> */}

                </div>
            </div>
        </div>
    )
}




// export function WelcomeCarouselTravel() {

//     const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
//       Autoplay({ delay: 6000, duration: 5000, stopOnMouseEnter: true, stopOnFocusIn: true, stopOnInteraction: false }),
//     ])
  
//     useEffect(() => {
//       if (emblaApi) {
//         console.log(emblaApi.slideNodes())
//       }
//     }, [emblaApi])
  
//     return (
//       <div className="embla" ref={emblaRef} >
//         <div className="embla__container">
//           <div className="embla__slide   one"> One </div>
//           <div className="embla__slide two">  two</div>
  
  
//           <div className="embla__slide   three">Three</div>
//           <div className="embla__slide four">Four</div>
//         </div>
//       </div>
//     )
//   }