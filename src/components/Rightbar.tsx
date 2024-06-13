import { FaSortDown } from "react-icons/fa";
import Groupinfo from "./GroupInfo";
import Individualinfo from "./IndividualInfo";
import { useAppContext } from "../Context/AppContextProvider";
import { Fragment } from "react/jsx-runtime";

export default function Rightbar() {
  // @ts-ignore
  const { showModal } = useAppContext();

  return (

      <div
        className={`${
          showModal ? "h-full w-[400px] overflow-y-auto" : "w-0 overflow-hidden"
        } duration-[0.3s] whitespace-nowrap`}
      >
        <Groupinfo />
      </div>
  );
} 
