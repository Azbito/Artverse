import StarryNight from '../../../public/images/starry-night.jpg'
import Image from 'next/image';
import Cards from '../Cards';
import Offer from '../Offer';
import ArtCategories from '../ArtCategories';
import Motivation from '../Motivation';
import Footer from '../Footer';

export default function NightMode() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-32 flex items-center justify-around sm:flex-col md:flex-row gap-10">
        <Image src={StarryNight} alt="Starry Night" className="rounded-lg md:ml-[5rem] sm:w-[30rem] md:w-[20rem] 2xl:w-[1/2]" />
        <div>
          <h1 className="font-kristi text-xl dark:text-white sm:text-center sm:text-[6rem] md:text-start md:text-[5rem] xl:text-[7rem] 2xl:text-[10rem]">Artverse</h1>
          <p className="font-julius text-base dark:text-white xl:text-[2rem] 2xl:text-[3rem]">Express your emotions. Fell emotions. Be free.</p>
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