"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { IoMenu } from 'react-icons/io5'
import { NAV_LINKS } from '../constants'
import { usePathname } from 'next/navigation'
import styles from "./Navbar.module.css"

const MobileMenu = () => {
    const [open, setOpen] = useState(false)


    const pathName = usePathname()

    const [mobile, setMobile] = useState(false)
  
    const handleMobile = () => {
      setMobile(!mobile)
    }
  
    return (
        <div>
            <IoMenu className='cursor-pointer' onClick={() => setOpen((prev) => !prev)} />
            {open &&
                <div className='flex flex-col items-center justify-center gap-8 text-xl z-10 bg-black text-white left-0 top-20 w-full absolute h-[calc(100vh-80px)]'>
                    {NAV_LINKS.map((menuitem) => {
            return (
              <Link className={`${menuitem.href === pathName ? styles.largeMenuItemActive : styles.largeMenuItem} `}
                href={menuitem.href} key={menuitem.id}> {menuitem.label} </Link>
            )
          })}
                </div>}


        </div>
    )
}

export default MobileMenu
