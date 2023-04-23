import StarryNight from '../../../public/images/starry-night.jpg'
import Image from 'next/image';
import Card from '../Card';
import Message from '../../../public/images/send.png'
import Donate from '../../../public/images/donate.png'
import PaintBrush from '../../../public/images/paint-brush.png'
import Cards from '../Cards';

export default function NightMode() {
  return (
    <div className="flex flex-col">
      <div className="mt-32 flex items-center justify-around flex-row">
        <Image src={StarryNight} alt="Starry Night" className="rounded-lg w-1/2 h-full" width={500} />
        <div className='w-1/3'>
          <h1 className="font-kristi text-xl text-white">Art</h1>
          <p className="font-julius text-base text-white">Express your emotions. Fell emotions. Be free.</p>
        </div>
      </div>

      <Cards />
    </div>
  )
}