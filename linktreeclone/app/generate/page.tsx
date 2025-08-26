import React from 'react'
import Image from 'next/image'


const generate: React.FC = () => {
    return (
        <div className='bg-[#e9c0e9] min-h-[100vh] grid grid-cols-2'>
            <section className="ml-10  py-40 flex flex-col gap-4 justify-center items-center">
                <h1 className='font-bold text-center text-4xl text-black'>Create Your LinkTree</h1>
                <div className='flex flex-col gap-4 w-[25vw]'>
                    <div className='flex flex-col gap-2 text-black'>
                        <h1 className='font-semibold'>Step 1: Claim Your Handle</h1>
                        <input type="text" placeholder='Choose a handle' className='bg-white focus:outline-[#e9c0e9] p-2  rounded-lg text-black' />
                    </div>
                    <div className='flex flex-col gap-2 text-black'>
                        <h1 className='font-semibold'>Step 2: Add Links</h1>
                        <input type="text" placeholder='Enter Link Text' className='bg-white focus:outline-[#e9c0e9] p-2  rounded-lg text-black' />
                        <input type="text" placeholder='Enter Link' className='bg-white focus:outline-[#e9c0e9] p-2  rounded-lg text-black' />
                     
                         <button className='bg-gray-300 w-1/3  text-black p-2 rounded-full font-semibold'>Add Link</button>
                      
                    </div>
                    <div className='flex flex-col gap-2 text-black'>
                        <h1 className='font-semibold'>Step 3: Add pictures and Finalize</h1>
                        <input type="text" placeholder='Enter Image Address' className='bg-white focus:outline-[#e9c0e9] p-2  rounded-lg text-black' />
                       <button className='bg-black text-white p-2 rounded-full font-semibold'>Create</button>
                    </div>
                    
                </div>
            </section>
            <section className='h-[100vh] pt-30 bg-[#e9c0e9]'>
                <Image height={300} width={300} className='object-cover w-full h-full' src="/generate.png" alt="generate" />
            </section>
        </div>
    )
}

export default generate
