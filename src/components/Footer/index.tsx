import Image from 'next/image'
import GitHub from '../../../public/images/github.png'
import Linkedin from '../../../public/images/linkedin.png'
import Website from '../../../public/images/website.png'
import { useContext } from 'react'
import { LightContext } from '@/contexts/lightContext'
import { useRouter } from 'next/router'

export default function Footer() {
  const { isLight } = useContext(LightContext)
  const router = useRouter()

  return (
    <div className={isLight ? "w-full bg-blue-500 flex items-center justify-between h-[8rem] mt-32" : "w-full dark:bg-slate-600 flex items-center justify-between h-[8rem] mt-32"}>
      <div className="flex items-center justify-center ml-16">
        <strong className="font-kristi text-white text-[3rem] cursor-pointer" onClick={() => alert("This project was made to understand local storage. There's no more pages.")}>Artverse</strong>
      </div>
      <div className="flex items-center justify-center mr-[5rem] gap-[1rem]">
        <Image src={GitHub} alt="GitHub" width={40} className="duration-200 hover:-translate-y-2 hover:bg-cyan-800 hover:rounded-[2rem] cursor-pointer" onClick={() => router.push("https://www.github.com/azbito")} />
        <Image src={Linkedin} alt="Linkedin" width={40} className="duration-200 hover:-translate-y-2 hover:bg-blue-600 hover:rounded-[2rem] cursor-pointer" onClick={() => router.push("https://www.linkedin.com/in/thiago-roque-b39078236/")} />
        <Image src={Website} alt="Portfolio" width={42} className="duration-200 hover:-translate-y-2  cursor-pointer" onClick={() => router.push("https://azbito.vercel.app")} />
      </div>
    </div>
  )
}