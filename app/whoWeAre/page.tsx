import React from 'react'
import WhoWeAreHero from '../ui/whoWeAre/hero/WhoWeAreHero'
import UsSection from '../ui/whoWeAre/us/Us'
import Review from '../components/reusable/review/ReviewSection'
import PhotoSpeaksSection from '../ui/whoWeAre/photoSpeaks/PhotoSpeaks'
import TeamSection from '../ui/whoWeAre/team/Team'

const AboutPage = () => {
  return (
    <div>
      <WhoWeAreHero />
      
      <UsSection />

      <PhotoSpeaksSection />

      <TeamSection />

      <Review />
    </div>
  )
}

export default AboutPage
