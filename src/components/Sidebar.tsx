import { CgProfile } from "react-icons/cg";
import { TbSettings2 } from "react-icons/tb";
import { IoAddCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="h-full mx-[12px] p-2 side-contain rounded-[20px] w-[500px] bg-white">
        <div className="flex justify-between items-center header border-solid border-red-600 border-[1px] h-[80px] px-[20px]">
          <div className="head-left flex items-center">
            <span className="w-[50px] h-[50px] rounded-[50%] border-solid border-[1px] border-black-600 mx-2"></span>
            <span className="text-base font-bold">Chats</span>
          </div>  
          <div className="head-right flex justify-around items-center border-[1px] border-solid">
            <TbSettings2 className="w-[30px] h-[30px] "></TbSettings2>
            <IoAddCircleSharp className="w-[30px] h-[30px] "></IoAddCircleSharp>
          </div>
        </div>
        <div className="search w-contain h-20 p-3  ">
          <input type="text" placeholder="Search here asd" />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
