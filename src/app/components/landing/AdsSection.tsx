import { CiLocationArrow1 } from "react-icons/ci";

export default function AdsSection(){
    return (
        
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
    )
}