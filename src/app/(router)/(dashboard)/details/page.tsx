import { MdOutlineAddBox } from "react-icons/md";
import { CiSquareRemove } from "react-icons/ci";
import { Button, Chip } from "@nextui-org/react";
import image from '@/app/assets/landing/mostSell.png'
import image1 from '@/app/assets/landing/mostSell2.png'
import image2 from '@/app/assets/landing/mostSell3.png'
import Image from "next/image";

export default function DetailsPage() {

    const images = [image, image1, image2]

    return (
        <div className="grid grid-cols-2 my-4 mx-9 px-28 pt-40 pb-16 rounded-lg bg-[#EBEEED] bg-[url('/grid.png')]">
            <div className="flex flex-col items-start pl-10">
                <h1 className="text-5xl font-bold">شلوار مخملی مامان دوز</h1>
                <div className="flex flex-row justify-between items-center w-full my-9">
                    <div></div>
                    <Chip radius="lg" className="flex flex-row items-center w-full p-6">
                        <h1 className="font-semibold text-3xl text-white inline">20</h1>
                        <span className="text-sm mr-1">$</span>
                    </Chip>
                </div>
                <h1 className="text-gray-500">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</h1>
                <h1 className="text-gray-500">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</h1>
                <Button className="w-80 py-8 text-lg mt-36">اضافه به سبد خرید</Button>
            </div>

            <div className="grid grid-cols-3 bg-gray-900 p-3 rounded-lg">
                <div className="col-span-3 h-96 bg-gradient-to-t from-gray-100 to-gray-300 mb-2 rounded-xl flex justify-center items-center">
                    <Image src={image1} alt="image" className="bg-cover  h-full w-96" />
                </div>
                {
                    images.map((e, index) =>
                        <div key={index} className={`bg-gray-200 px-12 rounded-xl h-40 ${index === 1 ? "mx-2" : "mx-0"}`}>
                            <Image src={e} alt="image" className="bg-cover  h-full w-full" />
                        </div>
                    )
                }
            </div>
        </div>
    )
}