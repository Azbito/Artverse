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
    <div className={isLight ? "bg-blue-500 flex justify-center items-center gap-5 p-4 flex-col rounded-xl cursor-pointer duration-200 hover:bg-blue-400 active:bg-blue-600 xl:h-[25rem] xl:w-[25rem] 2xl:h-[40rem] 2xl:w-[30rem] 2xl:gap-10 lg:w-[20rem] lg:h-[25rem] md:h-[20rem] md:w-[20rem] sm:w-[25rem] sm:p-16"
      :
      "dark:bg-zinc-800 flex justify-center items-center flex-col rounded-xl p-4 gap-5 cursor-pointer duration-200 dark:hover:bg-zinc-700 dark:active:bg-zinc-900 xl:h-[25rem] xl:w-[25rem] 2xl:h-[40rem] 2xl:w-[30rem] 2xl:gap-10 lg:w-[20rem] lg:h-[25rem] md:h-[20rem] md:w-[20rem] sm:w-[25rem] sm:p-16"} onClick={onClick}>
      <Image src={img} alt={alt} className="xl:w-[8rem] 2xl:w-[8rem] lg:w-[6rem] md:w-[4rem] sm:w-[8rem]" />
      <h1 className="text-white font-poppins font-bold text-base text-center sm:text-[2rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem]">{title}</h1>
      <p className={isLight ? "text-white font-poppins text-center xl:text-[1.2rem] 2xl:text-[1.5rem]" : "dark:text-white font-poppins text-center xl:text-[1.2rem] 2xl:text-[1.5rem]"}>{description}</p>
    </div >
  )
}