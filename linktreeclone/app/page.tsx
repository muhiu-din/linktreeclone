import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-[#254f1a] min-h-[200vh] ">
    <section className="grid grid-cols-2  items-center min-h-[100vh] py-40">
      <div className= "ml-10">
        <div>
          <p className="text-6xl font-extrabold text-[#d2e823]">Everything you are. In one, simple link in bio.</p>
        <p className="my-4">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
        </div>
        <div className="flex flex-row gap-2">
          <input className="bg-white text-black rounded-lg p-2 py-4" type="text" placeholder="linktr.ee/" />
          <button className="bg-[#e9c0e9] p-3 py-4 rounded-full font-semibold text-black">Claim your linktree</button>
        </div>
      </div>
      <div className=" mr-10 flex items-center justify-center">
        <Image height={400} width={400} src="/hero.jpg" alt="heroimg" />
      </div>
    </section>
    <section className="bg-[#e9c0e9] min-h-[100vh]">
      
    </section>
    </div>
  );
}
