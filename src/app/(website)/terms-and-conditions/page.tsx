import ImageBanner from "@/components/banners/ImageBanner";
import { SectionWithContainer } from "@/components/sectionComponants";
import Link from "next/link";
import { Metadata } from "next";
import { termsPageData } from "./termsPageData";

export const metadata: Metadata = {
  title: "Terms & Conditions | IVARA Resorts Khajuraho",
  description:
    "Read the Terms & Conditions of IVARA Resorts, Khajuraho. Understand the policies governing reservations, stays, cancellations, payments, and website use.",
};

export default function TermsAndConditionsPage() {
  const { bannerData, lastUpdated, intro, sections } = termsPageData;

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
                Welcome to Ivara Resorts. These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern
                your use of{" "}
                <Link
                  href="https://www.ivararesorts.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium underline underline-offset-4 hover:opacity-80 transition-opacity"
                >
                  www.ivararesorts.com
                </Link>{" "}
                (the &ldquo;Website&rdquo;) and all reservations, stays, events and
                services at Ivara Resorts, Khudar Bridge, Khajuraho, Madhya
                Pradesh (the &ldquo;Resort&rdquo;).
              </p>
              <p>
                By using the Website, making a reservation or staying at the
                Resort, you agree to these Terms and to our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-primary font-medium underline underline-offset-4 hover:opacity-80 transition-opacity"
                >
                  Privacy Policy
                </Link>
                . If you do not agree, please do not use the Website or our
                services.
              </p>
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

                {/* Table for Section 3 (Cancellation Policy) */}
                {section.table && (
                  <div className="overflow-x-auto my-6 border border-[#E3D9CD] rounded-xl">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-[#FAF7F1] border-b border-[#E3D9CD]">
                          {section.table.headers.map((header, idx) => (
                            <th
                              key={idx}
                              className="p-3.5 sm:p-4 font-primary text-base sm:text-lg font-bold text-tertiary"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E3D9CD]">
                        {section.table.rows.map((row, rowIdx) => (
                          <tr
                            key={rowIdx}
                            className="hover:bg-[#FAF7F1]/50 transition-colors"
                          >
                            <td className="p-3.5 sm:p-4 font-medium text-tertiary text-sm sm:text-base border-r border-[#E3D9CD]">
                              {row[0]}
                            </td>
                            <td className="p-3.5 sm:p-4 text-tertiary/85 text-sm sm:text-base">
                              {row[1]}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Numbered items */}
                {section.numberedItems && (
                  <ol className="list-decimal list-outside pl-6 space-y-2 text-tertiary/85">
                    {section.numberedItems.map((item, idx) => (
                      <li key={idx}>
                        {item.includes("reservations@ivararesorts.com") ? (
                          <>
                            {item.split("reservations@ivararesorts.com")[0]}
                            <Link
                              href="mailto:reservations@ivararesorts.com"
                              className="text-primary font-medium underline underline-offset-4 hover:opacity-80 transition-opacity"
                            >
                              reservations@ivararesorts.com
                            </Link>
                            {item.split("reservations@ivararesorts.com")[1]}
                          </>
                        ) : (
                          item
                        )}
                      </li>
                    ))}
                  </ol>
                )}

                {/* Section 15: Contact Card */}
                {section.contactCard && (
                  <div className="bg-[#FAF7F1] border border-[#E3D9CD] rounded-2xl p-6 sm:p-8 space-y-3 mt-4 text-tertiary/90">
                    <p className="font-semibold text-lg text-tertiary">
                      {section.contactCard.company}
                    </p>
                    <p>
                      <span className="font-semibold text-tertiary">Address:</span>{" "}
                      {section.contactCard.addressHref ? (
                        <Link
                          href={section.contactCard.addressHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity"
                        >
                          {section.contactCard.address}
                        </Link>
                      ) : (
                        section.contactCard.address
                      )}
                    </p>
                    <p>
                      <span className="font-semibold text-tertiary">Email:</span>{" "}
                      <Link
                        href={`mailto:${section.contactCard.email}`}
                        className="text-primary font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity"
                      >
                        {section.contactCard.email}
                      </Link>
                    </p>
                    <p>
                      <span className="font-semibold text-tertiary">Phone:</span>{" "}
                      <Link
                        href={`tel:${section.contactCard.phoneHref}`}
                        className="text-primary font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity"
                      >
                        {section.contactCard.phone}
                      </Link>
                    </p>
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
