import React from "react";
import { UserIcon } from "@solar-icons/react/dynamic/user";
import { SliderMinimalisticHorizontalIcon } from "@solar-icons/react/dynamic/slider-minimalistic-horizontal";
import { FolderIcon } from "@solar-icons/react/dynamic/folder";
import { LetterIcon } from "@solar-icons/react/dynamic/letter";

import "../App.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex w-full fixed z-40   bottom-4 left-0 px-4 justify-center ">
      <ul className="flex  border border-border-color bg-black-2/50 backdrop-blur-xs  rounded-3xl p-1 gap-1 w-auto">
        <li>
          <NavLink
            to="/"
            aria-label="About"
            className={({ isActive }) =>
              `group flex size-12 items-center  justify-center rounded-[20px] transition-all ease-in-out duration-300 active:text-brand
             ${
               isActive
                 ? "bg-black-2 text-brand ring-1 ring-inset ring-border-color "
                 : "text-white-2 hover:bg-black-2 hover:text-white-2"
             }`
            }
          >
            {({ isActive }) => (
              <>
                <UserIcon
                  weight={isActive ? "Bold" : "Linear"}
                  size={26}
                  aria-hidden="true"
                />

                <span className="sr-only">About</span>
              </>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/work"
            aria-label="Work"
            className={({ isActive }) =>
              `group flex size-12 items-center  justify-center rounded-[20px] transition-all ease-in-out duration-300 active:text-brand
             ${
               isActive
                 ? "bg-black-2 text-brand ring-1 ring-inset  ring-border-color "
                 : "text-white-2 hover:bg-black-2 hover:text-white-2"
             }`
            }
          >
            {({ isActive }) => (
              <>
                <FolderIcon
                  weight={isActive ? "Bold" : "Linear"}
                  size={26}
                  aria-hidden="true"
                />

                <span className="sr-only">Work</span>
              </>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/things"
            aria-label="Things"
            className={({ isActive }) =>
              `group flex size-12 items-center  justify-center rounded-[20px] transition-all ease-in-out duration-300 active:text-brand
             ${
               isActive
                 ? "bg-black-2 text-brand ring-1 ring-inset ring-border-color "
                 : "text-white-2 hover:bg-black-2 hover:text-white-2"
             }`
            }
          >
            {({ isActive }) => (
              <>
                <SliderMinimalisticHorizontalIcon
                  weight={isActive ? "Bold" : "Linear"}
                  size={26}
                  aria-hidden="true"
                />

                <span className="sr-only">Things</span>
              </>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/con"
            aria-label="Email"
            className={({ isActive }) =>
              `group flex size-12 items-center  justify-center rounded-[20px] transition-all ease-in-out duration-300 active:text-brand
             ${
               isActive
                 ? "bg-black-2 text-brand ring-1 ring-inset ring-border-color "
                 : "text-white-2 hover:bg-black-2 hover:text-white-2"
             }`
            }
          >
            {({ isActive }) => (
              <>
                <LetterIcon
                  weight={isActive ? "Bold" : "Linear"}
                  size={26}
                  aria-hidden="true"
                />

                <span className="sr-only">Email</span>
              </>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
