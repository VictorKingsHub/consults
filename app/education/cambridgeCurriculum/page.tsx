import CambridgeFAQ from '@/app/ui/education/cambridgeCurriculum/cambridgeFAQ/cambridgeFAQ'
import CambridgePhoto from '@/app/ui/education/cambridgeCurriculum/cambridgePhoto/CambridgePhoto'
import { CentralText } from '@/components/reusable/centralText/CentralText'
import React from 'react'

const CambridgeCurriculum = () => {
  return (
    <div className=' w-full'>
      <CambridgePhoto />

      <CentralText
        title='Cambridge Curriculum'
        description='Cambridge Curriculum is the most widely accepted curriculum in the world. 
        The curriculum focuses more on core skills rather than knowledge.
        
        In history courses, for example, rather than memorizing dates and take multiple-choice tests, students dig into research through primary sources, develop arguments, and present their findings. End-of-course exams require analyzing and synthesizing information in a written intensive format. This intricacy has called for a training and retraining of the teachers in order to x-ray the intrinsic parts and formats of approaching the curriculum with a view to achieving the curriculum objective holistically '
      />

      <CambridgeFAQ />
    </div>
  )
}

export default CambridgeCurriculum
