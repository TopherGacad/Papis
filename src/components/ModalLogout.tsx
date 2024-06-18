import { IoClose } from "react-icons/io5";
import { useAppContext } from "../Context/AppContextProvider";
import { TbLogout2 } from "react-icons/tb";

export default function ModalLogout() {
  // @ts-ignore
  const { showLogoutModal, setShowLogoutModal } = useAppContext();
  return (
    <>
      <div className="h-[100px] w-[200px] bg-[#FEFEFE] border-solid border-[1px] rounded-[10px] z-[999] absolute left-96 top-24 ">
        <div className="h-full w-full flex flex-col justify-start items-center">
          <div className="closeForm w-full flex flex-row justify-end pr-3.5 pt-3 pb-2">
            <button
              onClick={() => setShowLogoutModal((prev: boolean) => !prev)}
            >
              <IoClose className="h-[30px] w-[30px]" />
            </button>
          </div>
          <div className="flex flex-row items-center justify-center">
            <span className="">
              <TbLogout2 className="h-[16px] w-[16px]" />
            </span>
            <span className=" text-[20px] font-medium pl-2">Logout</span>
          </div>
        </div>
      </div>
    </>
  );
}
