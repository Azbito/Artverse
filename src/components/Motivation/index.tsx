import Image from "next/image";
import Sky from '../../../public/images/sky.jpg'
import GirlInTheForest from '../../../public/images/girl-in-the-forest.jpg'
import Button from "../Button";
import { useContext } from "react";
import { LightContext } from "@/contexts/lightContext";

export default function Motivation() {
  const { isLight } = useContext(LightContext)

  return (
    <div className="flex justify-center items-center gap-[5rem] mt-[3rem]">
      <div className="flex-col items-center justify-end flex w-[23rem] gap-6">
        <h1 className={isLight ? "font-poppins font-bold text-blue-500 text-lg text-end" : "font-poppins font-bold dark:text-white text-lg text-end"}>Don't you ever give up!</h1>
        <p className={isLight ? "font-poppins text-black text-base text-end" : "font-poppins dark:text-white text-base text-end"}>Art is our medicine. That's why we always feel better when we admire them. Stay safe.</p>
        <div className="ml-[16rem]">
          <Button onClick={() => alert("Work in progress!")} title="See our tips" />
        </div>
      </div>
      {isLight ?
        <Image src={Sky} alt="Sky" width={500} className="rounded-lg" />
        :
        <Image src={GirlInTheForest} alt="Girl In The Forest" width={500} className="rounded-lg" />
      }
    </div>
  )
}