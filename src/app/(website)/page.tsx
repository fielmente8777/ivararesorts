import {
  Container,
  Section,
  SectionWithContainer,
} from "@/components/sectionComponants";
import Image from "next/image";
import AboutSection from "@/components/home-components/AboutSection";
import { homePageData } from "@/components/home-components/pageData";
import VideoBanner from "../../components/banners/VideoBanner";
import GettingHereSection from "@/components/home-components/GettingHereSection";
import StoriesSection from "@/components/home-components/StoriesSection";
import GlampsSection from "@/components/home-components/GlampsSection";
import { SectionHeading } from "@/components/typography";
import LinkButton from "@/components/buttons/LinkButton";
import SlidingTitle from "@/components/sliders/SlidingTitle";
import Form1 from "@/components/forms/Form1";
import ExperienceSection from "@/components/home-components/ExperienceSection";
import Video from "@/components/banners/Video";

export default function LandingPage() {
  return (
    <main>
      <Video {...homePageData.heroSection} />
      <SlidingTitle items={homePageData.slidingText} />
      <SectionWithContainer
        defaultPadding={false}
        sectionClassName="bg-background lg:pt-12"
        containerClassName="md:rounded-2xl  md:py-3 pt-4 "
      >
        <div className="bg-secondary rounded-2xl p-4">
          <Form1 />
        </div>
      </SectionWithContainer>

      <AboutSection {...homePageData.about} />
      <Section className="bg-background "  defaultPadding={false}>
        <Section
          className="relative w-full lg:aspect-16/7 aspect-4/2 bg-cover bg-no-repeat bg-bottom lg:bg-center lg:bg-fixed flex items-center justify-center"
          style={{
            backgroundImage: `url(${homePageData.wisdom.image})`,
          }}
        >
          <div className="absolute inset-0 bg-black/30 "></div>
          <Container className="flex lg:max-w-5xl! flex-col items-center gap-8 z-20">
            <div className="w-35 relative aspect-square">
              <Image
                src={homePageData.wisdom.logo}
                alt="Rudraksh Logo"
                fill
                sizes="140px"
                className="object-contain"
              />
            </div>
            <p className="text-white text-center lg:text-2xl  text-lg">
              {homePageData.wisdom.description}
            </p>
          </Container>
        </Section>
      </Section>
      <GlampsSection {...homePageData.beginYourJourney} />
      <GettingHereSection {...homePageData.gettingHereSection} />
      <ExperienceSection {...homePageData.experienceSection} />
      <StoriesSection {...homePageData.storiesSection} />
      <Section
        className={`relative bg-fixed w-full  lg:aspect-16/7 aspect-4/4.25 bg-cover bg-center bg-no-repeat flex items-center justify-center`}
        style={{
          backgroundImage: `url(${homePageData.enquirySection.image})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <Container className="flex lg:max-w-5xl! flex-col items-center gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="">
            {/* <p className="text-primary uppercase text-center">
              {homePageData.enquirySection.title}
            </p> */}
            <SectionHeading
              title={homePageData?.enquirySection?.subtitle}
              textCenter
              titleColor="white"
            />
          </div>
          <p className="text-white text-center lg:text-xl lg:max-w-xl!">
            {homePageData.enquirySection.description}
          </p>
          <div className="flex flex-col gap-4 max-w-sm w-full">
            {homePageData.enquirySection.buttons.map((button, index) => (
              <LinkButton
                key={index}
                {...button}
                target="_blank"
                rel="noopener noreferrer"
                arrowIcon={false}
                whatsAppIcon2={index === 0}
                className={`rounded-sm justify-center w-full uppercase tracking-widest max-md:text-sm! ${index === 0 ? "text-white bg-primary border-primary" : "text-primary bg-transparent border border-primary"}`}
              />
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}