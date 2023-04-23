import Image from "next/image";
import TheLovers from '../../../public/images/the-lovers.jpg'
import Rat from '../../../public/images/rat.jpg'
import { useContext } from "react";
import { LightContext } from "@/contexts/lightContext";
import Button from "../Button";

export default function Offer() {
  const { isLight } = useContext(LightContext)

  return (
    <div className="flex items-center justify-around flex-row mt-32">
      <Image src={TheLovers} alt="The lovers" className="w-1/2 lg:w-1/6 h-auto object-cover rounded-lg" />
      <div className="flex items-center justify-center flex-col gap-12">
        <h1 className={isLight ?
          "text-blue-600 font-poppins font-bold text-center 2xl:text-[3rem] xl:text-lg lg: text-lg" : "text-white font-poppins font-bold text-center 2xl:text-[3rem] xl:text-lg lg: text-lg"}>What do we offer you?</h1>
        <p className={isLight ? "text-black font-poppins text-base w-27 text-center 2xl:text-[2rem] 2xl:w-[30rem]" : "text-white font-poppins text-base w-27 text-center 2xl:text-[2rem] 2xl:w-[30rem]"}>A bunch of content about art, history & more.</p>
        <Button title="Check it out" onClick={() => alert("Work in progress")} />
      </div>
      <Image src={Rat} alt="The lovers" className="w-1/2 lg:w-1/6 h-auto object-cover rounded-l" />
    </div>
  )
}