import Image from "next/image";
import { CiLocationArrow1 } from "react-icons/ci";

import bycicleImage from '@/app/assets/bycicleImageLanding.png'
import manLandingImage from '@/app/assets/imageLanding.png'
import playLandingIcon from '@/app/assets/playLandingIcon.png'
import landigCircleImage from '@/app/assets/landigCircleImage.png'
import arrowLandigLeftImage from '@/app/assets/arrowLanding1.png'
import arrowLandigRightImage from '@/app/assets/arrowLanding2.png'
import { simpleButtonTransitionClass } from "@/app/utils/hover_animation";

export default function IntroductionSection(){
    return (
        <div className={`grid grid-cols-2 px-6 pt-40 rounded-lg bg-[#EBEEED] bg-[url('/grid.png')]`}> 
        
        <div className="flex flex-row px-24">
            <div>
             
              <h1 className="text-black text-6xl font-semibold mt-6">{"امروز بیاید باهم"}</h1>
              <h1 className="text-black text-6xl font-semibold mt-6">{"بهترین های رو برای همیشه"}</h1>
              <h1 className="text-black text-6xl font-semibold mt-6">{"پیدا کنیم"}</h1>
             
              <h1 className="text-gray-600 text-sm mt-7">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز</h1>
              <div className="flex flex-row gap-3 mt-24">
                <button className={`px-9 py-4 rounded-full bg-black text-white hover:scale-110 hover:shadow-lg hover:shadow-gray-400 ${simpleButtonTransitionClass}`}>همین الان خرید کن</button>
                <div className={`flex w-14 hover:text-white hover:scale-125 hover:bg-primary border-white  pr-1 justify-center hover:shadow-lg hover:shadow-gray-400 items-center bg-white rounded-full cursor-pointer ${simpleButtonTransitionClass}`}>
                  <CiLocationArrow1 size={25}/>
                </div> 
              </div>

              <div className="flex flex-row gap-24 mt-20">
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-6xl font-extrabold">20+</h1>
                  <p className="text-sm font-thin">سال سابقه کار</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-6xl font-extrabold">20+</h1>
                  <p className="text-sm font-thin">سال سابقه کار</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-6xl font-extrabold">20+</h1>
                  <p className="text-sm font-thin">سال سابقه کار</p>
                </div>
              </div>
            </div>
        </div>

        <div className="relative flex flex-col justify-center items-center ">
          
          <div className="flex flex-row mt-4">
            <div 
              style={{ borderTopRightRadius: '60px' }}
              className="bg-red-200 h-96 rounded-tr-lg mr-10 w-72">
                <Image 
                  style={{ borderTopRightRadius: '60px' }}
                  className="w-full h-full object-cover rounded-tr-lg"
                  src={manLandingImage}
                  alt="landingImage"/>
            </div>
            <div 
              style={{ borderTopLeftRadius: '60px' }}
              className="flex flex-col text-center justify-start pt-16 w-72 items-center bg-gradient-to-r from-[#5DEECB] to-[#32D3AC] h-96  mr-2">
                <Image src={playLandingIcon} alt="playLandingIcon"/>
                <h1 className="font-bold mt-2 ">پیشرو در تولید</h1>
                <h1 className="font-bold">محصولات فشن</h1>
            </div>
          </div>

          <div className="flex flex-row mb-10 mt-48 mr-8">
            <div className="bg-[#D9D0FF] shadow-[#bbacfa] justify-center items-center flex py-1 rounded-lg shadow-lg max-w-48 px-7">داشتن بهترین کیفیت</div>
            <div className="p-3 rounded-full mx-6">
              <Image src={landigCircleImage} alt="landigCircleImage"/>
            </div>
            <div className="bg-[#BBF6BE] shadow-[#a3eca7] justify-center items-center flex py-1 rounded-lg shadow-lg max-w-48 px-3">سفارش مستقیم از تولیدی</div>
          </div>
          
          <div className="absolute  w-full flex flex-row items-end justify-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/3 ">
            <Image src={arrowLandigRightImage} alt="arror" className="mt-56 mr-8"/>
            <div className="w-72 h-72 mb-24 mx-3 flex flex-row rounded-full p-2 ">
              <div className="w-full h-full rounded-full border-1 border-black p-2">
                <div className="w-full h-full rounded-full bg-white flex justify-center items-center pt-4 pl-3">
                  <Image 
                    alt="la"
                    src={bycicleImage}
                    height={230}
                    width={230}/>
                </div>
              </div>
            </div>
            <Image src={arrowLandigLeftImage} alt="arror"/>
          </div>

        </div>

      </div> 
    )
}