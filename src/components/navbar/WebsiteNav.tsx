"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import LinkButton from "../buttons/LinkButton";
import MenuButton from "./MenuButton";
import NavMenu from "./NavMenu";
import { contact } from "@/utils/constent";
import Link from "next/link";
import { WebsiteNavData } from "./navData";
import { usePathname } from "next/navigation";
import { useWebContext } from "@/context-api/WebContext";

const WebsiteNav = () => {
  const pathname = usePathname();
  const { isOpenNavBar } = useWebContext();

  // const paths = ["/", "/rooms/"];
  // const isTransparent = paths.includes(pathname);

  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const updateNavbar = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateNavbar);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`
        fixed top-0 left-0 z-50 w-full
        transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]
        will-change-transform
        ${visible ? "translate-y-0" : "-translate-y-full"}
        ${
          // isTransparent
          // ?
          scrolled ? "bg-secondary/70  backdrop-blur-sm" : "bg-transparent"
          // : "bg-background"
        }
      `}
      >
        {/* Top Navbar */}
        <nav className="max_width flex items-center justify-between gap-5 py-4">
          <Link href="/" className="relative block aspect-4/4 lg:w-25 w-15">
            <Image
              src={!scrolled ? "/logo.png" : "/logo.png"}
              alt="Logo"
              fill
              priority
              sizes="(max-width: 1024px) 60px, 100px"
              className="object-contain"
            />
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {WebsiteNavData.links.slice(1).map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`
                  xl:text-lg! text-xs! text-nowrap font-primary uppercase group font-medium
                  ${scrolled ? "text-primary" : "text-white"}
                   transition-colors duration-300
                   hover:text-primary/80
                   focus:text-primary/80
                 `}
                >
                  {link.label}
                  <span
                    className={`block h-0.5 bg-primary transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <LinkButton
            href={contact.WhatsappCta}
            label="Book Stay"
            target="_blank"
            rel="noopener noreferrer"
            className={`
            w-fit rounded-lg
            max-md:hidden
            uppercase font-primary
            xl:text-base! text-xs!  text-nowrap
            ${
              scrolled
                ? "bg-transparent text-primary border  font-medium border-primary/50"
                : " text-white border border-white/50"
            }
            `}
          />

          <div className="flex lg:hidden items-center gap-1 text-white">
            <MenuButton
              color={scrolled ? (isOpenNavBar ? "white" : "primary") : "white"}
            />
          </div>
        </nav>

        <NavMenu />
      </header>
      {/* {!isTransparent && <div className="h-[80px] w-full" />} */}
    </>
  );
};

export default WebsiteNav;
