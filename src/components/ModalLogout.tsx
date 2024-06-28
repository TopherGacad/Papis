import { IoClose } from "react-icons/io5";
import { useAppContext } from "../Context/AppContextProvider";
import { TbLogout2 } from "react-icons/tb";

export default function ModalLogout() {
  // @ts-ignore
  const { showLogoutModal, setShowLogoutModal } = useAppContext();
  
  return (
    <>
      <div className="h-[50px] w-[130px] bg-[#FEFEFE] border-solid border-[1px] rounded-[10px] z-[99] absolute right-[14%] top-[8%] rounded-tr-none pt-3 pb-0">
        <div className="h-full w-full flex flex-col justify-start items-center">
          <div className="flex flex-row items-center justify-center">
            <span className="">
              <TbLogout2 className="h-[16px] w-[16px]" />
            </span>
            <span className=" text-[16px] font-medium pl-2">Logout</span>
          </div>
        </div>
      </div>
    </>
  );
}
