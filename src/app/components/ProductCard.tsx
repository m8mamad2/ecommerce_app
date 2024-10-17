import { Button } from "@nextui-org/react"
import { MdFavoriteBorder } from "react-icons/md"

type TProductCardProps = {
    index:number,
    item: string
}
export default function ProductCard(props: TProductCardProps){
    return (
        <div key={props.index} className="rounded-xl bg-white p-2">
            <div
                className={`border-none h-36 relative rounded-lg`}
                style={{ backgroundImage: `url(${props.item})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
                <button className="bg-white rounded-2xl absolute right-2 bottom-3 text-sm shadow-lg py-1 w-20 text-black ">پرفروش</button>
            </div>
            <div className="flex flex-row justify-between my-2 px-1">
                <h1 className="text-base">LILI</h1>
                <h1 className="text-base">50$</h1>
            </div>
            <div>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet </div>
            <div className="flex flex-row justify-between items-center px-1">
                <Button className="mt-4 mb-1"> اضافه کردن به سبد</Button>
                <MdFavoriteBorder className="text-primary border w-10  h-10 p-1 rounded-md" />
            </div>
        </div>
    )
}