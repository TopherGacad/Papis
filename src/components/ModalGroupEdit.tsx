import { IoClose } from "react-icons/io5";
import { useAppContext } from "../Context/AppContextProvider";

export default function ModalGroupEdit() {
  // @ts-ignore
  const { setShowGCEdit } = useAppContext();
  return (
    <>
      <div
        className="bg fixed top-0 left-0 z-[98] w-screen h-screen bg-[rgba(0,0,0,0.65)] backdrop-blur-sm"
        id="bg"
      ></div>
      <div className=" h-[375px] w-[550px] bg-[#FEFEFE] border-solid border-[1px] rounded-[20px] z-[999] fixed flex flex-col inset-0 m-auto justify-center items-center">
        <div className="h-full w-full flex flex-col justify-start items-center">
          <div className="closeForm w-full flex flex-row justify-end pr-3.5 pt-3">
            <button onClick={() => setShowGCEdit((prev: boolean) => !prev)}>
              <IoClose className="h-[30px] w-[30px]" />
            </button>
          </div>
          <form className="w-full px-5" action="">
            <div className="field-container flex flex-col">
              <label className="text-[#16161A] font-bold text-[16px] mb-2">
                Change Group Photo
              </label>
              <div className="justify-self-center w-full h-[50px] rounded-[15px] border-[#A1A1A1] border-solid border-[1px]">
                <label className="bg-[#29D1B8] h-full w-[150px] font-semibold text-[#FFFFFE] text-center align-middle rounded-tl-[14px] rounded-bl-[14px] pt-[13px] cursor-pointer" htmlFor="upload">
                  Choose photo
                </label>
                <input id="upload" type="file" accept="image/*"/>
              </div>
            </div>
            <div className="field-container flex flex-col">
              <label className="text-[#16161A] font-bold text-[16px] mb-2">
                Change Group Name
              </label>
              <input
                className="justify-self-center w-full h-[50px] rounded-[15px] border-[#A1A1A1] border-solid border-[1px]"
                type="text"
                placeholder="Type something here..."
              />
            </div>
            <input
              className="mt-4 border-solid border-[1px] bg-[#37439E] w-full rounded-[15px] text-[#fffffe] font-semibold h-[50px]"
              type="button"
              value="Apply Changes"
            />
          </form>
        </div>
      </div>
    </>
  );
}
