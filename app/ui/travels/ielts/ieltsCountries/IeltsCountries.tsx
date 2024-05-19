import React from 'react'
import styles from "./IeltsCountries.module.css"
import Image from 'next/image'

const Countries = [
  { title: "United Kingdom", image: "/uk.jpg", id: 1 },
  { title: "USA", image: "/usa.jpg", id: 2 },
  { title: "Canada", image: "/canada.jpg", id: 3 },
  { title: "Australia", image: "/australia.jpg", id: 4 },
  { title: "New Zealand", image: "/new_zealand.jpg", id: 4 },
  { title: "Finland", image: "/finland.jpg", id: 5 },
  { title: "Watar", image: "/watar.jpg", id: 7 },
  { title: "Owan", image: "/owan.jpg", id: 8 },
]
const IeltsCountries = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.text}>
          <h1>Find out where <span className={styles.ielts}>IELTS</span> can take you</h1>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consequatur incidunt suscipit at perferendis adipisci nobis doloribus. Suscipit maxime quibusdam reprehenderit vel, esse at fuga expedita ea iste sapiente libero! </p>
        </div>
      <div className={styles.container}>
        {Countries.map((country) => {
          return (
            <div className={styles.country} key={country.id}>
              <div className={styles.imgContainer}>
                <Image
                  src={country.image}
                  alt={country.title}
                  width={300}
                  height={300}
                  key={country.id}
                  className={styles.img}
                />
              </div>
              <div className={styles.countryName}>
                {country.title}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default IeltsCountries
