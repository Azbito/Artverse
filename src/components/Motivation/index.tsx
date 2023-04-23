import Image from "next/image";
import Sky from '../../../public/images/sky.jpg'
import Button from "../Button";

export default function Motivation() {
  return (
    <div className="flex justify-around items-center gap-4">
      <div className="flex-col items-center justify-center flex w-[23rem]">
        <h1 className="font-poppins font-bold text-blue-500 text-lg text-end">Don't you ever give up!</h1>
        <p className="font-poppins text-base text-end">Art is our medicine. That's why we always feel better when we admire them. Stay safe.</p>
        <div className="ml-[15rem]">
          <Button onClick={() => alert("Work in progress!")} title="See our tips" />
        </div>
      </div>
      <Image src={Sky} alt="Sky" width={500} className="rounded-lg" />
    </div >
  )
}