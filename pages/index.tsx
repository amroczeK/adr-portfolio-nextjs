import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  MenuAlt3Icon,
  XIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";
import Head from "next/head";
import Script from "next/script";

import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

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

  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          color: 0x8d8f92,
          backgroundColor: 0x1d1e26,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          maxDistance: 15.0,
          spacing: 12.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destory();
    };
  }, [vantaEffect]);

  const onClickHambuger = () => {
    setOpenMenu(!openMenu);
    const sidebar = document.getElementById("side-menu");
    sidebar?.classList.toggle("translate-x-full");
  };
  return (
    <div className="w-full h-full">
      <Head>
        <script src="three.r119.min.js" />
        <script src="vanta.net.min.js" />
      </Head>
      <footer className="">
        <div className="container mx-auto p-4">
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
              <div className="flex w-full h-full space-x-2 items-center">
                <li className="group">
                  <NextLink href={"/#about-me"}>
                    <div className="flex items-center px-4 py-2 text-primary-light hover:text-primary-dark text-sm text-center tracking-widest hover:font-semibold hover:bg-secondary-light rounded-lg">
                      About Me
                      <span>
                        <ChevronRightIcon className="ml-0.5 text-secondary-light group-hover:text-primary-dark group-hover:rotate-90 transition duration-300 ease-in-out h-5 w-5" />
                      </span>
                    </div>
                    <div className="hidden group-hover:block absolute px-2 py-2  bg-secondary-light rounded-lg">
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
          <div ref={vantaRef} className="w-full bg-primary-dark">
            <div className="container mx-auto p-4">
              <div className="p-4 prose max-w-[120ch] pt-24 pb-48">
                <h1 className="text-4xl text-primary-light">
                  Welcome
                  <span className="text-secondary-light animate-pulse">.</span>
                </h1>
                <p className="text-primary-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  scelerisque lectus massa, nec vulputate lectus posuere sit
                  amet. Aenean eu sollicitudin nunc, at posuere nisi.
                  Pellentesque egestas eros velit, vitae hendrerit ex fringilla
                  vitae. Ut vehicula, augue eu vestibulum dictum, nulla sapien
                  ornare neque, nec vestibulum tortor dui sed justo. Integer
                  hendrerit nibh velit, nec mattis neque vehicula non. Sed quis
                  lacinia orci. Nunc viverra mauris sed nibh placerat, nec
                  tincidunt odio bibendum. Vestibulum aliquam lectus condimentum
                  rutrum elementum. Quisque dignissim metus sapien, semper
                  mattis nulla ultrices vitae. Vestibulum posuere interdum
                  venenatis. Morbi gravida, orci vel lobortis accumsan, velit
                  mauris faucibus augue, sit amet ultrices leo nibh id elit.
                  Vestibulum lobortis, leo non facilisis aliquam, arcu massa
                  mattis massa, a varius lacus nisi sit amet urna. Donec nec
                  diam turpis. Morbi vestibulum augue leo, sit amet bibendum
                  nulla feugiat semper. In lacinia libero eu tortor efficitur
                  blandit. Fusce sit amet sollicitudin justo.
                </p>
                <p className="text-primary-light">
                  Ut posuere consequat ipsum vitae venenatis. Praesent dui odio,
                  condimentum at enim ut, malesuada rutrum velit. Nulla vitae
                  pulvinar nisi. Sed efficitur est magna, et dapibus ante
                  dapibus at. Curabitur rhoncus cursus posuere. Suspendisse
                  blandit tellus quis libero pretium pellentesque. Sed bibendum,
                  orci ac consectetur consequat, ex mi pellentesque justo, ut
                  sodales lorem tortor a felis. Phasellus vehicula risus massa,
                  a mattis diam molestie non. Nam interdum, nibh id accumsan
                  feugiat, metus sem tempus libero, in fermentum nisi mi sit
                  amet est. Mauris vehicula imperdiet ex. In turpis quam,
                  imperdiet sit amet eleifend a, consequat sit amet massa. Nulla
                  porttitor, dui a suscipit condimentum, purus quam semper elit,
                  vel interdum ipsum purus ac nisl. Proin porttitor velit sit
                  amet ipsum posuere congue. Morbi varius arcu nulla, nec
                  consequat risus laoreet nec.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="w-full h-96 bg-secondary-dark"></div>
        </section>
      </main>
    </div>
  );
}
