import Image from "next/image";
import manLandingImage from '@/app/assets/imageLanding.png'

export default function CustomersSayingSection(){

    const customeresGrid = [1,1,1,1,1,1]

    return (
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

    )
}