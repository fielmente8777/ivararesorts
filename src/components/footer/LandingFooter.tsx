"use client";
import { contact } from "@/utils/constent";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LazyLoadedMap from "../map/LazyLoadedMap";
import { Container } from "../sectionComponants";
import { footerData } from "./footerdata";
import LinkButton from "../buttons/LinkButton";

const LandingFooter = () => {
  const pathName = usePathname();
  if (pathName === "/thank-you/") {
    return null;
  }
  return (
    <footer className="max_screen_width bg-tertiary text-white">
      <Container>
        <div className="grid md:py-14 py-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_.5fr] gap-12 md:gap-16">
          <div className=" flex flex-col w-full lg:max-w-xl gap-6">
            <div
              className={`relative 
                  w-35 aspect-[4/2.95] md:w-40`}
            >
              <Image
                src={footerData.logo}
                alt="logo"
                fill
                sizes="100%"
                className="object-contain"
              />
            </div>
            <p className=" text-white/60">
              {footerData.description}
            </p>
          </div>

          {footerData.lists.map((list, index) => (
            <div className={` flex flex-col gap-4 md:gap-6`} key={index}>
              <h2
                className="text-3xl text-white font-primary"
                dangerouslySetInnerHTML={{ __html: list.title ?? "" }}
              />
              <ul className={`flex flex-col md:gap-2 gap-4`}>
                {list.links.map((item, suIndex) => (
                  <li
                    className={`flex gap-2 ${suIndex === 1 ? "flex-wrap" : ""}`}
                    key={suIndex}
                  >
                    <span
                      className={`mt-1 ${
                        index === 1
                          ? "text-white flex items-center justify-center rounded-sm bg-white w-10 aspect-square"
                          : "text-white inline-block"
                      }`}
                    >
                      {item.icon}
                      <span className="sr-only">{item.label}</span>
                    </span>
                    {/* {item.title && (
                      <span
                        className={`${
                          index === 1
                            ? "text-white font-aboreto text-2xl my-auto"
                            : "md:text-lg text-white inline-block"
                        }`}
                      >
                        {item.title}
                      </span>
                    )} */}
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.href}
                      className="flex gap-2"
                    >
                      <span
                        className={`${
                          index === 1
                            ? "text-white font-mont text-2xl my-auto"
                            : "md:text-lg text-white inline-block"
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                    {item.label2 && <span className="text-white -ml-1">,</span>}
                    {item.label2 && item.href2 && (
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.href2}
                        className="flex gap-2 max-md:ml-0"
                      >
                        <span
                          className={`${
                            index === 1
                              ? "text-white font-aboreto text-2xl my-auto"
                              : "md:text-lg text-white"
                          }`}
                        >
                          {item.label2}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
      <div className="bg-white h-px w-full" />
      <Container className="py-4 flex max-md:flex-col items-center gap-3.5 justify-between">
        <div className="md:flex max-md:space-x-2 text-center flex-wrap items-center justify-center gap-2 text-white text-sm">
          {" "}
          <span className="text-white">
            © {new Date().getFullYear()} Ivara Resorts
          </span>
          <span className="md:block hidden">.</span>
          <span className="text-white">All Rights Reserved</span>
          {/* <span className="md:block hidden">|</span> */}
        </div>
        <p className="text-white! max-md:text-center text-sm">
          Luxury resort in Khajuraho · Destination wedding in Madhya Pradesh ·
          Resort near Panna Tiger Reserve · Powered by {""}
          <Link
            href="https://www.fielmente.com/"
            className="font-bold"
            target="_blank"
          >
            Fielmente
          </Link>
        </p>
      </Container>
    </footer>
  );
};

export default LandingFooter;
