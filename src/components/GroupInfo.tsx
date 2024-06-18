import { useAppContext } from "../Context/AppContextProvider";
import ModalGroupEdit from "./ModalGroupEdit";
import { AiFillEdit } from "react-icons/ai";

export default function Groupinfo() {
  // @ts-ignore
  const { showGCEdit, setShowGCEdit } = useAppContext();

  return (
    <>
      {/* RIGHT PANEL MAIN CONTAINER */}
      <div className="right-container h-full rounded-[20px] bg-white flex flex-col">
        {showGCEdit && <ModalGroupEdit />}
        {/* PROFILE SECTION */}
        <div className="py-3 head-right max-h-[250px] flex flex-col items-center justify-center border-solid border-b-[1px] border-black-500">
          <span className="w-[90px] h-[90px] rounded-[50%] border-solid border-[1px] border-black-600 mx-2"></span>
          <div className="text-[18px] py-[10px] flex flex-row gap-2 items-center justify-center">
            <span className="text-center">
              <b className="whitespace-nowrap">Target ng China</b>
            </span>
            <span onClick={() => setShowGCEdit((prev: any) => !prev)}>
              <AiFillEdit />
            </span>
          </div>
          {/* <button className="bg-[#37439E] hover:bg-[#29D1B8] text-white w-[80px] h-[40px] rounded-[10px] mx-1" onClick={}>Edit</button> */}
        </div>

        {/* INFO SECTION */}
        <div className="h-[25px] pt-[10px] px-[20px]">
          <span className="text-[15px]">
            <b>
              Group Members<span> (20)</span>
            </b>
          </span>
        </div>

        {/* MEMBER LIST */}
        <div className="mt-[20px] flex flex-grow flex-col mb-[15px] overflow-y-auto px-[10px]">
          <div className="my-[2px] msg-container h-[60px] flex items-center justify-center">
            <div className="msg-left w-[60px] flex justify-center mx-2">
              <span className=" w-[45px] h-[45px] rounded-[50%] border-solid border-[1px] border-black-600"></span>
            </div>
            <div className="msg-right flex-grow max-w-[80%] flex justify-between items-center pr-[8px]">
              <span className="text-[14px]">
                <b>Jericho Not Rosales</b>
              </span>
              <span className="text-[12px]">Admin</span>
            </div>
          </div>

          <div className="my-[2px] msg-container h-[60px] flex items-center justify-center">
            <div className="msg-left w-[60px] flex justify-center mx-2">
              <span className=" w-[45px] h-[45px] rounded-[50%] border-solid border-[1px] border-black-600"></span>
            </div>
            <div className="msg-right flex-grow max-w-[80%] flex flex-col justify-center">
              <span className="text-[14px]">
                <b>Marc Remolin</b>
              </span>
            </div>
          </div>

          <div className="my-[2px] msg-container h-[60px] flex items-center justify-center">
            <div className="msg-left w-[60px] flex justify-center mx-2">
              <span className=" w-[45px] h-[45px] rounded-[50%] border-solid border-[1px] border-black-600"></span>
            </div>
            <div className="msg-right flex-grow max-w-[80%] flex flex-col justify-center">
              <span className="text-[14px]">
                <b>Marc Remolin</b>
              </span>
            </div>
          </div>

          <div className="my-[2px] msg-container h-[60px] flex items-center justify-center">
            <div className="msg-left w-[60px] flex justify-center mx-2">
              <span className=" w-[45px] h-[45px] rounded-[50%] border-solid border-[1px] border-black-600"></span>
            </div>
            <div className="msg-right flex-grow max-w-[80%] flex flex-col justify-center">
              <span className="text-[14px]">
                <b>Marc Remolin</b>
              </span>
            </div>
          </div>

          <div className="my-[2px] msg-container h-[60px] flex items-center justify-center">
            <div className="msg-left w-[60px] flex justify-center mx-2">
              <span className=" w-[45px] h-[45px] rounded-[50%] border-solid border-[1px] border-black-600"></span>
            </div>
            <div className="msg-right flex-grow max-w-[80%] flex flex-col justify-center">
              <span className="text-[14px]">
                <b>Marc Remolin</b>
              </span>
            </div>
          </div>

          <div className="my-[2px] msg-container h-[60px] flex items-center justify-center">
            <div className="msg-left w-[60px] flex justify-center mx-2">
              <span className=" w-[45px] h-[45px] rounded-[50%] border-solid border-[1px] border-black-600"></span>
            </div>
            <div className="msg-right flex-grow max-w-[80%] flex flex-col justify-center">
              <span className="text-[14px]">
                <b>Marc Remolin</b>
              </span>
            </div>
          </div>

          <div className="my-[2px] msg-container h-[60px] flex items-center justify-center">
            <div className="msg-left w-[60px] flex justify-center mx-2">
              <span className=" w-[45px] h-[45px] rounded-[50%] border-solid border-[1px] border-black-600"></span>
            </div>
            <div className="msg-right flex-grow max-w-[80%] flex flex-col justify-center">
              <span className="text-[14px]">
                <b>Marc Remolin</b>
              </span>
            </div>
          </div>

          <div className="my-[2px] msg-container h-[60px] flex items-center justify-center">
            <div className="msg-left w-[60px] flex justify-center mx-2">
              <span className=" w-[45px] h-[45px] rounded-[50%] border-solid border-[1px] border-black-600"></span>
            </div>
            <div className="msg-right flex-grow max-w-[80%] flex flex-col justify-center">
              <span className="text-[14px]">
                <b>Marc Remolin</b>
              </span>
            </div>
          </div>

          <div className="my-[2px] msg-container h-[60px] flex items-center justify-center">
            <div className="msg-left w-[60px] flex justify-center mx-2">
              <span className=" w-[45px] h-[45px] rounded-[50%] border-solid border-[1px] border-black-600"></span>
            </div>
            <div className="msg-right flex-grow max-w-[80%] flex flex-col justify-center">
              <span className="text-[14px]">
                <b>Marc Remolin</b>
              </span>
            </div>
          </div>

          <div className="my-[2px] msg-container h-[60px] flex items-center justify-center">
            <div className="msg-left w-[60px] flex justify-center mx-2">
              <span className=" w-[45px] h-[45px] rounded-[50%] border-solid border-[1px] border-black-600"></span>
            </div>
            <div className="msg-right flex-grow max-w-[80%] flex flex-col justify-center">
              <span className="text-[14px]">
                <b>Marc Remolin</b>
              </span>
            </div>
          </div>

          <div className="my-[2px] msg-container h-[60px] flex items-center justify-center">
            <div className="msg-left w-[60px] flex justify-center mx-2">
              <span className=" w-[45px] h-[45px] rounded-[50%] border-solid border-[1px] border-black-600"></span>
            </div>
            <div className="msg-right flex-grow max-w-[80%] flex flex-col justify-center">
              <span className="text-[14px]">
                <b>Marc Remolin</b>
              </span>
            </div>
          </div>

          <div className="my-[2px] msg-container h-[60px] flex items-center justify-center">
            <div className="msg-left w-[60px] flex justify-center mx-2">
              <span className=" w-[45px] h-[45px] rounded-[50%] border-solid border-[1px] border-black-600"></span>
            </div>
            <div className="msg-right flex-grow max-w-[80%] flex flex-col justify-center">
              <span className="text-[14px]">
                <b>Marc Remolin</b>
              </span>
            </div>
          </div>

          <div className="my-[2px] msg-container h-[60px] flex items-center justify-center">
            <div className="msg-left w-[60px] flex justify-center mx-2">
              <span className=" w-[45px] h-[45px] rounded-[50%] border-solid border-[1px] border-black-600"></span>
            </div>
            <div className="msg-right flex-grow max-w-[80%] flex flex-col justify-center">
              <span className="text-[14px]">
                <b>Marc Remolin</b>
              </span>
            </div>
          </div>

          <div className="my-[2px] msg-container h-[60px] flex items-center justify-center">
            <div className="msg-left w-[60px] flex justify-center mx-2">
              <span className=" w-[45px] h-[45px] rounded-[50%] border-solid border-[1px] border-black-600"></span>
            </div>
            <div className="msg-right flex-grow max-w-[80%] flex flex-col justify-center">
              <span className="text-[14px]">
                <b>Marc Remolin</b>
              </span>
            </div>
          </div>

          <div className="my-[2px] msg-container h-[60px] flex items-center justify-center">
            <div className="msg-left w-[60px] flex justify-center mx-2">
              <span className=" w-[45px] h-[45px] rounded-[50%] border-solid border-[1px] border-black-600"></span>
            </div>
            <div className="msg-right flex-grow max-w-[80%] flex flex-col justify-center">
              <span className="text-[14px]">
                <b>Marc Remolin</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
