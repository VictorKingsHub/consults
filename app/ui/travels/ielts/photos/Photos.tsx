import React from 'react'
import st from "./Photos.module.css"
import Image from 'next/image'

const Photos = () => {
  return (
    <div className={st.container}>
      <Image src="/house3.jpg" alt='' width={300} height={300}/>
      <Image src="/house3.jpg" alt='' width={300} height={300}/>
      <Image src="/house3.jpg" alt='' width={300} height={300}/>
      <Image src="/house3.jpg" alt='' width={300} height={300}/>
    </div>
  )
}

export default Photos
