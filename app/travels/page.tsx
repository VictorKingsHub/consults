import React from 'react'
import Join from '../ui/travels/join/Join'
import EmblaCarousel from '../ui/travels/hero/Hero'
import { CentralText } from '../components/reusable/centralText/CentralText'
import WhyChooseUs from '../components/reusable/whychoseUs/WhyChooseUs'
import { FaUserGraduate } from "react-icons/fa6";
import { RiSpeakFill } from "react-icons/ri";
import { GiHumanPyramid } from "react-icons/gi";
import { FaSchool } from "react-icons/fa";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import Testimonial from '../components/reusable/testimonial/Testimonial'
import ServiceOptions from '../components/reusable/serviceOptions/ServiceOptions'
import EmblaCarouselTravel from '../ui/travels/hero/Hero'
import TravelServicesPage from '../ui/travels/services/TravelServices'
import GetCertified from '../components/reusable/certified/Certified'

const TravelsPage = () => {

  return (
    <div className='w-full' >
      <EmblaCarouselTravel />

      <ServiceOptions
        label1='WORK'
        label2='STUDY'
        label3='SCHOLARSHIP'
        desc1='We offer a wide range of travel service and packages tailored to different preference and budgets'
        desc2='Riskout Travels offers services of finding work opportunities while traveling'
        desc3='We give professional guides and assistance through out your apllication and study experience' label4={''} desc4={''}      />

       <CentralText
        title={"Get the most satisfying services"}
        description={"Let Riskout Travels worry about all hassles related to your travel arrangement to any location of your choice for work or Study while you go about your normal duties and still get the best value for your money"}
        text={"Stay Conected"}
      /> 

       <TravelServicesPage />

      <WhyChooseUs
        img={"/amen.jpg"}
        icon1={<FaUserGraduate />}
        icon2={<RiSpeakFill />}
        icon3={<GiHumanPyramid />}
        icon4={<FaSchool />}
        icon5={<MdOutlineConnectWithoutContact />}
        icon6={<GiTeacher />}
        label1={'Travel Insurance'}
        label2={'Travel Risk Assesment'}
        label3={'Safety Guideance'}
        label4={'Emergency Assistance'} label5={'Crisis Management'}
        label6={'Quality Assurance'}
        description1={'To help students to find the right education path that alligns their interests, abilities and aspirations '}
        description2={'Diction is about speaking clearly and having a good choice of wordsso that you are easily understood. while elocusion is about how skilled and controlled the delivery of words are'}
        description3={'Training workshops,Coaching and mentoring sessions, organizational development interventions, networking, networking events , and knowledge-sharing platform'}
        description4={'The management of different layers of schools is one of our core going goals'}
        description5={'We supply the suitable teaching aids to various schools and personnels in need of studying materials'}
        description6={'The management of different layers of schools is one of our core going goals'}
        us={"Choose us"}
        why={"why"}
      />

       <Testimonial
        topHeader='Travellers Testimonials'
        topDesc='Get the most satisfying servicesGet the most satisfying servicesGet the most satisfying services Get the most satisfying services'
        name1='Johnson Liberty'
        name2='Fredrick Joy'
        name3='Lawal Stepheny'
        prof1='Software Developer'
        prof2=' Data Analyst '
        prof3=' Virtual Assistant'
        desc1='Get the most satisfying servicesGet the most satisfying servicesGet the most satisfying services Get the most satisfying services'
        desc2='Get the most satisfying servicesGet the most satisfying servicesGet the most satisfying services Get the most satisfying services'
        desc3='Get the most satisfying servicesGet the most satisfying servicesGet the most satisfying services Get the most satisfying services'
        img1={"/review3.jpg"}
        img2={"/review1.jpg"}
        img3={"/review4.jpg"}
      /> 

       <GetCertified
        label1='Get Certified in'
        labelSP='IELTS'
        label2='SPeak, Listen, Understand and be understood'
        desc1='Get the most satisfying servicesGet the mostGet the most satisfying servicesGet the most'
        desc2='Get the most satisfying servicesGet the mostGet the most satisfying servicesGet the most'
        imgSrc={"/ie.png"}
        alt='link to ielts page'
        link='/travels/ielts'
        connect='Connect With us'
        l1='Travel'
        l2='Tour'
        l3='Study'
        l4='Work'
        l5='Get certified'
        l6='Green Card'
      /> 

      {/* <CountryDropdown  /> */}
      {/* <TravelHeroSection /> */}
      <div className="tra_service">
        {/* <ServicesHead title='Travel Services' /> */}
        {/* <ServicesPage /> */}
      </div>
      {/* <Join /> */}
      {/* <TravelReasons /> */}
    </div>
  )
}

export default TravelsPage
