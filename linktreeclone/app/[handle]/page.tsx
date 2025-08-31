
import clientPromise from "@/lib/mongodb";
import Link from "next/link";

export default async function Page({params,}: {params: Promise<{ handle: string }>}) {
  const { handle } = await params
 const client = await clientPromise
    const db = client.db("linktree")
    const collection = db.collection("links")

    const item = await collection.findOne({handle:handle})
    console.log(item);
return <div className=" flex flex-col items-center min-h-screen bg-green-100">
<section className=" bg-[#254f1a] mt-7 p-10 rounded-xl">
        <div className="flex flex-col items-center justify-center h-full  pb-5">
        <img className="rounded-lg w-40 h-auto " src={item.linkImage} alt="" />
        <h1 className="text-xl my-2 font-bold">@{item.handle}</h1>
        <p className="max-w-60 text-slate-300 text-sm text-center">{item.desc}</p>
    </div>
    <div>
        {item && item.linkBox.map((linkBoxItem:any,index:any) => (
                <Link  className="text-black font-semibold" href={linkBoxItem.link} target="_blank" rel="noopener noreferrer">
            <div className="bg-white text-center text-lg hover:bg-gray-200 p-4 px-16 rounded-lg shadow-md mb-4" key={index}>
                    {linkBoxItem.linkText}
            </div>
                </Link>
        ))}
    </div>
</section>
    </div>
} 