import Image from "next/image";
import { CiLocationArrow1 } from "react-icons/ci";
import x from '@/app/assets/gridsvg.png'
import bycicleImage from '@/app/assets/bycicleImageLanding.png'
import manLandingImage from '@/app/assets/imageLanding.png'
import playLandingIcon from '@/app/assets/playLandingIcon.png'
import landigCircleImage from '@/app/assets/landigCircleImage.png'
import arrowLandigLeftImage from '@/app/assets/arrowLanding1.png'
import arrowLandigRightImage from '@/app/assets/arrowLanding2.png'

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

        <div className="relative flex flex-col bg-red-300 justify-center items-center ">
          
          <div className="flex flex-row mt-4">
            <div 
              style={{ borderTopRightRadius: '60px' }}
              className="bg-red-200  h-96 rounded-tr-lg mr-10 w-60">
                <Image 
                  style={{ borderTopRightRadius: '60px' }}
                  className="w-full h-full object-cover rounded-tr-lg"
                  src={manLandingImage}
                  alt="landingImage"/>
            </div>
            <div 
              style={{ borderTopLeftRadius: '60px' }}
              className="flex flex-col text-center justify-start pt-10 w-60 items-center bg-gradient-to-r from-[#5DEECB] to-[#32D3AC] h-96  mr-2">
                <Image src={playLandingIcon} alt="playLandingIcon"/>
                <h1>FASHION AWWARD</h1>
                <h1>WINNDER</h1>
            </div>
          </div>

          <div className="flex flex-row mb-10 mt-48">
            <div className="bg-purple-500 justify-center items-center flex py-1 rounded-lg shadow-2xl max-w-48 px-5 font-bold">PREMIMU QUALITY REQUIRE</div>
            <div className="p-3 rounded-full">
              <Image src={landigCircleImage} alt="landigCircleImage"/>
            </div>
            <div className="bg-green-500 justify-center items-center flex py-1 rounded-lg shadow-2xl max-w-48 px-5 font-bold">PREMIMU QUALITY REQUIRE</div>
          </div>
          
          <div className="w-72 h-72 flex flex-row rounded-full p-2 bg-orange-300 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/3">
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

        </div>

      </div> 

      <div className="w-full bg-gray-900 rounded-full ">
      
      </div>
      
    </>
  );
}

