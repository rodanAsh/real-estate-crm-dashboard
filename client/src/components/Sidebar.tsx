import React, { useState } from "react";
import { TbHomeFilled } from "react-icons/tb";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaUserTag } from "react-icons/fa6";
import { TbHomeDollar } from "react-icons/tb";
import { MdOutlineAnalytics } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa6";

type NavLink = {
  id: number;
  label: string;
  icon: React.ReactElement;
};

const NavLinks: NavLink[] = [
  {
    id: 1,
    label: "Dashboard",
    icon: <LuLayoutDashboard />,
  },
  {
    id: 2,
    label: "Lead",
    icon: <FaUserTag />,
  },
  {
    id: 3,
    label: "Property",
    icon: <TbHomeDollar />,
  },
  {
    id: 4,
    label: "Analytics & Report",
    icon: <MdOutlineAnalytics />,
  },
  {
    id: 5,
    label: "Settings",
    icon: <MdOutlineSettings />,
  },
];

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  return (
        <section className="shadow-xl min-h-screen flex flex-col justify-between">
          {
            isMenuOpen && (
            <>

              {/* --------- Nav Links ---------- */}

              <div className="pt-6 flex flex-col gap-3">
                {NavLinks.map((nav) => (
                  <div
                    className="flex p-2 flex-col items-center gap-2 hover:text-blue-500 hover-gradient rounded"
                    key={nav.id}
                  >
                    <p className="text-3xl">{nav.icon}</p>
                    <p className="font-medium">{nav.label}</p>
                  </div>
                ))}
              </div>

              <div
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="bg-blue-500 flex justify-center"
              >
                <p className="p-2 text-white">
                  <FaAngleLeft />
                </p>
              </div>
          </>
          )}
             
          { !isMenuOpen && (
            <div onClick={() => setIsMenuOpen(prev => !prev)} className="bg-blue-500 flex items-center text-white font-extrabold p-2 h-full">
              <FaAngleRight />
            </div>
          )}
      </section>
  );
};

export default Sidebar;
