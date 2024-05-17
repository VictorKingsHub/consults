"use client"
import { COUNTRIES_OPTIONS } from '@/app/constants'
import React, { useState } from 'react'
import styles from "./Countries.module.css"
import Image from 'next/image'

const [selected, seSelected] = useState()

const CountryDropdown = () => {


  return (
    <div className={styles.container}>
      <select >
        {COUNTRIES_OPTIONS.map((country: any) => {
          return (
              <option value={country.name} key={country.id}> { selected && country.name} </option>
          )
        })}
      </select>
      
      <div className="styles image">
       
      {COUNTRIES_OPTIONS.map((image: any) => {
        return (
          <Image src={image.photo} width={300} height={300} alt={image.name}/>
        )
      })}

      </div>

    </div>
  )
}

export default CountryDropdown
