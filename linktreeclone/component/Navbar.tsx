import React from 'react'

const Navbar:React.FC = () => {
  return (
    <nav className='bg-white text-black  flex flex-row justify-between fixed top-8 w-[90vw] right-[5vw] p-3 rounded-full'>
      <div className='flex flex-row  items-center'>
        <div className='mx-8'><img width={120}  src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg" alt="" /></div>
      <ul className='flex flex-row gap-6'>
        <li>Products</li>
        <li>Templates</li>
        <li>Marketplace</li>
        <li>Learn</li>
        <li>Pricing</li>
      </ul>
      </div>
      <div className='flex flex-row gap-5 items-center'>
        <button className='bg-gray-200 px-6 p-4 font-semibold rounded-lg'>Login</button>
        <button className='bg-black text-white font-semibold px-6 p-4 rounded-full'>SignUp for free</button>
      </div>
    </nav>
  )
}

export default Navbar
