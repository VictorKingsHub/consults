"use client"
import React, { useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import "./hero.css"
import { ButtonBackground } from '@/components/reusable/button/Button'

export default function EmblaCarouselTravel() {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, duration: 5000, stopOnMouseEnter: true, stopOnFocusIn: true, stopOnInteraction: false }),
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
              <p className="title"> Travel, Study and Work Conveniently </p>
            </div>
            <div >
              <p className="desc">You stand to gain the best travel experience with Riskout Consults. <br />  All you need is to  <span className='text-[#FFA500]'>connect</span> with us today. </p>
            </div>
            <div className="buttons">
              <span className="btn">
                <ButtonBackground text={'IELTS Exams'} link={'/travels/ielts'} />
              </span>
              {/* <a target="_blank" href={'//docs.google.com/forms/d/e/1FAIpQLSdlBms6yTvPvwZv2QRcnJJkMu5_21hoZoYtowBCecPD6j3LUQ/viewform'} rel="noopener noreferrer">
                <button className="connect"> Connect With Us</button>
              </a> */}
              <span className="btn">
                <ButtonBackground text={'Scholarship'} link={'scholarships'} />
              </span>
            </div>
            <div className="icon">
            </div>
          </div>
          <div className="right">

          </div>

        </div>
        <div className="embla__slide two"></div>


        <div className="embla__slide   three">
          <div className="header">
            <p className="title"> Migrate Professionally </p>
          </div>
          <div className="subMenu">
            <p> Travel on Relocation, on a Tour, study and relaxation  <br />  All you need is to  <span className='text-[#FFA500]'>connect</span> with us today. </p>
          </div>
          <div className="desc">
            <p className='mx-auto'> Visa Processing, Job security, Risk Assesment, Travel Insurance, Risk Management, IELTS exams </p>
          </div>
          <div className="buttons">
            <a href={'//docs.google.com/forms/d/e/1FAIpQLSdlBms6yTvPvwZv2QRcnJJkMu5_21hoZoYtowBCecPD6j3LUQ/viewform'} target='_blank' rel="noopener noreferrer">
              <button className="connect"> Register Today</button>
            </a>
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
