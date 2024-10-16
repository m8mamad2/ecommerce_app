import ProductCard from "@/app/components/ProductCard"

export default function FavoritePage(){
    const dataNew = ['./product/1.png','./product/2.png','./product/3.png','./product/4.png','./product/1.png']
    return (
        <div className={`my-4 mx-9 flex flex-col px-6 pt-40 rounded-lg bg-[#EBEEED] bg-[url('/grid.png')]`}>
            <h1 className="text-black mb-10 font-bold text-3xl">محصولات مورد علاقه شما</h1>   
            <div className="grid grid-cols-3 gap-5 mb-10">
                {dataNew.map((item,index) => <ProductCard index={index} item={item}/>)}
            </div>
        </div>
    )
}