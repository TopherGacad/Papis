import { CgProfile } from "react-icons/cg";
import { TbSettings2 } from "react-icons/tb";
import { IoAddCircleSharp } from "react-icons/io5";
import { FaSortDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="h-full mx-[12px] p-2 side-contain rounded-[20px] w-[500px] bg-white">
        <div className="flex justify-between items-center header h-[80px] px-[20px]">
          <div className="head-left flex items-center">
            <span className="w-[50px] h-[50px] rounded-[50%] border-solid border-[1px] border-black-600 mx-2"></span>
            <span className="text-base font-bold items-center">Chats</span>
            <FaSortDown className="w-[25px] h-[25px] pl-[5px] mb-[10px]"></FaSortDown>
          </div>
          <div className="head-right flex justify-around items-center border-[1px] border-solid">
            <span className="pr-[10px]">
              <TbSettings2 className=" w-[25px] h-[25px]"></TbSettings2>
            </span>
            <IoAddCircleSharp className="w-[25px] h-[25px]"></IoAddCircleSharp>
          </div>
        </div>
        <div className="h-20 p-3 flex items-center">
          <span className="relative z-[99] left-0 my-[15px] mx-[15px]">
            <IoIosSearch></IoIosSearch>
          </span>
          <input
            className="justify-self-center absolute pl-[40px] w-[450px] h-[50px] rounded-[15px] border-[#16161A] border-solid border-[1px]"
            type="text"
            placeholder="Search People"
          />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
