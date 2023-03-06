import Link from "next/link";
import {
  MdKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import LogoNoBackground from "../icons/LogoNoBackground";
import ContentWrapper from "../Wrapper/ContentWrapper";

import { useEffect, useState } from "react";
import { sourceSans } from "@/helpers/sourceSansFont";

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);
  return (
    <footer
      className={`${sourceSans.variable} font-sourceSans text-white bg-brandGray-darker pt-9  `}
    >
      <ContentWrapper>
        <LogoNoBackground className="w-72 h-11 sm:w-96" />
      </ContentWrapper>
      <ContentWrapper>
        <ul className="grid grid-cols-1 gap-4 mt-12 mb-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Education & research",
              list: [
                "Bachelor's programmes",
                "Minors",
                "Master's programmes",
                "Professional development",
                "Exchange",
                "Summer School",
                "PhD at UvA",
                "Research at UvA",
              ],
            },
            {
              title: "Got to",
              list: [
                "Bachelor's programmes",
                "Minors",
                "Master's programmes",
                "Professional development",
                "Exchange",
                "Summer School",
                "PhD at UvA",
                "Research at UvA",
              ],
            },
            {
              title: "Infromation for",
              list: [
                "Bachelor's programmes",
                "Minors",
                "Master's programmes",
                "Professional development",
                "Exchange",
                "Summer School",
                "PhD at UvA",
                "Research at UvA",
              ],
            },
            {
              title: "Contact",
              list: [
                "Contact information",
                "Locations",
                "Contact Student Services",
                "The UvA and social mediaA",
              ],
            },
          ].map((e, i) => (
            <details
              key={i}
              className="space-y-4"
              open={windowWidth > 640 && true}
            >
              <summary className="flex items-center justify-between py-3 border-t cursor-pointer md:py-0 border-brandGray-pale md:border-0">
                <h5 className="text-base leading-[1.6] font-semibold ">
                  {e?.title}
                </h5>
                <MdKeyboardArrowDown className="text-2xl duration-300 ease-in-out sm:hidden group-open:rotate-90" />
              </summary>
              <ul className="mb-6">
                {e.list.map((e, i) => (
                  <li key={i} className="pl-2 py-[.1875rem]">
                    <Link href={e} className="flex items-center gap-1">
                      <MdOutlineKeyboardArrowRight className="text-base " />
                      <p className="text-[87.5%] leading-[27px] ">{e}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </ul>
      </ContentWrapper>
      <div className="py-6 border-t border-brandGray-pale">
        <ContentWrapper>
          <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:justify-between">
            <div className="flex flex-col items-center gap-3 sm:flex-row lg:order-last">
              <p className="gap-3 text-[.875rem] text-brandWhite-dark leading-[1.6]">
                Follow UvA on social media
              </p>
              <ul className="flex gap-3">
                {[
                  { icon: <FaFacebookF /> },
                  { icon: <FaTwitter /> },
                  { icon: <FaLinkedinIn /> },
                  { icon: <FaInstagram /> },
                  { icon: <FaWhatsapp /> },
                  { icon: <FaYoutube /> },
                ].map((e, i) => (
                  <Link
                    key={i}
                    href="/"
                    className="block gap-3 text-[.875rem] text-white leading-[1.6]"
                  >
                    {e?.icon}
                  </Link>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row items-items">
              <p className="gap-3 text-[.875rem] text-brandWhite-dark leading-[1.6] text-center sm:text-start">
                Copyright UvA 2023
              </p>
              <ul className="flex gap-3">
                {["About this site", "Privacy", "Cookie settings"].map((e, i) =>
                  i == 2 ? (
                    <button
                      key={i}
                      className="block gap-3 text-[.875rem] text-white leading-[1.6]"
                    >
                      {e}
                    </button>
                  ) : (
                    <Link
                      key={i}
                      href="/"
                      className="block gap-3 text-[.875rem] text-white leading-[1.6]"
                    >
                      {e}
                    </Link>
                  )
                )}
              </ul>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </footer>
  );
};

export default Footer;
