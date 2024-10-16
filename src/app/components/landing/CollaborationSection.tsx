import Image from "next/image";


import TwiteerIcon from '@/app/assets/icons/twitter.png';
import instagramIcon from '@/app/assets/icons/instagram.png';
import facebookIcon from '@/app/assets/icons/facebook.png';
import youtubeIcon from '@/app/assets/icons/youtube.png';

import FashionImaget1 from '@/app/assets/landing/image4.png'
import FashionImaget2 from '@/app/assets/landing/image5.png'
import FashionImaget3 from '@/app/assets/landing/image6.png'
import FashionImaget4 from '@/app/assets/landing/image7.png'

import { CiTwitter } from "react-icons/ci"; 
import { CiInstagram } from "react-icons/ci";
import { PiTelegramLogoLight } from "react-icons/pi";
import { simpleButtonTransitionClass } from "@/app/utils/hover_animation";



export default function CollaborationSection(){

    const images = [FashionImaget1,FashionImaget2,FashionImaget3]

    return (
        <div className={`relative flex flex-col px-32 mt-8 rounded-lg bg-[#D9D0FF] bg-[url('/grid.png')]`}>
        <div className=" flex flex-row gap-5  w-full justify-end mt-10">
          <CiTwitter className={`text-gray-800 border-2 p-2 w-14 h-14 border-gray-800 rounded-full ${simpleButtonTransitionClass} hover:scale-95 hover:text-primary hover:border-white`} size={40}/>
          <CiInstagram className={`text-gray-800 border-2 p-2 w-14 h-14 border-gray-800 rounded-full ${simpleButtonTransitionClass} hover:scale-95 hover:text-primary hover:border-white`} size={40}/>
          <PiTelegramLogoLight className={`text-gray-800 border-2 p-2 w-14 h-14 border-gray-800 rounded-full ${simpleButtonTransitionClass} hover:scale-95 hover:text-primary hover:border-white`} size={40}/>
        </div>

        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-6xl font-semibold mt-8">همکاری با بهترین ها</h1>
            <h1 className="text-6xl font-semibold mt-8">قیمت ارزان</h1>
            <h1 className="text-6xl font-semibold mt-8">تولید های اختصاصی</h1>
          </div>
          <div className="flex flex-col">
            <h1 className="text-gray-500 text-sm font-light mt-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشدد</h1>
            <h1 className="text-gray-500 text-sm font-light mt-6">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشدد.
            </h1>
          </div>
        </div>

        <div className="relative max-h-96 h-96 mb-10 mt-6">

          <Image 
            className={`w-full rounded-full mt-16 border-4 h-80 border-white bg-[url('/image7.png')]  ${simpleButtonTransitionClass} hover:scale-90 hover:shadow-lg hover:shadow-gray-400`}
            src={FashionImaget4}
            alt='fashion'
          />

          <div className="flex flex-row gap-7 absolute left-1/2 transform -translate-x-1/2 top-2">
            {images.map((e,index)=> 
              <Image 
                className={`rounded-full w-28 h-28 border-4 border-white ${simpleButtonTransitionClass} hover:scale-125 hover:shadow-lg hover:shadow-gray-400`}
                key={index} 
                src={e} 
                alt="e" />)}
          </div>

        </div>

      </div>
    )
}