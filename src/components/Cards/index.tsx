import Message from '../../../public/images/send.png'
import Donate from '../../../public/images/donate.png'
import Card from '../Card';
import PaintBrush from '../../../public/images/paint-brush.png'

export default function Cards() {
  return (
    <div className="flex flex-row items-center justify-around mt-32">
      <Card img={Message} alt='Message' title='Contact us' description="Do you want to rate us? Give us a suggestion? Are you getting troubles on the website? Don't worry; we are here." onClick={() => alert("This project was made to understand local storage. There's no more pages.")} />
      <Card img={Donate} alt='Donate' title='Donate' description="To keep this website alive, you may help us to preserve it. Donate if you can, if you truly want to." onClick={() => alert("This project was made to understand local storage. There's no more pages.")} />
      <Card img={PaintBrush} alt='Pencil brush' title='Contribute' description="Are you an artist? Have some ideas? Join to our group to post your works!" onClick={() => alert("This project was made to understand local storage. There's no more pages.")} />
    </div>
  )
}