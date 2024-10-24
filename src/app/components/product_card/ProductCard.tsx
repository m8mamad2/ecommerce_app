import { Button } from "@nextui-org/react"
import { MdFavoriteBorder } from "react-icons/md"
import { ProductType } from "../../types"
import AddToFavoriteButton from "./AddToFavoriteButton"
import AddToCartButton from "./AddToCartButton"


export default function ProductCard(props: ProductType){
    return (
        <div className="rounded-xl bg-white p-2">
            <div
                className={`border-none h-36 relative rounded-lg`}
                style={{ backgroundImage: `url(${props.images[0]})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
                <button className="bg-white rounded-2xl absolute right-2 bottom-3 text-sm shadow-lg py-1 w-20 text-black ">{props.lable}</button>
            </div>
            <div className="flex flex-row justify-between mt-6 mb-2 px-1">
                <h1 className="text-base font-semibold">{props.title}</h1>
                <h1 className="text-lg font-black">{props.price}$</h1>
            </div>
            <div className="text-base text-gray-600">{props.description.substring(0,49)} ...</div>
            <div className="flex flex-row justify-between items-center px-1 mt-3">
                <AddToCartButton { ...props }/>
                <AddToFavoriteButton { ...props }/>
            </div>
        </div>
    )
}