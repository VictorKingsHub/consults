"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { COUNTRIES_OPTIONS } from '@/components/constants'
import styles from "./Countries.module.css"

const CountryDropdown = () => {
  const [selected, seSelected] = useState()

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
          <Image src={image.photo} width={300} height={300} alt={image.name} key={image.key}/>
        )
      })}
      </div>
    </div>
  )
}

export default CountryDropdown
