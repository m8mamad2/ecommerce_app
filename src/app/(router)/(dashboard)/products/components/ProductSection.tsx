import { simpleButtonTransitionClass } from "@/app/utils/hover_animation"
import { Button } from "@nextui-org/react"

export default function ProductSection(){

    const dataNew = ['./product/1.png','./product/2.png','./product/3.png','./product/4.png','./product/1.png','./product/2.png','./product/3.png','./product/4.png','./product/1.png','./product/2.png','./product/3.png','./product/4.png']
    
    return (
        <div className="mt-8 rounded-lg py-6 px-10 bg-gray-200 ">
                <div className="w-full flex flex-row mb-5 justify-between items-center">
                    <h1 className="text-2xl font-bold">انواع کالاهای ما</h1>
                    <Button variant="ghost" className="rounded-lg hover:text-white border-1 text-black text-sm py-1 px-5">دیدن همه</Button>
                </div>
                <div className="gap-6 grid grid-cols-2 sm:grid-cols-5">
                    {dataNew.map((item, index) => (
                        <div key={index} className={`rounded-xl bg-white p-2 ${simpleButtonTransitionClass} cursor-pointer hover:shadow-xl hover:scale-105`}>
                            <div
                                className={`border-none h-36 relative rounded-lg`}
                                style={{ backgroundImage: `url(${item})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
                                <button className="bg-white rounded-2xl absolute right-2 bottom-3 text-sm shadow-lg py-1 w-20 text-black ">پرفروش</button>
                            </div>
                            <div className="flex flex-row justify-between my-2 px-1">
                                <h1 className="text-base">LILI</h1>
                                <h1 className="text-base">50$</h1>
                            </div>
                            <div>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet </div>
                            <Button className="mt-4 mb-1"> اضافه کردن به سبد</Button>
                        </div>
                    ))}
                </div>
            </div>
    )
}