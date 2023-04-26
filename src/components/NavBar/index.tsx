import { LightContext } from '@/contexts/lightContext';
import useLight from '@/hooks/useLight';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useContext } from 'react';


export default function NavBar() {
  const { renderLight, renderNight } = useLight()
  const { isLight } = useContext(LightContext)

  return (
    <div className={isLight ? "bg-blue-500 h-sm w-full justify-between items-center flex fixed top-0 z-10 shadow-lg 2xl:h-[5rem]" : "dark:bg-zinc-800 h-sm justify-between items-center flex fixed w-screen top-0 z-10 shadow-lg 2xl:h-[5rem]"}>
      <strong className="dark:text-white text-white font-kristi text-[2rem] ml-5 cursor-pointer 2xl:text-[3rem]" onClick={() => alert("This project was made to understand local storage. There's no more pages.")}>Artverse</strong>
      {isLight ?
        <DarkModeIcon className="text-yellow-400 absolute right-8 cursor-pointer" onClick={renderNight} />
        :
        <LightModeIcon className="text-white absolute right-8 cursor-pointer" onClick={renderLight} />
      }
    </div>
  )
}