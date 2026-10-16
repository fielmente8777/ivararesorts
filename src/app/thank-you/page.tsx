import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";

export default function ThankYou() {
  return (
    <main>
      <SectionWithContainer>
        <div className="flex flex-col gap-6 items-center justify-center">
          <div className="w-28 h-28 relative aspect-square">
            <Image
              src="/new-website/new-logo.webp"
              alt="Image"
              fill
              className="object-contain"
            />
          </div>
          <p className="">THANK YOU FOR SUBMITTING</p>
          <h1 className="font-bold font-primary text-2xl md:text-5xl text-primary">
            We will get back to you shortly!
          </h1>
          <LinkButton
            href="/"
            label="Back to Home"
            className="w-fit mx-auto rounded-full"
          />
        </div>
      </SectionWithContainer>
    </main>
  );
}
