import { GrAttachment } from "react-icons/gr";
import { IoSend } from "react-icons/io5";
import { useAppContext } from "../Context/AppContextProvider";

export default function NewMessage() {
  // @ts-ignore
  const { setShowNewConvo } = useAppContext();
  return (
    <>
      <div className="bg-white h-full rounded-[20px] flex-grow flex flex-col justify-between items-end">
        {/* Top Bar */}
        <div className="bg-white h-[80px] px-[20px] w-full rounded-t-[20px] flex justify-between items-center drop-shadow-[0_5px_5px_rgba(0,0,0,0.05)]">
          <div className="relative h-20 w-full p-2 flex items-center">
            <span className="absolute z-[99] left-0 mx-[20px] top-[27px]">
              <p>To:</p>
            </span>
            <input
              className="justify-self-center relative pl-[40px] w-11/12 h-[50px] rounded-[15px] border-[#A1A1A1] border-solid border-[1px] mx-1"
              type="text"
              placeholder="Search People"
            />
            <button className="bg-[#37439E] text-white w-1/12 h-[50px] rounded-[10px] mx-1" onClick={() => setShowNewConvo((prev: any) => !prev)}>
              Cancel
            </button>
          </div>
        </div>

        {/* Messages */}

        {/* <Groupchat /> */}
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
