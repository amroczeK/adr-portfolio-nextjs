import { useState, useRef } from "react";
import { useClickOutsideDropdown } from "../hooks/ClickOutsideDropdown";
import { MenuAlt3Icon, XIcon, ChevronRightIcon } from "@heroicons/react/solid";
import NextLink from "./NextLink";

export default function Nav({}) {
  const [openMenu, setOpenMenu] = useState(false);

  const onClickHambuger = () => {
    setOpenMenu(!openMenu);
    const sidebar = document.getElementById("side-menu");
    sidebar?.classList.toggle("translate-x-full");
  };
  return (
    <header>
      <div className="container mx-auto p-4">
        <div className="flex w-full h-16 p-4 justify-between items-center">
          <NextLink href="/">
            <div className="flex items-center text-primary-light text-lg text-center font-semibold tracking-widest group">
              Adrian
              <span className="text-secondary-light ml-2">Mroczek</span>
              <span className="text-primary-light">:~$</span>
              <div className="bg-secondary-light ml-2 h-5 w-2 flex animate-pulse" />
            </div>
          </NextLink>

          <ul className="hidden sm:block">
            <div className="flex w-full h-full space-x-2 items-center">
              <li className="group">
                <NextLink href={"/#about-me"}>
                  <div className="flex items-center px-4 py-2 text-primary-light hover:text-primary-dark text-sm text-center tracking-widest hover:font-semibold hover:bg-secondary-light rounded-t-lg">
                    About Me
                    <span>
                      <ChevronRightIcon className="ml-0.5 text-secondary-light group-hover:text-primary-dark group-hover:rotate-90 transition duration-300 ease-in-out h-5 w-5" />
                    </span>
                  </div>
                </NextLink>
                <div className="hidden group-hover:block absolute z-[99] px-2 py-2  bg-secondary-light rounded-tr-lg hover:rounded-tl-lg rounded-b-lg">
                  <ul>
                    <li>
                      <NextLink href={"/#skills"}>
                        <div className="px-4 py-2 text-primary-dark hover:bg-primary-dark hover:text-primary-light rounded-lg text-sm text-left tracking-widest hover:font-semibold">
                          Skills
                        </div>
                      </NextLink>
                    </li>
                    <li>
                      <NextLink href={"/#recent-posts"}>
                        <div className="px-4 py-2 text-primary-dark hover:bg-primary-dark hover:text-primary-light rounded-lg text-sm text-left tracking-widest hover:font-semibold">
                          Recent Posts
                        </div>
                      </NextLink>
                    </li>
                    <li>
                      <NextLink href={"/#recent-work"}>
                        <div className="px-4 py-2 text-primary-dark hover:bg-primary-dark hover:text-primary-light rounded-lg text-sm text-left tracking-widest hover:font-semibold">
                          Recent Work
                        </div>
                      </NextLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <NextLink href={"/blogs"}>
                  <div className="px-4 py-2 text-primary-light hover:text-primary-dark text-sm text-center tracking-widest hover:font-semibold hover:bg-secondary-light rounded-lg">
                    Blogs
                  </div>
                </NextLink>
              </li>
              <li>
                <NextLink href={"/projects"}>
                  <div className="px-4 py-2 text-primary-light hover:text-primary-dark text-sm text-center tracking-widest hover:font-semibold hover:bg-secondary-light rounded-lg">
                    Projects
                  </div>
                </NextLink>
              </li>
              <li>
                <NextLink href={"/contact"}>
                  <div className="px-4 py-2 text-primary-light hover:text-primary-dark text-sm text-center tracking-widest hover:font-semibold hover:bg-secondary-light rounded-lg">
                    Contact
                  </div>
                </NextLink>
              </li>
            </div>
          </ul>
          <button
            className="sm:hidden cursor-pointer"
            onClick={onClickHambuger}
          >
            {!openMenu ? (
              <div className="group hover:bg-secondary-light p-2 rounded-md">
                <MenuAlt3Icon className="h-6 w-6 text-primary-light group-hover:text-primary-dark" />
              </div>
            ) : (
              <div className="group hover:bg-secondary-light p-2 rounded-md">
                <XIcon className="h-6 w-6 text-primary-light group-hover:text-primary-dark" />
              </div>
            )}
          </button>
        </div>
        <Sidebar onClickHambuger={onClickHambuger} />
      </div>
    </header>
  );
}

function Sidebar({ onClickHambuger }) {
  const [openMenu, setOpenMenu] = useState(false);

  const onClickDropdown = () => {
    const dropdownBtn = document.getElementById("dropdown-btn");
    const dropdownMenu = document.getElementById("dropdown-menu");

    if (!openMenu) {
      dropdownBtn.classList.replace(
        "text-secondary-light",
        "text-primary-dark"
      );
      dropdownBtn.classList.add("rotate-90");
      dropdownMenu.classList.replace("hidden", "flex");
      setOpenMenu(true);
    } else {
      dropdownBtn.classList.remove("rotate-90");
      dropdownBtn.classList.replace(
        "text-primary-dark",
        "text-secondary-light"
      );
      dropdownMenu.classList.replace("flex", "hidden");
      setOpenMenu(false);
    }
  };

  const wrapperRef = useRef(null);
  useClickOutsideDropdown(wrapperRef, openMenu, onClickDropdown);

  return (
    <div
      id="side-menu"
      className="fixed sm:hidden z-[99] bg-primary-dark w-screen h-screen right-0 transform translate-x-full transition duration-300 ease-in-out"
    >
      <div className="flex flex-col w-full h-full p-4 justify-evenly pb-[128px]">
        <ul>
          <div className="flex flex-col space-y-2">
            <li>
              <div className="group flex items-center justify-center py-4 text-primary-light hover:text-primary-dark text-lg text-center font-semibold tracking-widest hover:bg-secondary-light rounded-lg">
                <NextLink href={"/#about-me"} onClick={onClickHambuger}>
                  <div className="text-primary-light group-hover:text-primary-dark text-lg text-center font-semibold tracking-widest">
                    About Me
                  </div>
                </NextLink>
                <button onClick={onClickDropdown}>
                  <ChevronRightIcon
                    id="dropdown-btn"
                    className="ml-0.5 text-secondary-light group-hover:text-primary-dark transition duration-300 ease-in-out h-5 w-5"
                  />
                </button>
              </div>
              <div
                ref={wrapperRef}
                id="dropdown-menu"
                className="hidden mt-2 group-hover:flex items-center justify-center z-[99] px-2 py-2  bg-secondary-light rounded-lg"
              >
                <ul>
                  <li onClick={onClickHambuger}>
                    <NextLink href={"/#skills"}>
                      <div className="px-4 py-2 w-full text-primary-dark hover:bg-primary-dark hover:text-primary-light rounded-lg text-sm text-center tracking-widest hover:font-semibold">
                        Skills
                      </div>
                    </NextLink>
                  </li>
                  <li onClick={onClickHambuger}>
                    <NextLink href={"/#recent-posts"}>
                      <div className="px-4 py-2 text-primary-dark hover:bg-primary-dark hover:text-primary-light rounded-lg text-sm text-center tracking-widest hover:font-semibold">
                        Recent Posts
                      </div>
                    </NextLink>
                  </li>
                  <li onClick={onClickHambuger}>
                    <NextLink href={"/#recent-work"}>
                      <div className="px-4 py-2 text-primary-dark hover:bg-primary-dark hover:text-primary-light rounded-lg text-sm text-center tracking-widest hover:font-semibold">
                        Recent Work
                      </div>
                    </NextLink>
                  </li>
                </ul>
              </div>
            </li>
            <li onClick={onClickHambuger}>
              <NextLink href={"/blogs"}>
                <div className="py-4 text-primary-light hover:text-primary-dark text-lg text-center font-semibold tracking-widest hover:bg-secondary-light rounded-lg">
                  Blogs
                </div>
              </NextLink>
            </li>
            <li onClick={onClickHambuger}>
              <NextLink href={"/projects"}>
                <div className="py-4 text-primary-light hover:text-primary-dark text-lg text-center font-semibold tracking-widest hover:bg-secondary-light rounded-lg">
                  Projects
                </div>
              </NextLink>
            </li>
            <li onClick={onClickHambuger}>
              <NextLink href={"/contact"}>
                <div className="py-4 text-primary-light hover:text-primary-dark text-lg text-center font-semibold tracking-widest hover:bg-secondary-light rounded-lg">
                  Contact
                </div>
              </NextLink>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
