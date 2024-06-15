import { useState } from "react";
import ModalLogin from "./ModalLogin";
import { useAppContext } from "../Context/AppContextProvider";

export default function Login() {
  // @ts-ignore
  const { showLogin, setShowLogin } = useAppContext();

  return (
    <>
      <div className="h-screen w-screen bg-[#F1F3FB] py-[20px] px-[80px] flex flex-col font-sans z-[0]">
        {showLogin && <ModalLogin />}
        <div className="nav h-[100px] flex flex-row justify-between items-center">
          <div className="nav-left flex items-center">
            <span className="logo">
              <img
                className="w-[50px] h-[50px] justify-center mr-[10px]"
                src="./src/assets/papis-logo.png"
                alt="Papis Logo"
              />
            </span>

            <span className="text-[30px] mb-[5px]">
              <b>Papis</b>
            </span>
          </div>
          <div className="nav-right">
            <ul className="w-[370px] nav-menu flex justify-between items-center">
              <li className="btn-menu">Home</li>
              <li className="btn-menu">About Us</li>
              <li
                className="btn-login border-solid border-[1px] py-[10px] px-[25px] rounded-[15px] bg-[#29D1B8] text-[#FFFFFE]"
                onClick={() => setShowLogin((prev: boolean) => !prev)}
              >
                Login
              </li>
            </ul>
          </div>
        </div>

        <div className="hero border-solid flex-grow flex flex-row items-center">
          <div className="left-hero w-[40%] h-full  px-[100px] flex flex-col justify-center">
            <div className="form-header flex flex-col items-center justify-center">
              <span className="font-bold text-[43px] text-[#29D1B8]">
                GET STARTED{" "}
                <span className="text-[#37439E] font-bold">NOW!</span>
              </span>
              <span className="text-[16px] font-bold">
                Sign Up to create an account.
              </span>
            </div>

            <div className="form-container">
              <form action="">
                <div className="field-container flex gap-2 justify-between items-center">
                  <input
                    className="justify-self-center w-full h-[50px] rounded-[15px] border-[#A1A1A1] border-solid border-[1px]"
                    type="text"
                    placeholder="First Name"
                  />

                  <input
                    className="justify-self-center w-full h-[50px] rounded-[15px] border-[#A1A1A1] border-solid border-[1px]"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>

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
                <div className="field-container">
                  <input
                    className="justify-self-center w-full h-[50px] rounded-[15px] border-[#A1A1A1] border-solid border-[1px]"
                    type="text"
                    placeholder="Confirm Password"
                  />
                </div>
              </form>
            </div>

            <div className="btn-container">
              <div className="my-[10px]">
                <input
                  className="cursor-pointer mx-[8px]"
                  type="checkbox"
                  name="check-pass"
                  id="check-pass"
                />
                <label
                  className="cursor-pointer text-[#94A1B2]"
                  htmlFor="check-pass"
                >
                  Show Password
                </label>
              </div>
              <input
                className="mt-[10 px] border-solid border-[1px] bg-[#37439E] w-full rounded-[10px] text-[#ffffff] h-[50px]"
                type="button"
                value="Sign-Up"
              />
            </div>
          </div>

          <div className="right-hero w-[60%] h-full  flex justify-center items-center">
            <img
              className="w-[85%] h-[650px]"
              src="./src/assets/chat-img.png"
              alt="Login hero"
            />
          </div>
        </div>
      </div>
    </>
  );
}
