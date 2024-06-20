import { CgProfile } from "react-icons/cg";
import { TbSettings2 } from "react-icons/tb";
import { IoAddCircleSharp } from "react-icons/io5";
import { FaSortDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAppContext } from "../Context/AppContextProvider";
import ModalLogout from "./ModalLogout";

interface Props {
  filters: string[];
  onSelectItem: (item: string) => void;
}

export default function Sidebar() {
  const filters = ["New", "Groups"];
  const [selectedFilter, setSelectedFilter] = useState(0);

  // @ts-ignore
  const { setShowModal, setShowNewConvo, showLogoutModal, setShowLogoutModal } =
    useAppContext();

  return (
    <>
      {/* SIDE NAV */}
      <div className="h-full p-3 side-contain rounded-[20px] w-full bg-white flex flex-col overflow-hidden font-sans relative">
        {showLogoutModal && <ModalLogout />}
        {/* HEADER */}
        <div className="flex container justify-between items-center header h-[80px] px-[20px]">
          <div className="head-left flex items-center">
            <span className="w-[50px] h-[50px] rounded-[50%] border-solid border-[1px] border-black-600 mx-2"></span>
            <span className="text-base font-bold items-center">Chats</span>
          </div>
          <div className="head-right flex justify-around items-center">
            <span className="pr-[10px]">
              <TbSettings2
                className=" w-[25px] h-[25px] cursor-pointer"
                onClick={() => {
                  setShowLogoutModal((prev: any) => !prev);
                }}
              />
            </span>
            <IoAddCircleSharp
              className="w-[25px] h-[25px] cursor-pointer"
              onClick={() => {
                setShowNewConvo((prev: any) => !prev);
                setShowModal(false);
              }}
            />
          </div>
        </div>

        {/* SEARCH BAR */}
        <div className="relative h-20 w-full p-3 flex items-center">
          <span className="absolute z-[99] left-0 my-[15px] mx-[25px]">
            <IoIosSearch></IoIosSearch>
          </span>
          <input
            className="justify-self-center relative pl-[40px] w-full h-[50px] rounded-[15px] border-[#A1A1A1] border-solid border-[1px]"
            type="text"
            placeholder="Search People"
          />
        </div>

        {/* FILTER */}
        <div className=" h-[30px] w-full">
          <ul className="filter flex list-none pl-[20px]">
            {filters.map((filter, index) => (
              <li
                key={filter}
                onClick={() => {
                  setSelectedFilter(index);
                }}
                className={`${
                  index === selectedFilter && "bg-[#7484fa] text-white"
                } cursor-pointer px-[15px] mr-[5px] border-[1px] border-solid rounded-[15px] duration-[.5s]`}
              >
                {filter}
              </li>
            ))}
          </ul>
        </div>

        {/* {selectedFilter === 0 && <></>} */}

        {/* USER LIST */}
        {/**UNSEEN MESSAGED STYLE*/}
        <div className="flex-grow mt-[20px] flex items-center flex-col overflow-y-auto overflow-x-hidden">
          <div className="my-[5px] w-full msg-container h-[80px] flex items-center justify-center">
            <div className="msg-left w-[60px] flex justify-center mx-2 ">
              <span className=" w-[60px] h-[60px] rounded-[50%] border-solid border-[1px] border-black-600"></span>
            </div>
            <div className=" msg-right flex-grow max-w-[80%] flex flex-col justify-center">
              <span className="text-[16px]">
                <b>Marc Remolin</b>
              </span>
              <span className="text-[14px] truncate">
                <b>Wala na akong per na easdasdadadasdasdadasdasdasdasdasdh.</b>
              </span>
            </div>
          </div>

          {/**SEEN MESSAGED STYLE*/}
          <div className="my-[5px] w-full msg-container h-[80px] flex items-center justify-center">
            <div className="msg-left w-[60px] flex justify-center mx-2">
              <span className=" w-[60px] h-[60px] rounded-[50%] border-solid border-[1px] border-black-600"></span>
            </div>
            <div className="msg-right flex-grow max-w-[80%] w-full flex flex-col justify-center">
              <span className="text-[16px]">
                <b>Carl Joshua Krazy</b>
              </span>
              <span className="text-[14px] truncate">
                Wala na akong per na easdasdadadasdasdadasdasdasdasdasdh.
              </span>
            </div>
          </div>

          {/**GROUP MESSAGED TEMPLATE*/}
          <div className="my-[5px] msg-container w-full h-[80px] flex items-center justify-center">
            <div className="msg-left  w-[60px] flex justify-center mx-2">
              <span className=" w-[60px] h-[60px] rounded-[50%] border-solid border-[1px] border-black-600"></span>
            </div>
            <div className="msg-right flex-grow max-w-[80%] flex flex-col justify-center">
              <span className="text-[16px]">
                <b>Fuck Group Kings</b>
              </span>
              <span className="text-[14px] truncate">
                <b>
                  Jericho Rosales Not:{" "}
                  <span className="msg-prev text-[14px]">
                    tanginakaasdasdasdadadadadadadadasdasdasd
                  </span>
                </b>
              </span>
            </div>
          </div>

          <div className="my-[5px] msg-container w-full h-[80px] flex items-center justify-center">
            <div className="msg-left  w-[60px] flex justify-center mx-2">
              <span className=" w-[60px] h-[60px] rounded-[50%] border-solid border-[1px] border-black-600"></span>
            </div>
            <div className="msg-right flex-grow max-w-[80%] flex flex-col justify-center">
              <span className="text-[16px]">
                <b>Fuck Group Kings</b>
              </span>
              <span className="text-[14px] truncate">
                <b>
                  Jericho Rosales Not:{" "}
                  <span className="msg-prev text-[14px]">
                    tanginakaasdasdasdadadadadadadadasdasdasd
                  </span>
                </b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
