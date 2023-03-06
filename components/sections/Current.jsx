import ContentWrapper from "../Wrapper/ContentWrapper";
import SectionWrapper from "../Wrapper/SectionWrapper";
import currentLarge1 from "../../public/images/current-large.jpeg";
import current2 from "../../public/images/current-2.webp";
import current3 from "../../public/images/current-3.webp";
import Image from "next/image";
import Card from "../ui/Card";
import Link from "next/link";
const Current = () => {
  return (
    <SectionWrapper>
      <ContentWrapper>
        <h2 className="mb-6 title-text">Current</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              image: (
                <Image
                  src={currentLarge1}
                  alt="current"
                  className="aspect-7/3 max-h-[190px] object-cover object-center w-fullr"
                />
              ),
              title: "Study in Amsterdam Week 20 - 24 February",
              description:
                "Discover everything an international student needs to know about studying at the UvA.",
            },
            {
              image: (
                <Image
                  src={current2}
                  alt="current"
                  className="aspect-7/3 max-h-[190px] object-cover object-center w-fullr"
                />
              ),
              title: "Study in Amsterdam Week 20 - 24 February",
              description:
                "Discover everything an international student needs to know about studying at the UvA.",
            },
            {
              image: (
                <Image
                  src={current3}
                  alt="current"
                  className="aspect-7/3 max-h-[190px] object-cover object-center w-fullr"
                />
              ),
              title: "Study in Amsterdam Week 20 - 24 February",
              description:
                "Discover everything an international student needs to know about studying at the UvA.",
            },
          ].map((e, i) => (
            <Link key={i} href="/" className="flex group">
              <Card {...e} />
            </Link>
          ))}
        </div>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default Current;
