import React from 'react'
import EmblaCarousel from '../ui/travels/hero/Hero'
import { ServicesHead } from '../components/reusable/servicesHead/ServicesHead'
import { CentralText } from '../components/reusable/centralText/CentralText'
import EducationServicesPage from '../ui/education/services/EducationServices'
import WhyChooseUs from '../components/reusable/whychoseUs/WhyChooseUs'
import { FaSchool, FaUserGraduate } from 'react-icons/fa6'
import { RiSpeakFill } from 'react-icons/ri'
import { GiHumanPyramid, GiTeacher } from 'react-icons/gi'
import { MdOutlineConnectWithoutContact } from 'react-icons/md'
import Testimonial from '../components/reusable/testimonial/Testimonial'
import ServiceOptions from '../components/reusable/serviceOptions/ServiceOptions'
import EmblaCarouselEducation from '../ui/education/hero/Hero'
import GetCertified from '../components/reusable/certified/Certified'


const educationPage = () => {
  return (
    <div>
      <EmblaCarouselEducation />

      <ServiceOptions label1='SCHOLARSHIPS' label2='CAMBRIDGE CURRICULUM' label3='TRAINED TEACHERS ACADEMY' desc1='We offer a wide range of travel service and packages tailored to different preference and budgets.' desc2='Riskout Travels offers services of finding work opportunities while traveling' desc3='We give professional guides and assistance through out your apllication and study experience' />

      <CentralText title='Get the most satisfying services' description='Riskout Consults keeps informed on the latest instructional material techniques and trends to best assist their clients. We also provide assistance to a school by reviewing and analyzing a schools performance data, such as test scores and graduation rates' />

      <div className="edu_service">
        <EducationServicesPage />
      </div>

      <WhyChooseUs img={"/ielts2.jpg"} icon1={<FaUserGraduate />} icon2={<RiSpeakFill />} icon3={<GiHumanPyramid />} icon4={<FaSchool />} icon5={<MdOutlineConnectWithoutContact />} icon6={<GiTeacher />} label1={'Educational Consulting'} label2={'Diction and Elocution'} label3={'Human Capacity Building and Supervision'} label4={'School Management and supervision'} label5={'Supply of teaching aids and materials'} label6={'Teachers Staffing'} description1={'To help students to find the right education path that alligns their interests, abilities and aspirations '} description2={'Diction is about speaking clearly and having a good choice of wordsso that you are easily understood. while elocusion is about how skilled and controlled the delivery of words are'} description3={'Training workshops,Coaching and mentoring sessions, organizational development interventions, networking, networking events , and knowledge-sharing platform'} description4={'The management of different layers of schools is one of our core going goals'} description5={'We supply the suitable teaching aids to various schools and personnels in need of studying materials'} description6={'The management of different layers of schools is one of our core going goals'} us={"Choose us"} why={"why"} />

      <Testimonial topHeader='Students Testimonials' topDesc='Get the most satisfying servicesGet the most satisfying servicesGet the most satisfying services Get the most satisfying services' name1='John Doe1' name2='John Doe2' name3='John Doe3' prof1='Software Developer' prof2=' Data Analyst ' prof3=' Virtual Assistant' desc1='Get the most satisfying servicesGet the most satisfying servicesGet the most satisfying services Get the most satisfying services' desc2='Get the most satisfying servicesGet the most satisfying servicesGet the most satisfying services Get the most satisfying services' desc3='Get the most satisfying servicesGet the most satisfying servicesGet the most satisfying services Get the most satisfying services' img1={"/man.jpg"} img2={"/relaxation.png"} img3={"/man.jpg"} />


<GetCertified label1='Join'label2=' Join Once, Join All' desc1='Get the most satisfying servicesGet the mostGet the most satisfying servicesGet the most' desc2='Get the most satisfying servicesGet the mostGet the most satisfying servicesGet the most' alt='Trained Teachers Image' imgSrc="/learn.jpg" connect='Connect Here' link='/education/trainedteachersacademy' labelSP='Trained Teachers Academy' l1='Speak Professionally' l2='Understand' l3='Listen' l4='Be Understood' l5='Work' l6='Study' />
    </div>
  )
}

export default educationPage
