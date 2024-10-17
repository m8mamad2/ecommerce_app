import { simpleButtonTransitionClass } from "@/app/utils/hover_animation";

export default function InstallableProductsSection(){
    return (
        <div className="grid grid-cols-2 h-96 mt-8 gap-6 bg-orange-100 py-5 px-10 rounded-lg">
                    <div className={`rounded-xl bg-red-100 h-full bg-[url('/product/22.png')] bg-cover bg-center hover:scale-95 ${simpleButtonTransitionClass}`}></div>
                    <div className="grid grid-rows-2 gap-5">
                        <div className={`hover:scale-95 ${simpleButtonTransitionClass}`}>
                            <h1 className="text-2xl font-bold mt-4">محصولات قابل نصب ما</h1>
                            <h1 className="mt-4 text-sm text-gray-500">اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود. طراحان وب و گرافیک از این متن برای پرکردن صفحه و ارائه شکل کلی طرح استفاده می‌کنند. </h1>
                        </div>
                        <div className={`bg-orange-100 rounded-xl w-full bg-[url('/product/23.png')] bg-cover bg-center hover:scale-95 ${simpleButtonTransitionClass}`}></div>
                    </div>
            </div>
    )
}