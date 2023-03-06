import Image from "next/image";
import Link from "next/link";
import { RiSearchLine, RiUser3Line, RiMenuFill } from "react-icons/ri";
import { BiMenu } from "react-icons/bi";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsArrowRight, BsSuitHeart } from "react-icons/bs";
import { CiUser, CiSearch } from "react-icons/ci";
import {
  MdClose,
  MdOutlineKeyboardArrowRight,
  MdOutlineMenu,
} from "react-icons/md";
import { IoIosMenu, IoIosSearch } from "react-icons/io";
import LargeLogo from "../icons/LargeLogo";
import MediumLogo from "../icons/MediumLogo";
import SmallLogo from "../icons/SmallLogo";
import ContentWrapper from "../Wrapper/ContentWrapper";
import NlLogo from "../icons/NlLogo";
import Heart from "../icons/Heart";
import HeartAnimated from "../icons/HeartAnimated";
import { sourceSans } from "@/helpers/sourceSansFont";
import Search from "../icons/Search";
const Header = () => {
  const [pageIsScrolled, setPageIsScrolled] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [search, setSearch] = useState(false);

  const handleOpenMenu = () => setMenuIsOpen(!menuIsOpen);
  const handleSearch = () => setSearch(!search);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const resize = () => {
      window.pageYOffset > 300
        ? setPageIsScrolled(true)
        : setPageIsScrolled(false);
    };
    window.addEventListener("scroll", resize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuIsOpen || search ? "hidden" : "auto";
    return () => (document.body.style.overflow = "scroll");
  }, [menuIsOpen, search]);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleWidth = () => {
      setWindowWidth(window.innerWidth);
      window.innerWidth > 640 && menuIsOpen ? setMenuIsOpen(false) : null;
    };
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);
  return (
    <header className="relative overflow-hidden ">
      <div className="fixed inset-0 z-30 w-screen h-max">
        <div className="bg-white shadow-3xl ">
          <div className="relative mx-auto max-w-8xl ">
            {/* <div className="fixed inset-x-0 top-0 z-30 w-full mx-auto max-w-8xl"> */}
            <div className="flex items-center justify-between">
              <div
                className={`space-y-px transition-all duration-400 ease-in-out group ${
                  pageIsScrolled ? " " : ""
                }`}
              >
                <Link
                  href="/"
                  className={`${
                    pageIsScrolled ? "py-1" : "py-[1.3125rem]"
                  } block group px-2 transition-all duration-500`}
                >
                  <LargeLogo
                    className={`transition-all duration-300 ${
                      pageIsScrolled ? "hidden" : "hidden lg:block"
                    }`}
                  />
                  <MediumLogo
                    className={`transition-all duration-300  ${
                      pageIsScrolled ? "hidden" : "hidden sm:block lg:hidden"
                    }`}
                  />
                  <SmallLogo
                    className={`transition-all duration-300 w-12 h-12 ${
                      pageIsScrolled ? "block" : " block sm:hidden"
                    }`}
                  />
                </Link>
              </div>
              <div
                className={`${sourceSans.variable} font-sourceSans p-6 md:p-4 h-[2.625rem] gap-3 flex items-center`}
              >
                <form className="relative p-2 max-w-[400px] w-96 py-2 items-center hidden lg:flex ">
                  <div className="flex-1 py-px">
                    <label className="sr-only">search</label>
                    <input
                      type="text"
                      className="border z-10 font-sourceSans absolute inset-0 rounded border-brandWhite-dark m-0 block w-full pl-3 pr-[3.375rem] bg-transparent bg-clip-padding text-base font-normal leading-10 text-brandGray-darker placeholder:text-brandGray-darker outline-none transition ease-in-out focus:z-[3] focus:border-gray-900 focus:text-brandGray-darker focus:outline-none "
                      placeholder="search..."
                      aria-label="search..."
                    />
                  </div>
                  <div className="relative z-20 pl-2 border-l border-brandWhite-dark">
                    {/* <IoIosSearch className="mx-3 text-3xl text-brandGray" /> */}
                    <Search />
                  </div>
                </form>
                <button className="flex items-center gap-[5px] group ">
                  <span className="hidden ml-2 py-[0.3rem] text-base font-bold leading-none md:block group-hover:underline">
                    Compare programmes
                  </span>
                  <BsSuitHeart className="text-3xl drop " />
                  {/* <BsSuitHeart className="text-3xl group-hover:shadow-4xl" /> */}
                </button>
                <Link href="/" className="block lg:hidden group">
                  <IoIosSearch className="mx-3 text-3xl border border-gray-500 text-brandGray group-hover:shadow-4xl" />
                </Link>
                <Link href="/" className="block ml-2 group">
                  <NlLogo className="w-8 h-8 border border-gray-500 group-hover:shadow-4xl" />
                </Link>
                <button
                  onClick={handleOpenMenu}
                  className=" font-semibold flex items-center gap-2 px-2 py-[.525rem] text-white lg:hidden group bg-brandGray-darker"
                >
                  <p className="hidden ml-2 text-base leading-none md:block">
                    Menu
                  </p>
                  {menuIsOpen ? (
                    <MdClose className="text-xl duration-700 ease-in-out transform" />
                  ) : (
                    <IoIosMenu className="text-xl" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            pageIsScrolled ? "hidden" : "hidden lg:block"
          }  bg-brandGray-lighter shadow-3.5xl transition-all duration-300 pt-2`}
        >
          <div className="relative mx-auto max-w-8xl ">
            <nav className="flex items-center gap-12">
              {[
                {
                  title: "Education",
                  list: [
                    "Bachelor's",
                    "Master's",
                    "Professional development",
                    "Summer School",
                    "Open programmes",
                    "Exchange",
                  ],
                },
                { title: "Research", list: ["Research at the UvA", "PhD"] },
                {
                  title: "News & Events",
                  list: [
                    "Bachelor's",
                    "Master's",
                    "Professional development",
                    "Summer School",
                    "Open programmes",
                    "Exchange",
                  ],
                },
                {
                  title: "About the UvA",
                  list: [
                    "Bachelor's",
                    "Master's",
                    "Professional development",
                    "Summer School",
                    "Open programmes",
                    "Exchange",
                  ],
                },
                {
                  title: "Library",
                  list: null,
                },
              ].map((e, i) => (
                <div
                  key={i}
                  className="relative cursor-pointer group pt-3 pb-[0.525rem]"
                >
                  <Link
                    href={e?.title}
                    className="text-xl w-fit relative z-10 pt-3 pb-[0.525rem] font-[1.25rem] hover:text-brandOrange leading-[32px] hover:border-b-2 border-brandOrange"
                  >
                    {e?.title}
                  </Link>
                  {e?.list && (
                    <div className="hidden min-w-[300px] -z-10- bg-brandGray-lighter -left-5 absolute group-hover:block">
                      <ul
                        className={`${sourceSans.variable} font-sourceSans flex flex-col pt-3 px-5 pb-4 `}
                      >
                        {e.list.map((e, i) => (
                          <li key={i}>
                            <Link
                              href={e}
                              className="py-1 text-lg block relative z-10 pt-3 font-[1.25rem] hover:text-brandOrange leading-[32px] hover:underline underline-offset-4 "
                            >
                              {e}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {menuIsOpen ? (
        <section className="grid w-full mx-auto h-fit bg-brandGray-lighter lg:hidden">
          <div className="pt-32 overflow-y-auto">
            <div className="flex items-center gap-2 ml-7">
              <BsArrowRight className="text-brandOrange" />
              <p className=" text-base block relative z-10 font-[1.25rem] text-brandOrange leading-[32px] ">
                Home
              </p>
            </div>
            <nav className="flex flex-col">
              {[
                {
                  title: "Education",
                  list: [
                    "Bachelor's",
                    "Master's",
                    "Professional development",
                    "Summer School",
                    "Open programmes",
                    "Exchange",
                  ],
                },
                { title: "Research", list: ["Research at the UvA", "PhD"] },
                {
                  title: "News & Events",
                  list: [
                    "Bachelor's",
                    "Master's",
                    "Professional development",
                    "Summer School",
                    "Open programmes",
                    "Exchange",
                  ],
                },
                {
                  title: "About the UvA",
                  list: [
                    "Bachelor's",
                    "Master's",
                    "Professional development",
                    "Summer School",
                    "Open programmes",
                    "Exchange",
                  ],
                },
                {
                  title: "Library",
                  list: null,
                },
              ].map((e, i) => (
                <div key={i} className="relative cursor-pointer group">
                  <div className="flex items-center w-full border border-white group">
                    <div className="flex items-center h-full p-3 bg-white group hover:bg-black">
                      <MdOutlineKeyboardArrowRight className="text-lg group-hover:text-white text-brandBlack " />
                    </div>
                    <Link
                      href={e?.title}
                      className="text-base block relative z-10 font-[1.25rem] hover:text-brandOrange leading-[32px] hover:border-b-2 border-brandOrange"
                    >
                      {e?.title}
                    </Link>
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </section>
      ) : null}
      <div className=""></div>
    </header>
  );
};

export default Header;
