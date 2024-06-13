import HeroImage from '@/app/ui/travels/ielts/hero/HeroImage'
import IeltsConnect from '@/app/ui/travels/ielts/ieltsConnect/IeltsConnect'
import IeltsCountries from '@/app/ui/travels/ielts/ieltsCountries/IeltsCountries'
import { IeltsIntro } from '@/app/ui/travels/ielts/ieltsIntro/IeltsIntro'
import IeltsPartnership from '@/app/ui/travels/ielts/ieltsPartnership/IeltsPartnership'
import IeltsTakes from '@/app/ui/travels/ielts/ieltsTakes/IeltsTakes'
import IeltsLearning from '@/app/ui/travels/ielts/learnings/IeltsLearnings'

const IeltsPage = () => {
  return (
    <div style={{ maxWidth: "100vw" }}>
      <HeroImage />

      <IeltsIntro />

      <IeltsCountries />

      <IeltsTakes
        subTitle='Check IELTS out'
        title='All You Need To Know About IELTS'
        desc=' All You Need To Know About IELTSAll You Need To Know About IELTSAll You Need To Know About IELTSAll You Need To Know About IELTS All You Need To Know About IELTS'
        videoAlt='Ielts Video'
        videoSrc="/https://youtu.be/nNOwg6LkDw4"
        btnBackLink='/linkToForm'
        btnBackText='Make Enquiry'
        btnLink='/Contact Us'
        btnText='Contact Us'
      />

      <IeltsLearning />

      <IeltsConnect />

      <IeltsPartnership />

      
    </div>
  )
}

export default IeltsPage
