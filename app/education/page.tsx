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

      <ServiceOptions
        label1='SCHOOL SERVICES'
        label2='SCHOOL UPGRADE'
        label3='TEACHING MATERIALS'
        label4="TRAINED TEACHERS ACADEMY"
        desc1='Teachers Capacity Building and Workshop, School Supervision, Management and Teacher&apos;s recruiting.'
        desc2='Accreditation and Upgrading for new and existing schools, Curriculum design and  development..'
        desc3="Supply of Teaching and learning aids"
        desc4='We give professional guides and assistance through out your apllication and study experience'
      />

      <CentralText
        title='Get the most satisfying services'
        description='Riskout Consults keeps you informed on the latest instructional material techniques and trends.  We also provide assistance to schools by reviewing and analyzing the schools&apos; performance data, such as test scores and graduation rates'
      />

      <EducationServicesPage />

      <WhyChooseUs
        img={"/ielts2.jpg"}
        icon1={<FaUserGraduate />}
        icon2={<RiSpeakFill />}
        icon3={<GiHumanPyramid />}
        icon4={<FaSchool />}
        icon5={<MdOutlineConnectWithoutContact />}
        icon6={<GiTeacher />}
        label1={'Educational Consulting'}
        label2={'Diction and Elocution'}
        label3={'Human Capacity Building and Supervision'}
        label4={'School Management and supervision'}
        label5={'Supply of teaching aids and materials'}
        label6={'Teachers Staffing'}
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
        topHeader='Students Testimonials'
        topDesc='Get the most satisfying servicesGet the most satisfying servicesGet the most satisfying services Get the most satisfying services'
        name1='Victoria Marvalous'
        name2='Johnson Lifting'
        name3='Ikeogu Earnest'
        prof1='Virtual Assitant'
        prof2=' Data Analyst '
        prof3=' Software Developer '
        desc1='Get the most satisfying servicesGet the most satisfying servicesGet the most satisfying services Get the most satisfying services'
        desc2='Get the most satisfying servicesGet the most satisfying servicesGet the most satisfying services Get the most satisfying services'
        desc3='Get the most satisfying servicesGet the most satisfying servicesGet the most satisfying services Get the most satisfying services'
        img1={"/review1.jpg"}
        img2={"/review2.jpg"}
        img3={"/review3.jpg"}
      />

      <GetCertified
        label1='Join'
        label2=' Join Once, Join All'
        desc1='Get the most satisfying servicesGet the mostGet the most satisfying servicesGet the most'
        desc2='Get the most satisfying servicesGet the mostGet the most satisfying servicesGet the most'
        alt='Trained Teachers Image'
        imgSrc="/learn.jpg"
        connect='Connect Here'
        link='/education/trainedteachersacademy'
        labelSP='Trained Teachers Academy'
        l1='Speak Professionally'
        l2='Understand'
        l3='Listen'
        l4='Be Understood'
        l5='Work'
        l6='Study'
      />
    </div>
  )
}

export default educationPage
