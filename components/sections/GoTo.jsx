import Link from "next/link";
import Card from "../ui/Card";
import ContentWrapper from "../Wrapper/ContentWrapper";
import SectionWrapper from "../Wrapper/SectionWrapper";

const GoTo = () => {
  return (
    <SectionWrapper>
      <ContentWrapper>
        <h2 className="mb-6 title-text">Go to:</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: "Alumni",
            },
            {
              title: "Phd",
            },
            {
              title: "Working at the UvA",
            },
            {
              title: "UvA Experts",
            },
            {
              title: "Staff website",
            },
            {
              title: "Student website",
            },
          ].map((e, i) => (
            <Link
              key={i}
              href="/"
              className="flex w-full mb-3 border group border-brandGray-light"
            >
              <Card {...e} />
            </Link>
          ))}
        </div>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default GoTo;
