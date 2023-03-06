import Image from "next/image";
import Link from "next/link";
import { RiSearchLine, RiUser3Line, RiMenuFill } from "react-icons/ri";
import { BiMenu } from "react-icons/bi";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsArrowRight, BsSuitHeart } from "react-icons/bs";
import { CiUser, CiSearch } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import LargeLogo from "../icons/LargeLogo";
import MediumLogo from "../icons/MediumLogo";
import SmallLogo from "../icons/SmallLogo";
import ContentWrapper from "../Wrapper/ContentWrapper";
import NlLogo from "../icons/NlLogo";
import Heart from "../icons/Heart";
import HeartAnimated from "../icons/HeartAnimated";
import { sourceSans } from "@/helpers/sourceSansFont";
const Header = () => {
  const [pageIsScrolled, setPageIsScrolled] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [search, setSearch] = useState(false);

  const handleOpenMenu = () => setMenuIsOpen(!menuIsOpen);
  const handleSearch = () => setSearch(!search);
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
  return (
    <header className="relative overflow-hidden ">
      <div className="fixed inset-0 z-30 w-screen h-max">
        <div className="bg-white shadow-3xl">
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
              <div className="p-4 h-[2.625rem] gap-3 flex items-center">
                <form className="items-center hidden border border-gray-500 lg:flex focus:border focus:border-brandBlack">
                  <div className="flex-1 py-px">
                    <label className="sr-only">search</label>
                    <input
                      type="text"
                      className="border-r border-r-gray-400 relative m-0 block w-full px-3  bg-transparent bg-clip-padding text-base font-normal leading-10 text-brandBlack outline-none transition ease-in-out focus:z-[3] focus:border-gray-900 focus:text-brandBlack focus:outline-none "
                      placeholder="search"
                      aria-label="search"
                    />
                  </div>
                  <IoIosSearch className="mx-3 text-3xl text-brandBlack" />
                </form>
                <button className="flex items-center gap-[5px] group ">
                  <span
                    className={`${sourceSans.variable} font-sourceSans hidden ml-2
                   py-[0.3rem] text-base font-bold leading-none md:block group-hover:underline`}
                  >
                    Compare programmes
                  </span>
                  <BsSuitHeart className="text-3xl group-hover:shadow-4xl" />
                </button>
                <Link href="/" className="block lg:hidden group">
                  <IoIosSearch className="mx-3 text-3xl border border-gray-500 text-brandBlack group-hover:shadow-4xl" />
                </Link>
                <Link href="/" className="block group">
                  <NlLogo className="w-8 h-8 border border-gray-500 group-hover:shadow-4xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            pageIsScrolled ? "hidden" : "hidden sm:block"
          }  bg-brandGray-lighter shadow-3.5xl transition-all duration-300 `}
        >
          <div className="relative mx-auto max-w-8xl ">
            <nav className="flex items-center gap-12">
              {[
                "Education",
                "Research",
                "News & Events",
                "About the UvA",
                "Library",
              ].map((e, i) => (
                <Link
                  key={i}
                  href={e}
                  className="text-xl pt-3 pb-[0.525rem] font-[1.25rem] hover:text-brandOrange leading-[32px] hover:border-b-2 border-brandOrange"
                >
                  {e}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {menuIsOpen ? (
        <section className="fixed inset-0 z-50 grid h-screen mx-auto bg-white max-w-5.5xl 3xl:max-w-[1252px] 4xl:max-w-[1600px] ">
          <div className="overflow-y-auto">
            <div
              onClick={handleOpenMenu}
              className="bg-[#F2EFED] ml-auto p-5 cursor-pointer absolute top-0 right-0 group"
            >
              <MdClose className="text-4xl duration-700 ease-in-out transform group-hover:rotate-180 rotate-icon " />
            </div>
            <div className="">
              <div className="flex flex-col justify-between space-y-10 cursor-pointer pt-52 px-36">
                {[
                  "Study at VU Amsterdam",
                  "Research",
                  "About VU Amsterdam",
                  "VU press office",
                  "Alumni",
                  "Student",
                  "Employee",
                ].map((e, i) => {
                  return (
                    <Link key={i} href={e}>
                      <div className="flex justify-between max-w-sm">
                        <p className="text-[24px] leading-[30px] whitespace-nowrap font-semibold">
                          {" "}
                          {e}
                        </p>
                        {i === 0 || i === 1 ? (
                          <AiOutlinePlus className="text-2xl" />
                        ) : (
                          <BsArrowRight className="text-2xl" />
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      ) : null}
      <div className=""></div>
    </header>
  );
};

export default Header;
