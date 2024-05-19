import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import Burger from '@/app/burger/Burger'
import { NAV_LINKS } from '@/app/constants'
import { ButtonBackground } from '../reusable/button/Button'

const Navbar = () => {
  return (
    <nav className=" z-40  bg-[#FFFFFF] sticky top-0 w-full mx-auto  padding-container z-999 items-center flex flex-row space-evenly justify-around  py-3 " >
      <div className=" cursor-pointer lef">
        <Link href="/">
          <Image alt="logo" src="/logo.jpg" width={55} height={25} />
        </Link>
      </div>

      <div className="right flex flex-row space-between justify-around  ">
        <div>
          <ul style={{ color: "rgb(68, 68, 68)" }} className="hidden flex-row justify-between text-black  space-center md:flex">
            {NAV_LINKS.map((menuitem) => {
              return (
                <Link href={menuitem.href} key={menuitem.id} className="font-semibold mx-4 text-[#111111] font-medium cursor-pointer font-stratum-2-web hover:text-red-600 transition-all"> {menuitem.label} </Link>
              )
            })}

          </ul>
        </div>

        <div className="hidden lg:flex ml-1" >
          <ButtonBackground text={'Appointment'} link={'/contact'} />
        </div>
      </div>

      <div className="flex md:hidden ">
        <div>
          {/* <Burger /> */}
        </div>
        <ul className="flex flex-col md:hidden bg-yellow-500">
          {NAV_LINKS.map((menuitem) => {
            return (
              <Link href={menuitem.href} key={menuitem.id} className="mx-4 cursor-pointer  hover:text-red-500 transition-all"> {menuitem.label} </Link>
            )
          })}
        </ul>
      </div>

    </nav>
  )
}

export default Navbar
