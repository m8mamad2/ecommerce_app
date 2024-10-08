import Image from "next/image";
import { CiLocationArrow1 } from "react-icons/ci";

export default function Home() {
  return (
    <>
      
      <div className="grid grid-cols-2 pt-32 m-3 rounded-lg bg-red-200"> 
        
        <div className="flex flex-row">
            <div>
              <h1>{"امروز بهشت ​​مد خود را بیابید"}</h1>
              <h1>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز</h1>
              <div className="flex flex-row gap-3">
                <button className="px-3 py-4 bg-black text-white">همین الان خرید کن</button>
                <div className="p-4 bg-orange-400 rounded-full">
                  <CiLocationArrow1 />
                </div> 
              </div>
              <div className="flex flex-row gap-5">
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-2xl font-bold">20+</h1>
                  <p>سال سابقه کار</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-2xl font-bold">20+</h1>
                  <p>سال سابقه کار</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-2xl font-bold">20+</h1>
                  <p>سال سابقه کار</p>
                </div>
              </div>
            </div>
            <div></div>
        </div>

        <div className="relative flex flex-col">
          <div className="flex flex-row">
            <div className="bg-red-200 h-40">LLL</div>
            <div className="bg-red-200 h-40">LLL</div>
          </div>
          <div className="flex flex-row">
            <div className="bg-purple-500 rounded-lg">LILLILIIIIII</div>
            <div className="p-3 rounded-full">OK</div>
            <div className="bg-green-500 rounded-lg">LILLILIIIIII</div>
          </div>
        </div>

      </div>

      <div className="w-full bg-gray-900 rounded-full ">
      
      </div>
      
    </>
  );
}

