import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import StarryNight from '../../public/images/VanGogh8.jpg'
import MountainMorning from '../../public/images/art-mountain.jpg'

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [light, setLight] = useState(true)

  return (
    <div className={light ? "bg-white h-screen" : "bg-slate-800 h-screen"}>
      <div className={light ? "bg-blue-500 h-8 justify-center items-center flex" : "bg-slate-500 h-8 justify-center items-center flex"}>
        {light ?
          <DarkModeIcon className="text-yellow-400 absolute right-8 cursor-pointer" onClick={() => setLight(false)} />
          :
          <LightModeIcon className="text-white absolute right-8 cursor-pointer" onClick={() => setLight(true)} />
        }
      </div>
      {light ?
        <div className="mt-32 ml-20 flex justify-around">
          <Image src={MountainMorning} alt="Mountain Morning" className="rounded-lg w-1/2" />
          <div className='w-1/3 mt-16'>
            <h1 className="font-kristi text-xl text-blue-500">Art</h1>
            <p className="font-julius text-base">Express your emotions. Fell emotions. Be free.</p>
          </div>
        </div>
        :
        <div className="mt-32 ml-20 flex justify-around">
          <Image src={StarryNight} alt="Starry Night" className="rounded-lg w-1/2 h-full" width={500} />
          <div className='w-1/3 mt-16'>
            <h1 className="font-kristi text-xl text-white">Art</h1>
            <p className="font-julius text-base text-white">Express your emotions. Fell emotions. Be free.</p>
          </div>
        </div>
      }
    </div>
  )
}
