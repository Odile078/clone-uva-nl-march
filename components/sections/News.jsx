import Image from "next/image";
import Card from "../ui/Card";
import ContentWrapper from "../Wrapper/ContentWrapper";
import SectionWrapper from "../Wrapper/SectionWrapper";
import newsLarge1 from "../../public/images/news-large.png";
import news1 from "../../public/images/news1.jpeg";
import news3 from "../../public/images/news3.jpeg";
import news4 from "../../public/images/news-4.png";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { sourceSans } from "@/helpers/sourceSansFont";
const News = () => {
  return (
    <SectionWrapper className="bg-brandGray-light">
      <ContentWrapper>
        <h2 className="mb-6 title-text">News</h2>
      </ContentWrapper>
      <div className="px-2 mx-auto max-w-8xl">
        <div className="scroller">
          <div className="flex gap-6 flex-nowrap ">
            {[
              {
                image: (
                  <Image
                    src={news1}
                    alt="current"
                    className="aspect-7/3 max-h-[190px] object-cover object-center w-full"
                  />
                ),
                title: "Teflon is so slippery because it slides on itself",
                description:
                  "The surface of Teflon – the non-stick coating in your pan – is incredibly slippery. Thanks to research carried out at the Institute of Physics (UvA) and research centre ARCNL, we finally know where this slipperiness ...",
              },
              {
                image: (
                  <Image
                    src={newsLarge1}
                    alt="current"
                    className="aspect-7/3 max-h-[190px] object-cover object-center w-full"
                  />
                ),
                title: "Teflon is so slippery because it slides on itself",
                description:
                  "The surface of Teflon – the non-stick coating in your pan – is incredibly slippery. Thanks to research carried out at the Institute of Physics (UvA) and research centre ARCNL, we finally know where this slipperiness ...",
              },
              {
                image: (
                  <Image
                    src={news3}
                    alt="current"
                    className="aspect-7/3 max-h-[190px] object-cover object-center w-full"
                  />
                ),
                title: "Teflon is so slippery because it slides on itself",
                description:
                  "The surface of Teflon – the non-stick coating in your pan – is incredibly slippery. Thanks to research carried out at the Institute of Physics (UvA) and research centre ARCNL, we finally know where this slipperiness ...",
              },
              {
                image: (
                  <Image
                    src={news3}
                    alt="current"
                    className="aspect-7/3 max-h-[190px] object-cover object-center w-full"
                  />
                ),
                title: "Teflon is so slippery because it slides on itself",
                description:
                  "The surface of Teflon – the non-stick coating in your pan – is incredibly slippery. Thanks to research carried out at the Institute of Physics (UvA) and research centre ARCNL, we finally know where this slipperiness ...",
              },
              {
                image: (
                  <Image
                    src={newsLarge1}
                    alt="current"
                    className="aspect-7/3 max-h-[190px] object-cover object-center w-full"
                  />
                ),
                title: "Teflon is so slippery because it slides on itself",
                description:
                  "The surface of Teflon – the non-stick coating in your pan – is incredibly slippery. Thanks to research carried out at the Institute of Physics (UvA) and research centre ARCNL, we finally know where this slipperiness ...",
              },
              {
                image: (
                  <Image
                    src={newsLarge1}
                    alt="current"
                    className="aspect-7/3 max-h-[190px] object-cover object-center w-full"
                  />
                ),
                title: "Teflon is so slippery because it slides on itself",
                description:
                  "The surface of Teflon – the non-stick coating in your pan – is incredibly slippery. Thanks to research carried out at the Institute of Physics (UvA) and research centre ARCNL, we finally know where this slipperiness ...",
              },
              {
                image: (
                  <Image
                    src={newsLarge1}
                    alt="current"
                    className="aspect-7/3 max-h-[190px] object-cover object-center w-full"
                  />
                ),
                title: "Teflon is so slippery because it slides on itself",
                description:
                  "The surface of Teflon – the non-stick coating in your pan – is incredibly slippery. Thanks to research carried out at the Institute of Physics (UvA) and research centre ARCNL, we finally know where this slipperiness ...",
              },
              {
                image: (
                  <Image
                    src={newsLarge1}
                    alt="current"
                    className="aspect-7/3 max-h-[190px] object-cover object-center w-full"
                  />
                ),
                title: "Teflon is so slippery because it slides on itself",
                description:
                  "The surface of Teflon – the non-stick coating in your pan – is incredibly slippery. Thanks to research carried out at the Institute of Physics (UvA) and research centre ARCNL, we finally know where this slipperiness ...",
              },
              {
                image: (
                  <Image
                    src={newsLarge1}
                    alt="current"
                    className="aspect-7/3 max-h-[190px] object-cover object-center w-full"
                  />
                ),
                title: "Teflon is so slippery because it slides on itself",
                description:
                  "The surface of Teflon – the non-stick coating in your pan – is incredibly slippery. Thanks to research carried out at the Institute of Physics (UvA) and research centre ARCNL, we finally know where this slipperiness ...",
              },
            ].map((e, i) => (
              <Link key={i} href="/" className="flex w-80 group">
                <Card {...e} className="w-80" />
              </Link>
            ))}
          </div>
        </div>
        <div></div>
      </div>
      <ContentWrapper>
        <div className="flex justify-end mt-3">
          <Link
            href="/"
            className={`${sourceSans.variable} font-sourceSans flex text-xl pt-3 pb-[0.525rem] font-[1.25rem] text-brandOrange leading-[32px] border-b border-brandOrange`}
          >
            <p className="text-base leading-[1.2]">More news</p>
            <BsArrowRight className="text-lg" />
          </Link>
        </div>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default News;
