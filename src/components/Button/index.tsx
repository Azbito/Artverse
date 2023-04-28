import { LightContext } from "@/contexts/lightContext"
import { useContext } from "react"

interface ButtonProps {
  title: string,
  onClick: () => void
}

export default function Button({ title, onClick }: ButtonProps) {
  const { isLight } = useContext(LightContext)

  return (
    <button className={isLight ? "bg-blue-500 p-2 font-poppins rounded-lg hover:bg-blue-400 active:bg-blue-600 duration-200 text-white xl:w-[15rem] xl:h-[5rem] xl:text-[1.8rem] 2xl:w-[20rem] 2xl:h-[5rem] 2xl:text-[2rem]" : "dark:bg-neutral-500 p-2 font-poppins rounded-lg dark:text-white dark:hover:bg-neutral-400 dark:active:bg-neutral-600 duration-200  2xl:w-[20rem] 2xl:h-[5rem] 2xl:text-[2rem]"} onClick={onClick}>{title}</button>
  )
}