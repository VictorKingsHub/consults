"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '@/app/constants'
import { ButtonBackground } from '../reusable/button/Button'
import styles from "./Navbar.module.css"
import { RxHamburgerMenu } from 'react-icons/rx'
import { MdOutlineClose } from 'react-icons/md'
import BookingSection from '@/app/ui/home/booking/page'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathName = usePathname()

  const [mobile, setMobile] = useState(false)

  const handleMobile = () => {
    setMobile(!mobile)
  }

  return (
    <nav className={styles.container}>
      <div className={styles.Menu}>
        <div className={styles.logo}>
          <Link href="/">
            <Image alt="risk.jpeg" src="/logo.jpg" width={55} height={25} />
          </Link>
        </div>

        <div className={styles.LargeMenu}>

          <div className={styles.burger}>
            {mobile ?
              <div className={styles.close} onClick={handleMobile}>
                <MdOutlineClose />
              </div> :
              <div className={styles.open} onClick={handleMobile}>
                <RxHamburgerMenu />
              </div>
            }
          </div>

          {NAV_LINKS.map((menuitem) => {
            return (
              <Link className={`${menuitem.href === pathName ? styles.largeMenuItemActive : styles.largeMenuItem} `}
                href={menuitem.href} key={menuitem.id}> {menuitem.label} </Link>
            )
          })}
        </div>

        <div className={styles.appoint}>
          <ButtonBackground text={'Appointment'} link={'/contact'} />

        </div>

      </div>
    </nav>
  )
}

export default Navbar
