import Image from "next/image";
import { CiLocationArrow1 } from "react-icons/ci";
import x from '@/app/assets/gridsvg.png'
import bycicleImage from '@/app/assets/bycicleImageLanding.png'

export default function Home() {
  return (
    <>
      
      <div className="grid grid-cols-2 pt-48 m-3 rounded-lg bg-[#EBEEED]"> 
        
        <div className="flex flex-row px-24">
            <div>
             
              <h1 className="text-black text-4xl font-semibold mt-3">{"امروز بیاید باهم"}</h1>
              <h1 className="text-black text-4xl font-semibold mt-3">{"بهترین های رو برای همیشه"}</h1>
              <h1 className="text-black text-4xl font-semibold mt-3">{"پیدا کنیم"}</h1>
             
              <h1 className="text-black">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز</h1>
              <div className="flex flex-row gap-3">
                <button className="px-3 py-4 bg-black text-white">همین الان خرید کن</button>
                <div className="p-4 bg-orange-400 rounded-full">
                  <CiLocationArrow1 />
                </div> 
              </div>
              <div className="flex flex-row gap-5">
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-2xl font-bold">20+</h1>
                  <p>سال سابقه کار</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-2xl font-bold">20+</h1>
                  <p>سال سابقه کار</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-2xl font-bold">20+</h1>
                  <p>سال سابقه کار</p>
                </div>
              </div>
            </div>
        </div>

        <div className="relative flex flex-col bg-red-300 justify-center">
          <div className="flex flex-row">
            <div className="bg-red-200 h-40 rounded-tr-lg mr-10">LLL</div>
            <div className="bg-red-400 h-40 rounded-tl-lg mr-2">OOo</div>
          </div>
          <div className="flex flex-row">
            <div className="bg-purple-500 rounded-lg">LILLILIIIIII</div>
            <div className="p-3 rounded-full">OK</div>
            <div className="bg-green-500 rounded-lg">LILLILIIIIII</div>
          </div>
          <div className="w-20 h-20 rounded-full absolute bg-orange-300">
            <Image 
              alt="la"
              src={bycicleImage}
              height={200}
              width={200}/>
          </div>
        </div>

      </div> 

      <div className="w-full bg-gray-900 rounded-full ">
      
      </div>
      
    </>
  );
}

