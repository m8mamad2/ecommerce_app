import Image from "next/image";


import MostSellImage from '@/app/assets/landing/mostSell.png'
import MostSellImage2 from '@/app/assets/landing/mostSell2.png'
import MostSellImage3 from '@/app/assets/landing/mostSell3.png'
import { simpleButtonTransitionClass } from "@/app/utils/hover_animation";

export default function MostSellSection(){
    const hotProducts = [MostSellImage, MostSellImage2 ,MostSellImage3 ,MostSellImage]
    return (
        <div className={`relative flex flex-col py-10 justify-center items-center px-32 mt-8 rounded-lg bg-[#EFEFEF] bg-[url('/grid.png')]`}>
          <h1 className="text-6xl font-semibold">پرفروش ترین محصول های ما</h1>
          <p className="text-gray-500 text-sm my-6">تلفیقی از روند و پیچیدگی را در مجموعه سرپرستی ما کشف کنید. از لوازم ضروری شیک گرفته تا تکه‌های معمولی، مد ما فردیت را در بر می‌گیرد و تضمین می‌کند که هر کمد لباسی منعکس‌کننده سبک، تطبیق پذیری و ظرافت جاودانه است.</p>
          <div className="grid grid-cols-4 gap-4 w-full ">
                {hotProducts.map((e,index)=> 
                  <div key={index}>
                    <div className="rounded-lg bg-white flex justify-center h-96 items-center ">
                      <Image src={e} alt="ss" className={`${simpleButtonTransitionClass} hover:scale-80`}/>
                    </div>
                    <div className="flex flex-row justify-between items-center px-4 mt-3">
                      <h1 className="text-2xl font-extrabold">هودی تک</h1>
                      <h1 className="text-2xl font-extrabold">۵۰$</h1>
                    </div>
                  </div>
                )}
          </div>
      </div>
    )
}