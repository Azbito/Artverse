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
    <div className={isLight ? "bg-blue-500 flex justify-center items-center flex-col w-80 p-4 rounded-xl h-xl gap-4 cursor-pointer duration-200 hover:bg-blue-400 active:bg-blue-600"
      :
      "bg-zinc-800 flex justify-center items-center flex-col w-80 p-4 rounded-xl h-xl gap-4 cursor-pointer duration-200 hover:bg-zinc-700 active:bg-zinc-900"} onClick={onClick}>
      <Image src={img} alt={alt} width={80} />
      <h1 className="text-white font-poppins font-bold text-base text-center">{title}</h1>
      <p className="text-white font-poppins text-center">{description}</p>
    </div >
  )
}