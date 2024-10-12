import Image from "next/image";
import { CiLocationArrow1 } from "react-icons/ci";
// import gridSvgImage from '@/app/assets/grid.png'
import bycicleImage from '@/app/assets/bycicleImageLanding.png'
import manLandingImage from '@/app/assets/imageLanding.png'
import playLandingIcon from '@/app/assets/playLandingIcon.png'
import landigCircleImage from '@/app/assets/landigCircleImage.png'
import arrowLandigLeftImage from '@/app/assets/arrowLanding1.png'
import arrowLandigRightImage from '@/app/assets/arrowLanding2.png'
import TextSlider from "../../components/landing/Slider";

import TwiteerIcon from '@/app/assets/icons/twitter.png';
import instagramIcon from '@/app/assets/icons/instagram.png';
import facebookIcon from '@/app/assets/icons/facebook.png';
import youtubeIcon from '@/app/assets/icons/youtube.png';


import FashionImaget1 from '@/app/assets/landing/image4.png'
import FashionImaget2 from '@/app/assets/landing/image5.png'
import FashionImaget3 from '@/app/assets/landing/image6.png'
import FashionImaget4 from '@/app/assets/landing/image7.png'

import MostSellImage from '@/app/assets/landing/mostSell.png'
import MostSellImage2 from '@/app/assets/landing/mostSell2.png'
import MostSellImage3 from '@/app/assets/landing/mostSell3.png'
import React, { ReactNode } from "react";
import { MdMarkEmailRead } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";


export default function Home() {

  const images = [FashionImaget1,FashionImaget2,FashionImaget3]
  const hotProducts = [MostSellImage, MostSellImage2 ,MostSellImage3 ,MostSellImage]
  const customeresGrid = [1,1,1,1,1,1]
  
  return (
    <div className="my-4 mx-9">
      
      <div className={`grid grid-cols-2 px-6 pt-40 rounded-lg bg-[#EBEEED] bg-[url('/grid.png')]`}> 
        
        <div className="flex flex-row px-24">
            <div>
             
              <h1 className="text-black text-6xl font-semibold mt-6">{"امروز بیاید باهم"}</h1>
              <h1 className="text-black text-6xl font-semibold mt-6">{"بهترین های رو برای همیشه"}</h1>
              <h1 className="text-black text-6xl font-semibold mt-6">{"پیدا کنیم"}</h1>
             
              <h1 className="text-gray-600 text-sm mt-7">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز</h1>
              <div className="flex flex-row gap-3 mt-24">
                <button className="px-9 py-4 rounded-full bg-black text-white">همین الان خرید کن</button>
                <div className="flex w-14 pr-1 justify-center items-center bg-white rounded-full cursor-pointer">
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

      <TextSlider />
      
      <div className={`relative flex flex-col px-32 mt-8 rounded-lg bg-[#D9D0FF] bg-[url('/grid.png')]`}>
        <div className="flex flex-row gap-5  w-full justify-end mt-10">
          <Image src={TwiteerIcon} alt="TwiteerIcon"/>
          <Image src={instagramIcon} alt="instagramIcon"/>
          <Image src={facebookIcon} alt="facebookIcon"/>
          <Image src={youtubeIcon} alt="youtubeIcon"/>
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
            className="w-full rounded-full mt-16 border-4 h-80 border-white bg-[url('/image7.png')]"
            src={FashionImaget4}
            alt='fashion'
          />

          <div className="flex flex-row gap-7 absolute left-1/2 transform -translate-x-1/2 top-2">
            {images.map((e,index)=> 
              <Image 
                className="rounded-full w-28 h-28 border-4 border-white"
                key={index} 
                src={e} 
                alt="e" />)}
          </div>

        </div>

      </div>

      <div className={`relative flex flex-col py-10 justify-center items-center px-32 mt-8 rounded-lg bg-[#EFEFEF] bg-[url('/grid.png')] `}>
          <h1 className="text-6xl font-semibold">پرفروش ترین محصول های ما</h1>
          <p className="text-gray-500 text-sm my-6">تلفیقی از روند و پیچیدگی را در مجموعه سرپرستی ما کشف کنید. از لوازم ضروری شیک گرفته تا تکه‌های معمولی، مد ما فردیت را در بر می‌گیرد و تضمین می‌کند که هر کمد لباسی منعکس‌کننده سبک، تطبیق پذیری و ظرافت جاودانه است.</p>
          <div className="grid grid-cols-4 gap-4 w-full ">
                {hotProducts.map((e,index)=> 
                  <div key={index} >
                    <div className="rounded-lg bg-white flex justify-center h-96 items-center ">
                      <Image src={e} alt="ss"/>
                    </div>
                    <div className="flex flex-row justify-between items-center px-4 mt-3">
                      <h1 className="text-2xl font-extrabold">هودی تک</h1>
                      <h1 className="text-2xl font-extrabold">۵۰$</h1>
                    </div>
                  </div>
                )}
          </div>
      </div>


      <div className={`relative flex flex-col py-10 justify-center items-center px-32 mt-8 rounded-lg bg-[#BBF6BE] bg-[url('/grid.png')] `}>
         <h1 className="text-5xl font-semibold">مشتری ها درباره ما چی میگن</h1>
         <p className="text-gray-500 text-sm my-6">تلفیقی از روند و پیچیدگی را در مجموعه سرپرستی ما کشف کنید. از لوازم ضروری شیک گرفته تا تکه‌های معمولی، مد ما فردیت را در بر می‌گیرد و تضمین می‌کند که هر کمد لباسی منعکس‌کننده سبک، تطبیق پذیری و ظرافت جاودانه است.</p>
         <div className="grid grid-cols-3 gap-12">
                {
                  customeresGrid.map((e,index)=> 
                    <div key={index} className="rounded-xl bg-white shadow-lg flex flex-col items-center justify-center py-5 px-8">
                      <Image 
                        className="rounded-full w-16 h-16"
                        src={manLandingImage}
                        alt="image" />
                      <p className="text-gray-500 text-sm my-6">Discover a fusion trend and sophisitcation in our create colelction .From chic essentail  to essinitoaij to state picecs, out fashion ebraces invididautaly. ensurini g woekjrlej sdfwemo sdorjoienit </p>
                      <h1 className="text-xl font-medium">ALI MAMALY</h1>
                    </div> 
                  )
                }
         </div>
      </div>

      <div className={`relative flex flex-col py-10 justify-center items-center px-32 mt-8 rounded-lg bg-[#D9D0FF] bg-[url('/bglast.png')]`}>
          <h1 className="text-5xl font-semibold text-white mt-8">مشتری ها درباره ما چی میگن</h1>
          <p className="text-sm my-6 text-gray-300">امروز بازی مد خود را ارتقا دهید! مجموعه انتخاب شده ما را کاوش کنید و با سبکی جاودانه اظهار نظر کنید. خارق‌العاده را در آغوش بگیرید – اکنون برای کمد لباسی بخرید که به خوبی سخن می‌گوید</p>
          <div className="flex flex-row gap-3 my-24 ">
            <button className="px-9 py-4 rounded-full bg-[#BBF6BE] text-black">همین الان خرید کن</button>
            <div className="flex w-14 pr-1 justify-center items-center bg-white rounded-full">
              <CiLocationArrow1 size={25}/>
            </div> 
          </div>
      </div>

    </div>
  );
}

