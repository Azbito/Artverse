import MountainMorning from '../../../public/images/art-mountain.jpg'
import Message from '../../../public/images/send.png'
import Donate from '../../../public/images/donate.png'
import Image from 'next/image';
import Card from '../Card';
import PaintBrush from '../../../public/images/paint-brush.png'
import Cards from '../Cards';

export default function LightMode() {

  return (
    <div className="flex flex-col">
      <div className="mt-32 flex items-center justify-around flex-row">
        <Image src={MountainMorning} alt="Starry Night" className="rounded-lg w-1/2 h-full" width={500} />
        <div className='w-1/3'>
          <h1 className="font-kristi text-xl text-blue-500">Art</h1>
          <p className="font-julius text-base text-black">Express your emotions. Fell emotions. Be free.</p>
        </div>
      </div>

      <Cards />
    </div>
  )
}
