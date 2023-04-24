import { LightContext } from "@/contexts/lightContext"
import { arts } from "@/utils/arts"
import { useContext } from "react"

export default function ArtCategories() {
  const { isLight } = useContext(LightContext)

  return (
    <div className="flex justify-center items-center flex-col mt-24">
      <h1 className={isLight ? "font-poppins font-bold text-lg text-blue-500" : "font-poppins font-bold text-lg text-white 2xl:text-[4rem]"}>Types of art</h1>
      <div className="grid grid-cols-4 gap-16 mt-10">
        {arts.map((item) => (
          <div key={item.id} onClick={() => alert("This project was made to understand local storage. There's no more pages.")}>
            <img src={item.img} alt={item.alt} className="h-[10rem] w-[10rem] rounded-lg cursor-pointer hover:scale-125 hover:shadow-lg duration-200 2xl:h-[15rem] 2xl:w-[15rem]" />
            <h1 className={isLight ? "font-poppins font-bold text-center text-blue-600 mt-2 2xl:text-[1.5rem] cursor-pointer" : "font-poppins text-center font-bold dark:text-white cursor-pointer mt-2 2xl:text-[1.5rem]"}>{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}