import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import ReviewsSlider from "./slider/ReviewsSlider";

interface TestimonialsProps {
  title: string;
  images: string;
  cta: {
    label: string;
    href: string;
  }[];
  reviews: {
    author: string;
    review: string;
  }[];
}

const Testimonials: React.FC<TestimonialsProps> = ({
  title,
  images,
  cta,
  reviews,
}) => {
  return (
    <Section defaultPadding={false} className="lg:py-1 py-8">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-2.5 items-center">
        <div className="w-full relative aspect-4/3.25 lg:aspect-4/2.75 lg:block hidden">
          <Image src={images} alt={title} fill className="object-cover" />
        </div>
        <Container className="flex flex-col gap-8 lg:px-10!">
          <SectionHeading title={title} />
          <div className="w-full relative aspect-4/3.25 lg:aspect-4/2.75 lg:hidden block">
            <Image src={images} alt={title} fill className="object-cover" />
          </div>
          <ReviewsSlider reviews={reviews} />
          <ul className="flex flex-wrap lg:gap-4 gap-2 w-full items-center">
            {cta.map((button, i) => (
              <li key={i} className="max-md:w-full">
                <LinkButton
                  {...button}
                  target={i !== 2 ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={` max-md:w-full justify-center rounded-lg py-3 px-6! uppercase ${
                    i === 0
                      ? "text-white bg-primary border-primary"
                      : "text-primary"
                  }`}
                  whatsAppIcon={i === 1}
                  callIcon={i === 0}
                />
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </Section>
  );
};

export default Testimonials;
