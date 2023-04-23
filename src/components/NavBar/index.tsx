import { LightContext } from '@/contexts/lightContext';
import useLight from '@/hooks/useLight';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useContext, useEffect } from 'react';


export default function NavBar() {
  const { renderLight, renderNight } = useLight()
  const { isLight } = useContext(LightContext)

  return (
    <div className={isLight ? "bg-blue-500 h-sm w-full justify-center items-center flex fixed top-0" : "bg-zinc-800 h-sm justify-center items-center flex fixed w-full top-0 z-5"}>
      {isLight ?
        <DarkModeIcon className="text-yellow-400 absolute right-8 cursor-pointer" onClick={renderNight} />
        :
        <LightModeIcon className="text-white absolute right-8 cursor-pointer" onClick={renderLight} />
      }
    </div>
  )
}