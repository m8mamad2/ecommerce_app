import { div } from "framer-motion/client";
import { CiLocationArrow1 } from "react-icons/ci";
import { Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import ProductCard from "@/app/components/ProductCard";

export default function ProductsPage(){
    const data = ['./product/1.png','./product/2.png','./product/3.png','./product/4.png','./product/1.png',]
    const dataNew = ['./product/1.png','./product/2.png','./product/3.png','./product/4.png','./product/1.png']
    return (
        <div className="mx-10 my-4">
            
            <div className={`flex flex-col px-20 pt-44 h-[calc(100vh-20px)] items-center justify-center rounded-lg bg-[#EBEEED] bg-[url('/bglast.png')] bg-cover bg-center`}> 
                <h1 className="text-white font-bold text-3xl">به استقبال فصل جدید بروید با لباس‌های منحصر به فرد و شیک ما!</h1>
                <p className="text-gray-300 w-[80%] text-center mt-4">مجموعه‌ای از لباس‌های باکیفیت، مناسب هر سبک و سلیقه. از مانتوها و کاپشن‌های گرم و راحت گرفته تا پیراهن‌های رسمی و کلاسیک.لباس‌هایی با طراحی خاص و پارچه‌های طبیعی که شما را در هر لحظه درخشان می‌کنند. همین امروز استایل دلخواه خود را پیدا کنید!</p>
                <div className="flex flex-row my-24 ">
                    <button className="px-9 py-4 rounded-full bg-white text-black">همین الان خرید کن</button>
                    <div className="flex w-14 pr-1 justify-center items-center bg-black rounded-full text-white">
                        <CiLocationArrow1 size={25}/>
                    </div> 
                </div>
            </div> 

            <div className="mt-8 rounded-lg py-6 px-10 bg-gray-200">
                <div className="w-full flex flex-row mb-5 justify-between items-center">
                    <h1 className="text-2xl font-bold">بیشترین جست و جو توسط افراد</h1>
                    <Button variant="ghost" className="rounded-lg hover:text-white border-1 text-black text-sm py-1 px-5">دیدن همه</Button>
                </div>
                <div className="gap-6 grid grid-cols-2 sm:grid-cols-4">
                    {data.map((item, index) => <ProductCard  item={item} index={index}/>)}
                </div>
            </div>
            

            <div className="grid grid-cols-2 h-96 mt-8 gap-6 bg-orange-100 py-5 px-10 rounded-lg">
                    <div className="rounded-xl bg-red-100 h-full bg-[url('/product/22.png')] bg-cover bg-center"></div>
                    <div className="grid grid-rows-2 gap-5">
                        <div>
                            <h1 className="text-2xl font-bold mt-4">محصولات قابل نصب ما</h1>
                            <h1 className="mt-4 text-sm text-gray-500">اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود. طراحان وب و گرافیک از این متن برای پرکردن صفحه و ارائه شکل کلی طرح استفاده می‌کنند. </h1>
                        </div>
                        <div className="bg-orange-100 rounded-xl w-full bg-[url('/product/23.png')] bg-cover bg-center">s</div>
                    </div>
            </div>

            <div className="mt-8 rounded-lg py-6 px-10 bg-gray-200 ">
                <div className="w-full flex flex-row mb-5 justify-between items-center">
                    <h1 className="text-2xl font-bold">بیشترین جست و جو توسط افراد</h1>
                    <Button variant="ghost" className="rounded-lg hover:text-white border-1 text-black text-sm py-1 px-5">دیدن همه</Button>
                </div>
                <div className="gap-6 grid grid-cols-2 sm:grid-cols-5">
                    {dataNew.map((item, index) => <ProductCard  item={item} index={index}/>)}
                </div>
            </div>


        </div>
    );
}

