import MountainMorning from '../../../public/images/art-mountain.jpg'
import Image from 'next/image';
import Cards from '../Cards';
import Offer from '../Offer';
import ArtCategories from '../ArtCategories';
import Motivation from '../Motivation';
import Footer from '../Footer';

export default function LightMode() {

  return (
    <div className="flex flex-col">
      <div className="mt-32 flex items-center justify-around flex-row">
        <Image src={MountainMorning} alt="Starry Night" className="rounded-lg w-1/2 h-full" width={500} />
        <div className='w-1/3'>
          <h1 className="font-kristi text-xl text-blue-500 xl:text-[7rem] 2xl:text-[10rem]">Artverse</h1>
          <p className="font-julius text-base text-black xl:text-[2rem] 2xl:text-[3rem]">Express your emotions. Fell emotions. Be free.</p>
        </div>
      </div>
      <Cards />
      <Offer />
      <ArtCategories />

      <Motivation />
      <Footer />
    </div>
  )
}
