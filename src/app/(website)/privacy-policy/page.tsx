import ImageBanner from "@/components/banners/ImageBanner";
import { SectionWithContainer } from "@/components/sectionComponants";
import Link from "next/link";
import { Metadata } from "next";
import { privacyPageData } from "./privacyPageData";

export const metadata: Metadata = {
  title: "Privacy Policy | IVARA Resorts Khajuraho",
  description:
    "Read the Privacy Policy of IVARA Resorts, Khajuraho. Understand how we collect, use, and protect your personal data in accordance with Indian data protection laws.",
};

export default function PrivacyPolicyPage() {
  const { bannerData, lastUpdated, intro, sections } = privacyPageData;

  return (
    <main className="bg-white">
      {/* Banner */}
      <ImageBanner
        title={bannerData.title}
        images={[bannerData.image]}
        centeredTitle={true}
        showForm={false}
      />

      {/* Main Content Area */}
      <SectionWithContainer>
        <div className="font-manrope">
          {/* Header Intro */}
          <div className="border-b border-[#E3D9CD] pb-6 mb-10">
            <p className="text-sm md:text-base text-tertiary/70 font-medium">
              <span className="font-semibold text-tertiary">Last updated:</span>{" "}
              {lastUpdated}
            </p>
            <div className="mt-4 space-y-3 text-base md:text-lg text-tertiary/90 leading-relaxed">
              <p>
                Ivara Resorts (&ldquo;Ivara&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects your
                privacy. This Privacy Policy explains what personal data we collect
                when you visit{" "}
                <Link
                  href="https://www.ivararesorts.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium underline underline-offset-4 hover:opacity-80 transition-opacity"
                >
                  www.ivararesorts.com
                </Link>{" "}
                (the &ldquo;Website&rdquo;), make an enquiry or reservation, or stay with us
                at Khudar Bridge, Khajuraho, Madhya Pradesh. It also explains why
                we collect that data, how we use and protect it, and the choices
                and rights available to you.
              </p>
              {intro.slice(1).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Policy Sections */}
          <div className="space-y-10 text-tertiary/90 text-base md:text-lg leading-relaxed">
            {sections.map((section) => (
              <section key={section.id} className="space-y-4">
                <h2 className="font-primary text-2xl sm:text-3xl md:text-[28px] font-bold text-tertiary">
                  {section.title}
                </h2>

                {section.description && <p>{section.description}</p>}

                {/* Subsections if available */}
                {section.subSections && (
                  <div className="space-y-4 pl-1 sm:pl-2">
                    {section.subSections.map((sub, idx) => (
                      <div key={idx}>
                        <h3 className="font-semibold text-lg text-tertiary">
                          {sub.title}
                        </h3>
                        <ul className="list-disc list-outside pl-6 mt-2 space-y-1 text-tertiary/85">
                          {sub.items.map((item, itemIdx) => (
                            <li key={itemIdx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Numbered items */}
                {section.numberedItems && (
                  <ol className="list-decimal list-outside pl-6 space-y-2 text-tertiary/85">
                    {section.numberedItems.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ol>
                )}

                {/* Bullet items */}
                {section.bulletItems && (
                  <ul className="list-disc list-outside pl-6 space-y-2 text-tertiary/85">
                    {section.bulletItems.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}

                {/* Note */}
                {section.note && (
                  <p className="text-tertiary/85 pt-1">{section.note}</p>
                )}

                {/* Closing text */}
                {section.closingText && (
                  <p className="text-tertiary/85 pt-1">{section.closingText}</p>
                )}

                {/* Section 9: Rights Box */}
                {section.rightsBox && (
                  <div className="bg-[#FAF7F1] border border-[#E3D9CD] p-5 sm:p-6 rounded-xl space-y-3 mt-4">
                    <p className="text-tertiary/90">
                      {section.rightsBox.text}
                      <Link
                        href={`mailto:${section.rightsBox.email}`}
                        className="text-primary font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity"
                      >
                        {section.rightsBox.email}
                      </Link>
                      {section.rightsBox.afterEmail}
                    </p>
                    <p className="text-tertiary/90">
                      {section.rightsBox.boardNotice}
                    </p>
                  </div>
                )}

                {/* Section 13: Grievance Card */}
                {section.grievanceCard && (
                  <div className="bg-[#FAF7F1] border border-[#E3D9CD] rounded-2xl p-6 sm:p-8 space-y-3 mt-4 text-tertiary/90">
                    {"name" in section.grievanceCard && Boolean((section.grievanceCard as any).name) && (
                      <p>
                        <span className="font-semibold text-tertiary">Name:</span>{" "}
                        {(section.grievanceCard as any).name}
                      </p>
                    )}
                    {"designation" in section.grievanceCard && Boolean((section.grievanceCard as any).designation) && (
                      <p>
                        <span className="font-semibold text-tertiary">
                          Designation:
                        </span>{" "}
                        {(section.grievanceCard as any).designation}
                      </p>
                    )}
                    <p>
                      <span className="font-semibold text-tertiary">Address:</span>{" "}
                      {"addressHref" in section.grievanceCard && Boolean((section.grievanceCard as any).addressHref) ? (
                        <Link
                          href={(section.grievanceCard as any).addressHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity"
                        >
                          {section.grievanceCard.address}
                        </Link>
                      ) : (
                        section.grievanceCard.address
                      )}
                    </p>
                    <p>
                      <span className="font-semibold text-tertiary">Email:</span>{" "}
                      <Link
                        href={`mailto:${section.grievanceCard.email}`}
                        className="text-primary font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity"
                      >
                        {section.grievanceCard.email}
                      </Link>
                    </p>
                    <p>
                      <span className="font-semibold text-tertiary">Phone:</span>{" "}
                      <Link
                        href={`tel:${section.grievanceCard.phoneHref}`}
                        className="text-primary font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity"
                      >
                        {section.grievanceCard.phone}
                      </Link>
                    </p>
                    <div className="pt-2 border-t border-[#E3D9CD]/60 text-sm text-tertiary/80">
                      {section.grievanceCard.note}
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </SectionWithContainer>
    </main>
  );
}
