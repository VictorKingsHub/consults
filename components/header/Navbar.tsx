'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '@/components/constants'
import { ButtonBackground } from '../reusable/button/Button'
import styles from './Navbar.module.css'
import { usePathname } from 'next/navigation'
import { IoMenu } from 'react-icons/io5'

const Navbar = () => {
  const pathName = usePathname()

  const [mobile, setMobile] = useState(false)
  const [open, setOpen] = useState(false)

  const handleMobile = () => {
    setMobile(!mobile)
  }

  return (
    <nav className={styles.container}>
      <div className={styles.menu}>
        <div className={styles.logo}>
          <Link href='/'>
            <Image
              alt='Riskout Logo'
              src='/riskl.jpeg'
              width={55}
              height={25}
            />
          </Link>
        </div>

        <div className={styles.LMenu}>
          {NAV_LINKS.map(menuitem => {
            return (
              <Link
                className={`${
                  menuitem.href === pathName
                    ? styles.largeMenuItemActive
                    : styles.largeMenuItem
                } `}
                href={menuitem.href}
                key={menuitem.id}
              >
                {' '}
                {menuitem.label}{' '}
              </Link>
            )
          })}
        </div>

        <div className={styles.appoint}>
          <ButtonBackground text={'Appointment'} link={'/contact'} />
        </div>
      </div>

      <div className={styles.mobile}>
        <div className={styles.MLogo}>
          <Link href='/'>
            <Image
              alt='Riskout Logo'
              src='/riskl.jpeg'
              width={55}
              height={25}
            />
          </Link>
        </div>

        <IoMenu
          className='cursor-pointer text-white text-4xl'
          onClick={() => setOpen(prev => !prev)}
        />
        {open && (
          <div className='flex flex-col items-center justify-center gap-8 text-xl z-10 bg-black text-white left-0 top-10 w-full absolute h-[calc(100vh-80px)]'>
            {NAV_LINKS.map(menuitem => {
              return (
                <Link
                  className={`${
                    menuitem.href === pathName
                      ? styles.largeMenuItemActive
                      : styles.largeMenuItem
                  } `}
                  href={menuitem.href}
                  key={menuitem.id}
                >
                  {' '}
                  {menuitem.label}{' '}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
