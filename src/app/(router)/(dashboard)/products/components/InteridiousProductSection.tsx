import { simpleButtonTransitionClass } from "@/app/utils/hover_animation";
import { CiLocationArrow1 } from "react-icons/ci";

export default function InteridiousProductSection(){
    return (
        <div className={`flex flex-col px-20 pt-44 h-[calc(100vh-20px)] items-center justify-center rounded-lg bg-[#EBEEED] bg-[url('/bglast.png')] bg-cover bg-center`}> 
                <h1 className="text-white font-bold text-3xl">به استقبال فصل جدید بروید با لباس‌های منحصر به فرد و شیک ما!</h1>
                <p className="text-gray-300 w-[80%] text-center mt-4">مجموعه‌ای از لباس‌های باکیفیت، مناسب هر سبک و سلیقه. از مانتوها و کاپشن‌های گرم و راحت گرفته تا پیراهن‌های رسمی و کلاسیک.لباس‌هایی با طراحی خاص و پارچه‌های طبیعی که شما را در هر لحظه درخشان می‌کنند. همین امروز استایل دلخواه خود را پیدا کنید!</p>
                <div className="flex flex-row my-24 ">
                    <button className={`px-9 py-4 rounded-full bg-white text-black hover:scale-110 hover:shadow-lg hover:shadow-gray-900 ${simpleButtonTransitionClass}`}>همین الان خرید کن</button>
                    <div className={`flex w-14 text-white hover:text-white hover:scale-125 hover:bg-primary border-black  pr-1 justify-center hover:shadow-lg hover:shadow-gray-400 items-center bg-black rounded-full cursor-pointer ${simpleButtonTransitionClass}`}>
                    <CiLocationArrow1 size={25}/>
                    </div>
                </div>

            </div> 
    )
}