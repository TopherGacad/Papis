import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="h-full mx-[20px] side-contain rounded-[20px] w-[467px] bg-white">
        <div className="search w-contain h-20 p-3  ">
          <input type="text" placeholder="Search here asd" />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
