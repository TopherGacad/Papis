import { FaSortDown } from "react-icons/fa";

function Rightbar() {
  return (
    <>
      <div className="right-container h-full rounded-[20px] bg-white mx-[10px]">
        <div className="head-left w-full flex flex-col items-center justify-center pt-20">
          <span className="w-[90px] h-[90px] rounded-[50%] border-solid border-[1px] border-black-600 mx-2"></span>
          <span className="text-[16px]">
            <p className="text-center pt-3">
              <b>Random GC</b>
            </p>
          </span>
        </div>
        <div className="flex flex-col">
          <div className="member-header flex flex-row">
            <span>
              <p>Chat Members</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rightbar;
