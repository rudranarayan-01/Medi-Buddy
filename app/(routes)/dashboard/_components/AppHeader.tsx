import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const menuOptions = [
  {
    id: 1,
    name: "Home",
    path: "/home"
  },
  {
    id: 2,
    name: "Histroy",
    path: "/history"
  },
  {
    id: 3,
    name: "Pricing",
    path: "/pricing"
  },
  {
    id: 4,
    name: "Profile",
    path: "/profile"
  },

]

function AppHeader() {
  return (
    <div className='flex items-center justify-between p-4 shadow px-10 md:px-20 lg:px-40'>
      <Link href={"/"}>
        <div className='flex items-center justify-center gap-1'>
          <Image src={"/logo.svg"} alt='header logo' height={40} width={40} />
          <h2 className='font-bold text-3xl text-blue-500'>Medi-Buddy</h2>
        </div>
      </Link>

      <div className=' hidden md:flex gap-12 items-center'>
        {menuOptions.map((option, index) => (
          <div key={index}>
            <h2 className='font-bold cursor-pointer transition-all text-lg text-blue-500 uppercase hover:text-blue-400' >{option.name}</h2>
          </div>
        ))}
      </div>
      <UserButton />
    </div>
  )
}

export default AppHeader 