import Image from "next/image";
import Sky from '../../../public/images/sky.jpg'
import GirlInTheForest from '../../../public/images/girl-in-the-forest.jpg'
import Button from "../Button";
import { useContext, useEffect, useState } from "react";
import { LightContext } from "@/contexts/lightContext";

export default function Motivation() {
  const { isLight } = useContext(LightContext)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 1024) {
        setIsMobile(true)
        return
      }
      setIsMobile(false)
    }
  }, [])

  return (
    <div className="flex justify-center items-center gap-[1.5rem] mt-[3rem] 2xl:gap-[5rem]">
      {!isMobile ? (
        <>
          <div className="flex-col items-center justify-end flex w-[23rem] gap-6 2xl:w-[35rem]">
            <h1 className={isLight ? "font-poppins font-bold text-blue-500 text-lg text-end 2xl:text-[3rem] lg:text-[2rem]" : "font-poppins font-bold dark:text-white text-lg text-end 2xl:text-[3rem] lg:text-[2rem]"}>Don't you ever give up!</h1>
            <p className={isLight ? "font-poppins text-black text-base text-end 2xl:text-[1.5rem] lg:text-[1rem]" : "font-poppins dark:text-white text-base text-end 2xl:text-[1.5rem] lg:text-[1rem]"}>Art is our medicine. That's why we always feel better when we admire them. Stay safe.</p>
            <div className="ml-[16rem] 2xl:ml-[14rem]">
              <Button onClick={() => alert("Work in progress!")} title="See our tips" />
            </div>
          </div>
          {isLight ? (
            <Image src={Sky} alt="Sky" width={500} className="rounded-lg sm:w-[31rem] 2xl:w-[50rem]" />
          ) : (
            <Image src={GirlInTheForest} alt="Girl In The Forest" width={500} className="rounded-lg" />
          )}
        </>
      ) : (
        <>
          {isLight ? (
            <div className="flex items-center justify-center flex-col">
              <Image src={Sky} alt="Sky" width={500} className="rounded-lg" />
              <div className="flex items-center justify-center flex-col mt-[1rem] gap-5">
                <b className="text-center text-[2rem] font-poppins text-blue-500">Don't you ever give up!</b>
                <p className="font-poppins text-black text-base text-center w-1/2">Art is our medicine. That's why we always feel better when we admire them. Stay safe.</p>
                <Button onClick={() => alert("Work in progress!")} title="See our tips" />
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center flex-col">
              <Image src={GirlInTheForest} alt="Girl In The Forest" width={500} className="rounded-lg" />
              <div className="flex items-center justify-center flex-col mt-[1rem] gap-5">
                <b className="text-center text-[2rem] font-poppins dark:text-white">Don't you ever give up!</b>
                <p className="font-poppins dark:text-white text-base text-center w-1/2">Art is our medicine. That's why we always feel better when we admire them. Stay safe.</p>
                <Button onClick={() => alert("Work in progress!")} title="See our tips" />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}