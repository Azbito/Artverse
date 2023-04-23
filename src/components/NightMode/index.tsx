import StarryNight from '../../../public/images/starry-night.jpg'
import Image from 'next/image';
import Cards from '../Cards';
import Offer from '../Offer';
import ArtCategories from '../ArtCategories';

export default function NightMode() {
  return (
    <div className="flex flex-col">
      <div className="mt-32 flex items-center justify-around flex-row gap-32">
        <Image src={StarryNight} alt="Starry Night" className="rounded-lg ml-[5rem] w-1/2 2xl:w-[1/2]" />
        <div>
          <h1 className="font-kristi text-xl text-white xl:text-[7rem] 2xl:text-[10rem]">Artverse</h1>
          <p className="font-julius text-base text-white xl:text-[2rem] 2xl:text-[3rem]">Express your emotions. Fell emotions. Be free.</p>
        </div>
      </div>
      <Cards />
      <Offer />
      <ArtCategories />
    </div>
  )
}