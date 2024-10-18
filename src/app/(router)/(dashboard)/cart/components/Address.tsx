import { Button, Input } from "@nextui-org/react";
import { Dispatch, SetStateAction } from "react";
import { BiArrowBack, BiArrowToRight } from "react-icons/bi";

export default function Address({ setStep }:{ setStep:Dispatch<SetStateAction<1 | 2 | 3>> }){
    return (
        <div className="rounded-lg border-2 px-4 py-4 border-black mt-5 flex flex-col gap-2">
            <h1 className="text-xl font-semibold">آدرس شما</h1> 
            <div className="grid grid-cols-2 gap-2">
                <InputCustom lable="استان" type="text"/>
                <InputCustom lable="شهرستان" type="text"/>
            </div> 
            <InputCustom lable="نشانی" type="text"/>
            <div className="grid grid-cols-2 gap-2">
                <InputCustom lable="کدپستی" type="text"/>
                <InputCustom lable="پلاک" type="text"/>
            </div> 
            <div className="grid grid-cols-2 gap-2">
                <InputCustom lable="نام و نام خانوادگی" type="text"/>
                <InputCustom lable="شماره موبایل" type="text"/>
            </div> 
            <div className="grid grid-cols-5 gap-5 mt-6">
                <Button onClick={()=> setStep(1)}> 
                    <BiArrowToRight /> 
                </Button>
                <Button 
                    onClick={()=> setStep(3)}
                    className="col-span-4">
                        مرحله بعد
                    </Button>
            </div>
        </div>
    )
}


type TInputCustomprops={
    lable: string,
    type: string
}
function InputCustom(props: TInputCustomprops){
    return (
        <Input 
            isClearable
            height={5}
            type={props.type} 
            variant='bordered' 
            labelPlacement="outside"
            className=""
            label={<p className="text-black font-semibold">{props.lable}</p>}
        />
    )
}