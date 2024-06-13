import { IoClose } from "react-icons/io5";

export default function ModalLogin() {
  return (
    <>
      <div
        className="bg fixed top-0 left-0 z-[98] w-screen h-screen bg-[rgba(0,0,0,0.65)] backdrop-blur-sm"
        id="bg"
      ></div>
      <div className="h-[400px] w-[450px] bg-[#FEFEFE] border-solid border-[1px] rounded-[20px] z-[999] fixed flex flex-col inset-0 m-auto justify-center items-center">
        <div className="h-full w-full flex flex-col justify-start items-center">
          <div className="closeForm w-full flex flex-row justify-end pr-3.5 pt-3 pb-3">
            <button>
              <IoClose />
            </button>
          </div>
          <div className="flex flex-col">
            <span className="text-[#37439E] font-bold text-[36px]">LOG IN</span>
            <span className="text-[#29D1B8] text-[16px]">Welcome Back!</span>
          </div>
          <form className="w-[300px]" action="">
            <div className="field-container">
              <input
                className="justify-self-center w-full h-[50px] rounded-[15px] border-[#A1A1A1] border-solid border-[1px]"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="field-container">
              <input
                className="justify-self-center w-full h-[50px] rounded-[15px] border-[#A1A1A1] border-solid border-[1px]"
                type="text"
                placeholder="Password"
              />
            </div>
            <input
              className="mt-3 border-solid border-[1px] bg-[#37439E] w-full rounded-[10px] text-[#ffffff] h-[50px]"
              type="button"
              value="Login"
            />
          </form>
        </div>
      </div>
    </>
  );
}
