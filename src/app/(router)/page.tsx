import Image from "next/image";
import { CiLocationArrow1 } from "react-icons/ci";
// import gridSvgImage from '@/app/assets/grid.png'
import bycicleImage from '@/app/assets/bycicleImageLanding.png'
import manLandingImage from '@/app/assets/imageLanding.png'
import playLandingIcon from '@/app/assets/playLandingIcon.png'
import landigCircleImage from '@/app/assets/landigCircleImage.png'
import arrowLandigLeftImage from '@/app/assets/arrowLanding1.png'
import arrowLandigRightImage from '@/app/assets/arrowLanding2.png'
import TextSlider from "../components/landing/Slider";

import TwiteerIcon from '@/app/assets/icons/twitter.png';
import instagramIcon from '@/app/assets/icons/instagram.png';
import facebookIcon from '@/app/assets/icons/facebook.png';
import youtubeIcon from '@/app/assets/icons/youtube.png';

import FashionImaget1 from '@/app/assets/landing/image4.png'
import FashionImaget2 from '@/app/assets/landing/image5.png'
import FashionImaget3 from '@/app/assets/landing/image6.png'
import FashionImaget4 from '@/app/assets/landing/image7.png'

export default function Home() {

  const images = [FashionImaget1,FashionImaget2,FashionImaget3]
  const hotProducts = [1,1,1,1]
  const customeresGrid = [1,1,1,1,1,1]
  
  return (
    <div className="m-4">
      
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

              <div className="flex flex-row gap-20 mt-20">
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-5xl font-extrabold">20+</h1>
                  <p className="text-sm font-thin">سال سابقه کار</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-5xl font-extrabold">20+</h1>
                  <p className="text-sm font-thin">سال سابقه کار</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-5xl font-extrabold">20+</h1>
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
              className="flex flex-col text-center justify-start pt-10 w-72 items-center bg-gradient-to-r from-[#5DEECB] to-[#32D3AC] h-96  mr-2">
                <Image src={playLandingIcon} alt="playLandingIcon"/>
                <h1>FASHION AWWARD</h1>
                <h1>WINNDER</h1>
            </div>
          </div>

          <div className="flex flex-row mb-10 mt-48 mr-8">
            <div className="bg-purple-500 justify-center items-center flex py-1 rounded-lg shadow-2xl max-w-48 px-5 font-bold">PREMIMU QUALITY REQUIRE</div>
            <div className="p-3 rounded-full mx-6">
              <Image src={landigCircleImage} alt="landigCircleImage"/>
            </div>
            <div className="bg-green-500 justify-center items-center flex py-1 rounded-lg shadow-2xl max-w-48 px-5 font-bold">PREMIMU QUALITY REQUIRE</div>
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
        
        <div className="flex flex-row mt-10">
          <Image src={TwiteerIcon} alt="TwiteerIcon"/>
          <Image src={instagramIcon} alt="instagramIcon"/>
          <Image src={facebookIcon} alt="facebookIcon"/>
          <Image src={youtubeIcon} alt="youtubeIcon"/>
        </div>

        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-5xl font-semibold mt-6">Lorem</h1>
            <h1 className="text-5xl font-semibold mt-6">INSPUTM</h1>
            <h1 className="text-5xl font-semibold mt-6">WORLDICELOKN</h1>
          </div>
          <div className="flex flex-col">
            <h1 className="text-gray-500 text-sm font-light">{"Lorem ipsum dolor sit amet consectetur adipisicing elit., quibusdam voluptates! Nulla, tenetur cum accusantium ab exercitationem aliquam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate beatae quae provident aut earum corporis itaque obcaecati magni totam perspiciatis iure, quibusdam voluptates! Nulla, tenetur cum accusantium ab exercitationem aliquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate beatae quae provident aut earum corporis itaque obcaecati magni totam perspiciatis iure, quibusdam voluptates! Nulla, tenetur cum accusantium ab exercitationem aliquam? \n\t Lorem ipsum dolor sit amet consectetur adipisicing elit. V "}</h1>
            <h1 className="text-gray-500 text-sm font-light mt-6">{"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate beatae quae provident aut earum corporis itaque obcaecati magni totam perspiciatis iure, quibusdam voluptates! Nulla, tenetur cum accusantium ab exercitationem aliquam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate beatae quae provident aut earum corporis itaque obcaecati magni totam perspiciatis iure, quibusdam voluptates! Nulla, tenetur cum accusantium ab exercitationem aliquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate beatae quae provident aut earum corporis itaque obcaecati magni totam perspiciatis iure, quibusdam voluptates! Nulla, tenetur cum accusantium ab exercitationem aliquam? \n\t Lorem ipsum dolor sit amet consectetur adipisicing elit. V "}</h1>
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

      <div className={`relative flex flex-col py-10 justify-center items-center px-32 mt-8 rounded-lg bg-[#D9D0FF] bg-[url('/grid.png')]`}>
          <h1 className="text-5xl font-semibold">OUR HOT SELLING PRODUCTS</h1>
          <p className="text-gray-500 text-sm my-6">Discover a fusion trend and sophisitcation in our create colelction .From chic essentail  to essinitoaij to state picecs, out fashion ebraces invididautaly. ensurini g woekjrlej sdfwemo sdorjoienit </p>
          <div className="grid grid-cols-4 gap-4 w-full ">
                {hotProducts.map((e,index)=> 
                  <div  className="bg-orange-400" key={index} >
                    <div className="rounded-lg bg-white flex justify-center h-96 items-center ">
                      {/* <Image /> */}
                      sdklfjsd 
                    </div>
                    <div className="flex flex-row justify-between items-center">
                      <h1>White HOdie</h1>
                      <h1>50$</h1>
                    </div>
                  </div>
                )}
          </div>
      </div>


      <div className={`relative flex flex-col py-10 justify-center items-center px-32 mt-8 rounded-lg bg-[#D9D0FF] bg-[url('/grid.png')]`}>
         <h1 className="text-5xl font-semibold">WHAT OUT CLIENT SAYS</h1>
         <div className="grid grid-cols-3 gap-8">
                {
                  customeresGrid.map((e,index)=> 
                    <div key={index} className="rounded-lg bg-white ">
                      <Image 
                        className="rounded-full w-32 h-32"
                        src={manLandingImage}
                        alt="image" />
                      <p className="text-gray-500 text-sm my-6">Discover a fusion trend and sophisitcation in our create colelction .From chic essentail  to essinitoaij to state picecs, out fashion ebraces invididautaly. ensurini g woekjrlej sdfwemo sdorjoienit </p>
                      <h1 className="text-xl font-semibold">ALI MAMALY</h1>
                    </div> 
                  )
                }
         </div>
      </div>

      <div className={`relative flex flex-col py-10 justify-center items-center px-32 mt-8 rounded-lg bg-[#D9D0FF] bg-[url('/grid.png')]`}>
          <h1 className="text-5xl font-semibold">OUR HOT SELLING PRODUCTS</h1>
          <p className="text-gray-500 text-sm my-6">Discover a fusion trend and sophisitcation in our create colelction .From chic essentail  to essinitoaij to state picecs, out fashion ebraces invididautaly. ensurini g woekjrlej sdfwemo sdorjoienit </p>
          <div className="flex flex-row gap-3 mt-24">
            <button className="px-9 py-4 rounded-full bg-black text-white">همین الان خرید کن</button>
            <div className="flex w-14 pr-1 justify-center items-center bg-white rounded-full">
              <CiLocationArrow1 size={25}/>
            </div> 
          </div>
      </div>

      <footer className="relative flex flex-col py-10 justify-center items-center px-32 mt-8 rounded-lg bg-black bg-[url('/grid.png')]">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
              <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                            </li>
                            <li>
                                <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                            </li>
                            <li>
                                <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
                </span>
                <div className="flex mt-4 sm:justify-center sm:mt-0">
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                              <path fill="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                          </svg>
                        <span className="sr-only">Facebook page</span>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                              <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                          </svg>
                        <span className="sr-only">Discord community</span>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                          <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd"/>
                      </svg>
                        <span className="sr-only">Twitter page</span>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                        </svg>
                        <span className="sr-only">GitHub account</span>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clipRule="evenodd"/>
                      </svg>
                        <span className="sr-only">Dribbble account</span>
                    </a>
                </div>
            </div>
          </div>
      </footer>

      
    </div>
  );
}

