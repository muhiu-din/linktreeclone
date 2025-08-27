"use client"
import React,{useState} from 'react'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
const generate: React.FC = () => {
    const notify = () => toast('Wow so easy !');
    const [link,setlink] = useState<string>("")
    const [linkText,setlinkText] = useState<string>("")
    const [linkImage,setlinkImage] = useState<string>("")
    const [handle,setHandle] = useState<string>("")

    const handleAdd = async () => {
    const res = await fetch("/api/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            link,
            linkText,
            linkImage,
            handle
        })
        
    })
    const result = await res.json()
    toast(result.message)
    }
    return (
        <div className='bg-[#e9c0e9] min-h-[100vh] grid grid-cols-2'>
            <section className="ml-10  py-40 flex flex-col gap-4 justify-center items-center">
                <h1 className='font-bold text-center text-4xl text-black'>Create Your LinkTree</h1>
                <ToastContainer />
                <div className='flex flex-col gap-4 w-[25vw]'>
                    <div className='flex flex-col gap-2 text-black'>
                        <h1 className='font-semibold'>Step 1: Claim Your Handle</h1>
                        <input value={handle} onChange={(e) => setHandle(e.target.value)} type="text" placeholder='Choose a handle' className='bg-white focus:outline-[#e9c0e9] p-2  rounded-lg text-black' />
                    </div>
                    <div className='flex flex-col gap-2 text-black'>
                        <h1 className='font-semibold'>Step 2: Add Links</h1>
                        <input value={linkText} onChange={(e) => setlinkText(e.target.value)} type="text" placeholder='Enter Link Text' className='bg-white focus:outline-[#e9c0e9] p-2  rounded-lg text-black' />
                        <input value={link} onChange={(e) => setlink(e.target.value)} type="text" placeholder='Enter Link' className='bg-white focus:outline-[#e9c0e9] p-2  rounded-lg text-black' />

                        <button className='bg-gray-300 w-1/3  text-black p-2 rounded-full font-semibold'>Add Link</button>

                    </div>
                    <div className='flex flex-col gap-2 text-black'>
                        <h1 className='font-semibold'>Step 3: Add pictures and Finalize</h1>
                        <input value={linkImage} onChange={(e) => setlinkImage(e.target.value)} type="text" placeholder='Enter Image Address' className='bg-white focus:outline-[#e9c0e9] p-2  rounded-lg text-black' />
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
