import { LightContext } from '@/contexts/lightContext'
import Image, { StaticImageData } from 'next/image'
import { useContext } from 'react'

interface CardProps {
  img: StaticImageData,
  alt: string,
  title: string,
  description: string,
  onClick: () => void
}

export default function Card({ img, alt, title, description, onClick }: CardProps) {
  const { isLight } = useContext(LightContext)

  return (
    <div className={isLight ? "bg-blue-500 flex justify-center items-center flex-col p-4 rounded-xl gap-4 cursor-pointer duration-200 hover:bg-blue-400 active:bg-blue-600 xl:h-[25rem] xl:w-[20rem] 2xl:h-[30rem] 2xl:w-[25rem] 2xl:gap-10"
      :
      "dark:bg-zinc-800 flex justify-center items-center flex-col p-4 rounded-xl gap-4 cursor-pointer duration-200 dark:hover:bg-zinc-700 dark:active:bg-zinc-900 xl:h-[25rem] xl:w-[20rem] 2xl:h-[30rem] 2xl:w-[25rem] 2xl:gap-10"} onClick={onClick}>
      <Image src={img} alt={alt} className="xl:w-[8rem] 2xl:w-[8rem]" />
      <h1 className={isLight ? "text-white font-poppins font-bold text-base text-center xl:text-[2.5rem] 2xl:text-[3rem]" : "dark:text-white font-poppins font-bold text-base text-center xl:text-[2.5rem] 2xl:text-[3rem]"}>{title}</h1>
      <p className={isLight ? "text-white font-poppins text-center xl:text-[1.2rem] 2xl:text-[1.5rem]" : "dark:text-white font-poppins text-center xl:text-[1.2rem] 2xl:text-[1.5rem]"}>{description}</p>
    </div >
  )
}