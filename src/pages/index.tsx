import { useContext } from 'react';
import LightMode from '@/components/LightMode';
import NightMode from '@/components/NightMode';
import { LightContext } from '@/contexts/lightContext';

export default function Home() {
  const { isLight } = useContext(LightContext)

  return (
    <>
      <div className={isLight ? "bg-white h-full" : "dark:bg-slate-800 h-screen w-full"}>
        {isLight ?
          <LightMode />
          :
          <NightMode />
        }
      </div>
    </>
  )
}
