import InputCustom from "@/app/components/InputCustom";
import showCustomToast from "@/app/components/Toast";
import { ApiService } from "@/app/service/api/ApiService";
import { ApiRes, StepsProps } from "@/app/types";
import { Button, Input } from "@nextui-org/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BiArrowBack, BiArrowToRight } from "react-icons/bi";

type UserType = {
  privance?: string;
  city?: string;
  address_name?: string;
  postal_code?: string;
  plate?: string;
  full_name?: string;
  phoneNumber?: string;
};

export default function Address(props: StepsProps) {

  const [formData, setFormData] = useState<UserType>({
    privance: "",
    city: "",
    address_name: "",
    postal_code: "",
    plate: "",
    full_name: "",
    phoneNumber: "",
  });

  const handleInputChange = (field: keyof UserType) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };


  //? API
  const getCurrentUser = async () => {
    const getCurrentUser = await ApiService.get("auth/curretn_user");
    if (getCurrentUser.result) {
      setFormData(getCurrentUser.data);
    }
  };

  const updateData = async () => {
    // const data =  Object.values(formData).map((e)=> {
    //     if(e.length === 0 || !e){
    //         showCustomToast({ 
    //             message:  'لطفا تمام مقادیر را وارد کنید' , 
    //             status:'fail' 
    //         })
    //         return false;
    //     } 
    // })
    const data = Object.values(formData).every((value) => value.length === 0 || !value);
    if(data)
        console.log('------------- TRUE')
    else 
        console.log('------------- False')
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <div className="rounded-lg border-2 px-4 py-4 border-black mt-5 flex flex-col gap-2">
      <h1 className="text-xl font-semibold">آدرس شما</h1>

      <div className="grid grid-cols-2 gap-2">
        <InputCustom
          label="استان"
          type="text"
          value={formData.privance}
          onChange={handleInputChange("privance")}
        />
        <InputCustom
          label="شهرستان"
          type="text"
          value={formData.city}
          onChange={handleInputChange("city")}
        />
      </div>

      <InputCustom
        label="نشانی"
        type="text"
        value={formData.address_name}
        onChange={handleInputChange("address_name")}
      />

      <div className="grid grid-cols-2 gap-2 my-3">
        <InputCustom
          label="کدپستی"
          type="text"
          value={formData.postal_code}
          onChange={handleInputChange("postal_code")}
        />
        <InputCustom
          label="پلاک"
          type="text"
          value={formData.plate}
          onChange={handleInputChange("plate")}
        />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <InputCustom
          label="نام و نام خانوادگی"
          type="text"
          value={formData.full_name}
          onChange={handleInputChange("full_name")}
        />
        <InputCustom
          label="شماره موبایل"
          type="text"
          value={formData.phoneNumber}
          onChange={handleInputChange("phoneNumber")}
        />
      </div>

      <div className="grid grid-cols-5 gap-5 mt-6">
        <Button onClick={() => props.setStep(1)}>
          <BiArrowToRight />
        </Button>
        <Button onClick={updateData} className="col-span-4">
          مرحله بعد
        </Button>
      </div>
    </div>
  );

}
