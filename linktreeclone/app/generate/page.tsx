"use client"
import React,{useState} from 'react'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
const generate: React.FC = () => {
    // const notify = () => toast('Wow so easy !');
    const searchParams = useSearchParams();
    const [link,setlink] = useState<string>("")
    const [linkText,setlinkText] = useState<string>("")
    const [linkBox,setlinkBox] = useState<{link:string , linkText:string}[]>([{link:"",linkText:""}])
    const [linkImage,setlinkImage] = useState<string>("")
    const [handle,setHandle] = useState<string>(searchParams.get("handle") || "")
    const [desc,setdesc] = useState<string>("")
    const router = useRouter()
    const handleChange = async () => {
    const res = await fetch("/api/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            linkBox,
            linkImage,
            desc,
            handle
        })

       
        
    })
    const result = await res.json()
    if(result.error) return  toast.error(result.message)
    else { toast.success(result.message)
    setlinkBox([{link:"",linkText:""}])
     setTimeout(() => {
        router.push(`http://localhost:3000/${handle}`)
    }, 4000);
    }
    }
    const handleAdd = () => {
    setlinkBox([...linkBox,{link:"",linkText:""}])
    }
    const handleBox = (index:number,value:string,field: "link" | "linkText") => {
       const updatedBox = [...linkBox]
      updatedBox[index] = {...updatedBox[index],[field]:value}
      setlinkBox(updatedBox)
     
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
                        {linkBox.map((box, index) => (
                            <div key={index} className="flex gap-2 mb-2">
                                <input
                                 value={box.linkText} 
                                 onChange={(e) => handleBox(index,e.target.value,"linkText")} 
                                 type="text" placeholder='Enter Link Text' 
                                 className='bg-white focus:outline-[#e9c0e9] p-2  rounded-lg text-black' />
                                <input
                                 value={box.link} 
                                 onChange={(e) => handleBox(index,e.target.value,"link")} 
                                 type="text" placeholder='Enter Link' 
                                 className='bg-white focus:outline-[#e9c0e9] p-2  rounded-lg text-black' />
                            </div>
                        ))}

                        <button onClick={() => handleAdd()} className='bg-gray-300 hover:bg-black hover:text-white w-1/3  text-black p-2 rounded-full font-semibold'>Add Link</button>

                    </div>
                    <div className='flex flex-col gap-2 text-black'>
                        <h1 className='font-semibold'>Step 3: Add pictures and Finalize</h1>
                        <input value={linkImage} onChange={(e) => setlinkImage(e.target.value)} type="text" placeholder='Enter Image Address' className='bg-white focus:outline-[#e9c0e9] p-2  rounded-lg text-black' />
                        <input value={desc} onChange={(e) => setdesc(e.target.value)} type="text" placeholder='Enter Description' className='bg-white focus:outline-[#e9c0e9] p-2  rounded-lg text-black' />
                        <button onClick={() => handleChange()} className='bg-black hover:bg-gray-300 hover:text-black text-white p-2 rounded-full font-semibold'>Create</button>
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
