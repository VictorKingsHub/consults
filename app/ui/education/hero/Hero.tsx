"use client"
import React, { useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import "./hero.css"
import Link from 'next/link'
import { ButtonBackground } from '@/app/components/reusable/button/Button'

export default function EmblaCarouselEducation() {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 10000, duration: 5000, stopOnMouseEnter: true, stopOnFocusIn: true, stopOnInteraction: false }),
  ])

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes())
    }
  }, [emblaApi])

  return (
    <div className="embla" ref={emblaRef} >
      <div className="embla__container">
        <div className="embla__slide   one">
          <div className="left">

            <div className="header">
              <p className="title"> We Offer The Best Educatioinal Consulting Across The Globe </p>
            </div>
            <div className="desc">
              <p>We are concerned with your education.

                <br /> The right to education is legally guaranteed for all without any discrimination  </p>
            </div>

            {/* <div className="buttons">
              <ButtonBackground text={'Scholarships'} link={'/scholarships'} />
              <a target="_blank" href={'//docs.google.com/forms/d/e/1FAIpQLSdlBms6yTvPvwZv2QRcnJJkMu5_21hoZoYtowBCecPD6j3LUQ/viewform'} rel="noopener noreferrer">
                <button className="connect"> Get Started</button>
              </a>
              <ButtonBackground text={'Trained Teachers'} link={'trainedteachers'} />
            </div> */}
            <div className="icon">
            </div>
          </div>
          <div className="right">

          </div>

        </div>
        <div className="embla__slide two"></div>


        <div className="embla__slide   three">
          <div className="header">
            <p className="title"> Gain The Right Education </p>
          </div>
          <div className="subMenu">
            <p> You stand to get access to education suitable to your intesrets, <br /> well allign to your appreciation and gratitude <br />  All you need is to  <span className='text-[#FFA500]'>connect</span> with us today. </p>
          </div>
          <div className="desc">
            <p> Visa Processing, Job security, Risk Assesment, Travel Insurance, Risk Management, IELTS exams </p>
          </div>

          <div className="buttons">
            {/* <a href={'//docs.google.com/forms/d/e/1FAIpQLSdlBms6yTvPvwZv2QRcnJJkMu5_21hoZoYtowBCecPD6j3LUQ/viewform'} target='_blank' rel="noopener noreferrer">
              <button className="connect"> Register Today</button>
            </a> */}
            <ButtonBackground text={'Make Inquiry'} link={'/contact'} />
          </div>
          <div className="icon">
          </div>
        </div>

        <div className="embla__slide four"></div>
      </div>
    </div>
  )
}
