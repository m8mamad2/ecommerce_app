import React, { ReactNode } from "react";
import { MdMarkEmailRead } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import Image from "next/image";

import footerIcon from '@/app/assets/icons/sosmed.png';
import footerIcon1 from '@/app/assets/icons/sosmed-1.png';
import footerIcon2 from '@/app/assets/icons/sosmed-2.png';
import footerIcon3 from '@/app/assets/icons/sosmed-3.png';
import { simpleButtonTransitionClass } from "../utils/hover_animation";

import { CiTwitter } from "react-icons/ci"; 
import { CiInstagram } from "react-icons/ci";
import { PiTelegramLogoLight } from "react-icons/pi";
import { IconType } from "react-icons";



export default function Footer() {

    const footerQuickLink = ['محصولات ما', 'درباره ما', 'محصولات',]
    const footerContackLink: { title: string, icon: ReactNode }[] = [
        { title: 'm8mama@gmail.com', icon: <MdMarkEmailRead /> },
        { title: '@skdlfaj', icon: <FaTelegram /> },
        { title: '+91292949348', icon: <BiPhoneCall /> },
    ];
    // const footerSocial = [footerIcon, footerIcon1, footerIcon2, footerIcon3];
    const footerSocial: IconType[] = [CiTwitter,CiInstagram,PiTelegramLogoLight]

    return (
        <footer className="relative flex flex-col py-10 justify-center items-center px-32 mt-3 mb-3 rounded-lg bg-black mx-10">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">

                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">دسترسی سریع </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-normal gap-4">
                                {
                                    footerQuickLink.map((e, index) =>
                                        <li key={index} className={`${simpleButtonTransitionClass}  hover:scale-110 hover:text-primary my-2`}>
                                            <a href="https://tailwindcss.com/" className="">{e}</a>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="">
                            <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">ارتباط با ما</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-normal gap-4">
                                {
                                    footerContackLink.map((e, index) =>
                                        <li key={index} className="mb-4">
                                            <a href="https://github.com/themesberg/flowbite" className={`flex flex-row items-center gap-3 ${simpleButtonTransitionClass}  hover:scale-110 hover:text-primary my-2`}>
                                                {e.icon}
                                                {e.title}
                                            </a>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="mb-6 md:mb-0 flex flex-col justify-between">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                        </a>
                        <div>
                            <div className="flex flex-row gap-5">
                                {
                                    footerSocial.map((e, index) => 
                                        <div key={index}>
                                            
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}
