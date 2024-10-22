
import toast from "react-hot-toast";
import { FaCheckDouble } from "react-icons/fa6";
import { MdErrorOutline } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";

export type ToastProps = {
    status: 'success' | 'fail',
    message: string,
}
export default function showCustomToast(props: ToastProps){
    toast.custom((t) => (
        <div
          className={`${t.visible ? 'animate-enter' : 'animate-leave'} ${props.status ===  'success' ? 'border-primary ring-primary' : 'border-red-600 ring-red-700'} 
            max-w-md w-full bg-background border shadow-lg text-white rounded-lg pointer-events-auto flex ring-1  ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-white">
                  {props.status === 'success' ? "عملیات موفقیت آمیز بود" : "متاسفیم عملیات شکستید"}
                </p>
                <p className="mt-1 text-sm text-gray-400">
                  { props.message }
                </p>
              </div>
            </div>
          </div>
          <div className="flex  rounded-l-lg">
            <button
              onClick={() => toast.dismiss(t.id)}>
                <IoCloseCircleOutline className="ml-4" color={props.status ===  'success' ? '#53e8c4' : '#ff0000'} size={23}/>
            </button>
          </div>
        </div>
      ))
}
