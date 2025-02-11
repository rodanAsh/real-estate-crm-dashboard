import { useTheme } from "../hooks/useTheme";
import profile from "../assets/profile.png";
import { FaCaretDown, FaSearch, FaRegBell } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { IoSunny } from "react-icons/io5";
import { AiFillMoon } from "react-icons/ai";
import { useState } from "react";
import React from "react";
import { TbHomeFilled } from "react-icons/tb";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenu, setIsMenu] = useState(false);

  console.log(theme);
  

  const handleTheme = () => {
    toggleTheme();
  };

  return (
    <section className="py-2 px-2 sm:px-4 md:px-6 lg:px-8mt-2 flex gap-2 items-center justify-between background-gradient">

      {/* ------ Left side ------- */}
      <div className="flex gap-1 items-center justify-center">
        <p className="text-2xl text-blue-500">
          <TbHomeFilled />
        </p>{" "}
        <p className="text-xl font-extrabold">Emoh</p>
      </div>

      <form className="flex bg-white border border-slate-900 rounded-md px-4 py-2 items-center text-blue-500">
        <input
          className="placeholder:text-slate-900 w-full md:w-[400px] outline-none text-slate-900 font-medium"
          type="text"
          placeholder="Search here..."
        />
        <FaSearch />
      </form>

      {/* -------- Right Side --------- */}
      <div className="flex items-center gap-2 md:gap-4">
        <div className="text-blue-500 text-2xl flex gap-2 md:gap-4">
          <p className="bg-white dark:bg-slate-200 p-1 rounded">
            <FaRegBell />
          </p>
          <p className="bg-white dark:bg-slate-200 p-1 rounded">
            <MdOutlineMessage />
          </p>
          <div onClick={handleTheme} className="bg-white dark:bg-slate-200 p-1 rounded">
            {theme ? <IoSunny /> : <AiFillMoon />}
          </div>
        </div>

        <hr className="w-[1px] h-10 bg-slate-200" />

        <div className="flex items-center gap-2">
          <div>
            <h3 className="text-sm font-medium">John Doe</h3>
            <p className="text-xs font-thin">Admin</p>
          </div>
          <div
            onClick={() => setIsMenu((prev) => !prev)}
            className="flex items-end text-white cursor-pointer hover:scale-105 transition-all duration-75"
          >
            <img className="w-10 rounded-md" src={profile} alt="" />
            <p className="text-blue-500">
              <FaCaretDown />
            </p>
          </div>

          {/* Modal */}
          {isMenu && (
            <div className="p-2 absolute top-14 right-10 bg-white text-xs text-black rounded-md leading-snug font-medium z-10">
              <p className="hover:underline cursor-pointer">Logout</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Header;
