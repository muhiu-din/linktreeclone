"use client"
import Link from 'next/link'
import { useSession, signOut } from "next-auth/react"
import { usePathname } from 'next/navigation'
import React from 'react'
const Navbar:React.FC = () => {
  const { data: session } = useSession()
  const pathname = usePathname();
  const showNavbar = ["/","/generate","/login"].includes(pathname);
  return ( <>{showNavbar && (
    <nav className='bg-white text-black   flex flex-row justify-between fixed top-8 w-[90vw] right-[5vw] p-2 rounded-full'>
      <div className='flex flex-row  items-center'>
        <div className='mx-8'><Link href="/"><img width={120}  src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg" alt="" /></Link></div>
      <ul className='flex flex-row gap-6'>
        <li>Products</li>
        <li>Templates</li>
        <li>Marketplace</li>
        <li>Learn</li>
        <li>Pricing</li>
      </ul>
      </div>
      <div>
      {!session && <div className='flex flex-row gap-5 items-center'>
        <Link href="/login"><button className='bg-gray-200 px-6 p-4 font-semibold rounded-lg'>Login</button></Link>
        <Link href="/login"><button className='bg-black text-white font-semibold px-6 p-4 rounded-full'>SignUp for free</button></Link>
      </div>}
      {session && (
        <div className='flex flex-row gap-4 items-center'>
          <span className='text-xl pl-6 py-4 font-semibold rounded-lg'>{session.user?.name}</span>
          <button onClick={() => signOut()} className='bg-black text-white font-semibold px-6 p-4 rounded-full'>Logout</button>
        </div>
      )}
      </div>
    </nav>
   )} </>
  )
}

export default Navbar
