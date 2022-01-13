import { useState } from "react";
import Link from "next/link";
import { MenuAlt3Icon, XIcon } from "@heroicons/react/solid";

function NextLink({
  href,
  children,
  ...rest
}: {
  href: any;
  children?: any;
  rest?: any;
}) {
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
}

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);

  const onClickHambuger = () => {
    setOpenMenu(!openMenu);
    const sidebar = document.getElementById("side-menu");
    sidebar?.classList.toggle("translate-x-full");
  };
  return (
    <div className="w-full h-full">
      <footer className="">
        <div className="container mx-auto">
          <div className="flex w-full h-16 p-4 justify-between items-center">
            <NextLink href="/">
              <div className="flex items-center text-primary-light text-lg text-center font-semibold tracking-widest group">
                Adrian
                <span className="text-secondary-light ml-2">Mroczek</span>
                <span className="text-primary-light">:~$</span>
                {/* <span className="text-secondary-light hidden group-hover:inline-block group-hover:animate-pulse">_</span> */}
                <div className="bg-secondary-light ml-2 h-5 w-2 hidden group-hover:inline-flex group-hover:animate-pulse" />
              </div>
            </NextLink>

            <ul className="hidden sm:block">
              <div className="flex w-full h-full space-x-2">
                <li>
                  <NextLink href={"/#about-me"}>
                    <div className="px-4 py-2 text-primary-light hover:text-primary-dark text-sm text-center tracking-widest hover:font-semibold hover:bg-secondary-light rounded-lg">
                      About Me
                    </div>
                  </NextLink>
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

          <div
            id="side-menu"
            className="fixed sm:hidden bg-primary-dark w-screen h-screen z-10 right-0 transform translate-x-full transition duration-300 ease-in-out"
          >
            <div className="flex flex-col w-full h-full p-4 justify-evenly pb-[128px]">
              <ul>
                <div className="flex flex-col space-y-2">
                  <li>
                    <NextLink href={"/#about-me"}>
                      <div className="py-4 text-primary-light hover:text-primary-dark text-lg text-center font-semibold tracking-widest hover:bg-secondary-light rounded-lg">
                        About Me
                      </div>
                    </NextLink>
                  </li>
                  <li>
                    <NextLink href={"/blogs"}>
                      <div className="py-4 text-primary-light hover:text-primary-dark text-lg text-center font-semibold tracking-widest hover:bg-secondary-light rounded-lg">
                        Blogs
                      </div>
                    </NextLink>
                  </li>
                  <li>
                    <NextLink href={"/projects"}>
                      <div className="py-4 text-primary-light hover:text-primary-dark text-lg text-center font-semibold tracking-widest hover:bg-secondary-light rounded-lg">
                        Projects
                      </div>
                    </NextLink>
                  </li>
                  <li>
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
        </div>
      </footer>
      <main>
        <section>
          <div className="w-full h-96 bg-secondary-dark"></div>
        </section>
      </main>
    </div>
  );
}
