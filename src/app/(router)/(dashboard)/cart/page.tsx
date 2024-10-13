import CartCheckout from "./components/CartCheckout";
import CartTable from "./components/CartTable";

export default function CartPage(){

    
    return (
        <div className="my-4 mx-9">
            <div className="px-14 pt-36 pb-20 rounded-lg bg-[#EBEEED]">
                <h1 className="text-4xl font-semibold">سبد خرید فعلی شما</h1>
                <div className="relative flex flex-row gap-5 mt-8">
                    <CartTable />
                    <CartCheckout />    
                </div>
            </div>
        </div>
    )
}

