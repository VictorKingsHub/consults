import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '@/app/constants'
import { ButtonBackground } from '../reusable/button/Button'
import styles from "./Navbar.module.css"

const Navbar = () => {

  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">
          <Image alt="logo" src="/logo.jpg" width={55} height={25} />
        </Link>
      </div>

      <div className={styles.largeMenu}>
        <div>
          <ul>
            {NAV_LINKS.map((menuitem) => {
              return (
                <Link   className={styles.largeMenuItem}
                href={menuitem.href} key={menuitem.id}> {menuitem.label} </Link>
              )
            })}

          </ul>
        </div>

        <div className={styles.appoint}>
          <ButtonBackground text={'Appointment'} link={'/contact'} />
        </div>
      </div>

      <div className={styles.smallMenu}>
        <ul className={styles.smallUl}>
          {NAV_LINKS.map((menuitem) => {
            return (
              <Link href={menuitem.href} key={menuitem.id} className={styles.smallItems}> {menuitem.label} </Link>
            )
          })}
        </ul>
      </div>

    </nav>
  )
}

export default Navbar
