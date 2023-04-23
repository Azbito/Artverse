import { useContext, useEffect, useState } from 'react';
import LightMode from '@/components/LightMode';
import NightMode from '@/components/NightMode';
import NavBar from '@/components/NavBar';
import { LightContext } from '@/contexts/lightContext';

export default function Home() {
  const { isLight, setIsLight } = useContext(LightContext)


  return (
    <>
      <div className={isLight ? "bg-white h-full" : "bg-slate-800 h-full"}>
        {isLight ?
          <LightMode />
          :
          <NightMode />
        }
      </div>
    </>
  )
}
