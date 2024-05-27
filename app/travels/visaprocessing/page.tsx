import GetCertified from '@/app/components/reusable/certified/Certified'
import VisaProcessingHero from '@/app/ui/travels/visaprocessing/hero/VisaProcessingHero'
import VisaBest from '@/app/ui/travels/visaprocessing/visaBest/VisaBest'
import WhyVisa from '@/app/ui/travels/visaprocessing/whyVisa/WhyVisa'
import React from 'react'

const VisaProcessingPage = () => {
  return (
    <div>
      <VisaProcessingHero />
      <VisaBest />
      <WhyVisa />
      
      <GetCertified label1={'Where Application Begin'} label2={'Begin your Application'} desc1={'Get started with your Visa application. You can fill the Riskout Travels Visa application form and submit online, directly. Fill out the application form electronically or Visa us.'} connect={'Register'} desc2=' Book an appointment with us, once you have completed your application where the price of the Visa application and securing of jobs will be discussing with you' imgSrc={"/world.jpg"} link={'https://docs.google.com/forms/d/e/1FAIpQLSdlBms6yTvPvwZv2QRcnJJkMu5_21hoZoYtowBCecPD6j3LUQ/viewform?usp=pp_url'} alt={'Visa Processing Image'} l1={'Register'} l2={'Covered'} l3={'Lifted'} l4={'Acquire'} l5={'Visa Processed'} l6={'Join Movement'} />
    </div>
  )
}

export default VisaProcessingPage
