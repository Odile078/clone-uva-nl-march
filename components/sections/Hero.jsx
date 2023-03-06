import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import heroImg from "../../public/images/hero.jpeg";
const Hero = () => {
  return (
    <div className="px-3 mx-auto max-w-6.5xl min-h-max -mt-16 pb-6 sm:py-[4.5rem] lg:pb[86px] lg:mb-16">
      <div className="flex flex-col justify-between lg:flex-row ">
        <div className="mb-6 lg:mt-[4.5rem] md:w-hero">
          <h1 className="text-[2.625rem] leading-[1.4] font-semibold">
            University of Amsterdam
          </h1>
          <p className="text-[1.75rem] leading-[1.6]">
            Inspiring generations since 1632.
          </p>
        </div>
        <Image src={heroImg} alt="hero" className="md:w-hero shadow-6xl" />
      </div>
      <div className="-mt-[20%] sm:-mt-[30%] m-auto lg:mt-0 flex flex-col lg:flex-row transform lg:absolute lg:-translate-y-[150%] gap-3">
        {[
          {
            title: "Bachelor's",
            description: "20+ English-taught Bachelor's programmes",
          },
          {
            title: "Bachelor's",
            description: "20+ English-taught Bachelor's programmes",
          },
          {
            title: "Bachelor's",
            description: "20+ English-taught Bachelor's programmes",
          },
        ].map((e, i) => (
          <Link
            key={i}
            href="/"
            className="flex items-center gap-2 px-6 py-4 bg-white border group border-brandOrange hover:shadow-5xl lg:w-[30%]"
          >
            <div className="">
              <h5 className="text-base font-bold font-sourceSans leading-[1.6] text-brandOrange">
                {e.title}
              </h5>

              <p className="text-brandGray text-base font-sourceSans leading-[1.6]">
                {e.description}
              </p>
            </div>
            <BsArrowRight className="text-brandOrange" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hero;
