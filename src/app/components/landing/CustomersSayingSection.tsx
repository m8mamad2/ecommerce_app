import Image from "next/image";
import manLandingImage from '@/app/assets/imageLanding.png'
import { simpleButtonTransitionClass } from "@/app/utils/hover_animation";
import { MdOutlineInsertComment } from "react-icons/md";

export default function CustomersSayingSection(){

    const customeresGrid = [ 1,1,1 ]

    return (
        <div className={`relative flex flex-col py-10 justify-center items-center px-32 mt-8 rounded-lg bg-secondary bg-[url('/grid/grid_svg2.svg')] bg-center bg-cover`}>
        <h1 className="text-5xl font-semibold">مشتری ها درباره ما چی میگن</h1>
        <p className="text-gray-500 text-sm my-6">تلفیقی از روند و پیچیدگی را در مجموعه سرپرستی ما کشف کنید. از لوازم ضروری شیک گرفته تا تکه‌های معمولی، مد ما فردیت را در بر می‌گیرد و تضمین می‌کند که هر کمد لباسی منعکس‌کننده سبک، تطبیق پذیری و ظرافت جاودانه است.</p>
        <div className="grid grid-cols-3 gap-12">
               {
                 customeresGrid.map((e,index)=> 
                   <div key={index} className={`rounded-xl bg-gray-100 flex flex-col  py-5 px-8 ${simpleButtonTransitionClass} hover:scale-110 hover:shadow-xl`}>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-3">
                        <Image 
                          className="rounded-full w-16 h-16"
                          src={manLandingImage}
                          alt="image" />
                        <div className="flex flex-col ">
                          <h1 className="text-xl font-medium">مصطفی زمانی</h1>
                          <h1 className="text-sm text-gray-500 font-medium">خریدار</h1>
                        </div>
                      </div>
                      <MdOutlineInsertComment size={35} className="text-primary"/>
                    </div>
                    <hr className=" my-3"/>
                    <p className="text-gray-500 text-sm">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                   </div> 
                 )
               }
        </div>
     </div>

    )
}