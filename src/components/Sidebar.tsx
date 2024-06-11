import { CgProfile } from "react-icons/cg";
import { TbSettings2 } from "react-icons/tb";
import { IoAddCircleSharp } from "react-icons/io5";
import { FaSortDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Props {
  filters: string[];
  onSelectItem: (item: string) => void;
}

export default function Sidebar() {
  const filters = ["New", "Groups"];
  const [selectedFilter, setSelectedFilter] = useState(0);

  return (
    <>
      {/* SIDE NAV */}
      <div className="h-full mx-[12px] p-2 side-contain rounded-[20px] w-[500px] bg-white flex flex-col overflow-hidden font-sans">
        {/* HEADER */}
        <div className="flex justify-between items-center header h-[80px] px-[20px]">
          <div className="head-left flex items-center">
            <span className="w-[50px] h-[50px] rounded-[50%] border-solid border-[1px] border-black-600 mx-2"></span>
            <span className="text-base font-bold items-center">Chats</span>
            <FaSortDown className="w-[25px] h-[25px] pl-[5px] mb-[10px]"></FaSortDown>
          </div>
          <div className="head-right flex justify-around items-center">
            <span className="pr-[10px]">
              <TbSettings2 className=" w-[25px] h-[25px]"></TbSettings2>
            </span>
            <IoAddCircleSharp className="w-[25px] h-[25px]"></IoAddCircleSharp>
          </div>
        </div>

        {/* SEARCH BAR */}
        <div className="h-20 p-3 flex items-center">
          <span className="relative z-[99] left-0 my-[15px] mx-[15px]">
            <IoIosSearch></IoIosSearch>
          </span>
          <input
            className="justify-self-center absolute pl-[40px] w-[450px] h-[50px] rounded-[15px] border-[#A1A1A1] border-solid border-[1px]"
            type="text"
            placeholder="Search People"
          />
        </div>

        {/* FILTER */}
        <div className=" h-[20px]">
          <ul className="filter flex list-none w-full pl-[20px]">
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
        <div className="flex-grow mt-[20px] flex items-center overflow-x-auto flex-col">
          <div className="my-[5px] msg-container w-[450px] h-[80px] flex items-center justify-center">
            <div className="msg-left w-[60px] flex justify-center mx-2">
              <span className=" w-[60px] h-[60px] rounded-[50%] border-solid border-[1px] border-black-600"></span>
            </div>
            <div className="msg-right flex-grow max-w-[80%] flex flex-col justify-center">
              <span className="text-[16px]">
                <b>Marc Remolin</b>
              </span>
              <span className="text-[14px] truncate">
                <b>Wala na akong per na easdasdadadasdasdadasdasdasdasdasdh.</b>
              </span>
            </div>
          </div>

          {/**SEEN MESSAGED STYLE*/}
          <div className="my-[5px] msg-container w-[450px] h-[80px] flex items-center justify-center">
            <div className="msg-left w-[60px] flex justify-center mx-2">
              <span className=" w-[60px] h-[60px] rounded-[50%] border-solid border-[1px] border-black-600"></span>
            </div>
            <div className="msg-right flex-grow max-w-[80%] flex flex-col justify-center">
              <span className="text-[16px]">
                <b>Carl Joshua Krazy</b>
              </span>
              <span className="text-[14px] truncate">
                Wala na akong per na easdasdadadasdasdadasdasdasdasdasdh.
              </span>
            </div>
          </div>

          {/**GROUP MESSAGED TEMPLATE*/}
          <div className="my-[5px] msg-container w-[450px] h-[80px] flex items-center justify-center">
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

          <div className="my-[5px] msg-container w-[450px] h-[80px] flex items-center justify-center">
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

          <div className="my-[5px] msg-container w-[450px] h-[80px] flex items-center justify-center">
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

          <div className="my-[5px] msg-container w-[450px] h-[80px] flex items-center justify-center">
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

          <div className="my-[5px] msg-container w-[450px] h-[80px] flex items-center justify-center">
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

          <div className="my-[5px] msg-container w-[450px] h-[80px] flex items-center justify-center">
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

          <div className="my-[5px] msg-container w-[450px] h-[80px] flex items-center justify-center">
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

          <div className="my-[5px] msg-container w-[450px] h-[80px] flex items-center justify-center">
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

          <div className="my-[5px] msg-container w-[450px] h-[80px] flex items-center justify-center">
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
