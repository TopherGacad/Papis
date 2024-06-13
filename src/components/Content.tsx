import { PiDotsThreeOutlineVerticalThin } from "react-icons/pi";
import { GrAttachment } from "react-icons/gr";
import { IoSend } from "react-icons/io5";
import Groupchat from "./Group";
import Individualchat from "./Individual";
import { useContext } from "react";
import { useAppContext } from "../Context/AppContextProvider";

export default function Content() {
  // @ts-ignore
  const { setShowModal } = useAppContext();

  return (
    <>
      <div className="bg-white h-full rounded-[20px] flex-grow flex flex-col justify-between items-end">
        {/* Top Bar */}
        <div className="bg-white h-[80px] px-[20px] w-full rounded-t-[20px] flex justify-between items-center drop-shadow-[0_5px_5px_rgba(0,0,0,0.05)]">
          <div className="head-left flex items-center">
            <span className="w-[50px] h-[50px] rounded-[50%] border-solid border-[1px] border-black-600 mx-2"></span>
            <span className="text-base font-bold">Random GC</span>
          </div>

          <div className="right">
            <span className="h-[50px] w-auto">
              <PiDotsThreeOutlineVerticalThin
                className="h-[30px] w-[30px] cursor-pointer"
                onClick={() => setShowModal((prev: any) => !prev)}
              />
            </span>
          </div>
        </div>

        {/* Messages */}

        <Groupchat />
        {/* <Individualchat /> */}

        {/* Bottom Bar */}
        <div className="bg-white h-[80px] px-[20px] w-full rounded-b-[20px] flex items-center drop-shadow-[0_-5px_5px_rgba(0,0,0,0.05)]">
          <div className="head-left w-full flex flex-row items-center align-center justify-between">
            <span className="left p-1">
              <GrAttachment className="h-[30px] w-[30px]" />
            </span>

            <span className="w-full p-1">
              <input
                className="justify-self-center pl-[20px] w-full h-[50px] rounded-[25px] bg-[#EFEFEF]"
                type="text"
                placeholder="Type a message..."
              />
            </span>
            <span className="right p-1">
              <IoSend className="h-[30px] w-[30px]" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
