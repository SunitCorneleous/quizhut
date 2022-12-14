import React from "react";
import { NavLink } from "react-router-dom";

const NavItems = ({ navOptions }) => {
  return (
    <ul
      className={`bg-primary-focus text-white z-10 md:bg-primary w-3/5 md:w-3/7 md:flex justify-end absolute  md:static ease-in duration-300 ${
        navOptions ? "left-0 top-0 h-full" : "left-[-280px] top-0 h-full"
      }`}
    >
      <li className="md:mx-1 text-xl md:my-0 my-20 px-7 md:px-2">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "text-neutral font-semibold" : undefined
          }
        >
          Home
        </NavLink>
      </li>
      <li className="md:mx-1 text-xl md:my-0 my-20 px-7 md:px-2">
        <NavLink
          to="/statistics"
          className={({ isActive }) =>
            isActive ? "text-neutral font-semibold" : undefined
          }
        >
          Statistics
        </NavLink>
      </li>
      <li className="md:mx-1 text-xl md:my-0 my-20 px-7 md:px-2">
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "text-neutral font-semibold" : undefined
          }
        >
          Blog
        </NavLink>
      </li>
    </ul>
  );
};

export default NavItems;
