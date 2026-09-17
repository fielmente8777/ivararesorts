"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import LinkButton from "../buttons/LinkButton";
import MenuButton from "./MenuButton";
import NavMenu from "./NavMenu";
import { newNavData } from "./navData";

const NewNav = () => {
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
          transition-transform duration-700
          ease-[cubic-bezier(0.76,0,0.24,1)]
          will-change-transform
          ${visible ? "translate-y-0" : "-translate-y-full"}
          ${scrolled ? "bg-secondary backdrop-blur-xl" : "bg-transparent"}
        `}
      >
        <nav className="max_width flex items-center justify-between py-4 gap-6">
          <Link
            href="/website/"
            className="relative aspect-square w-full max-w-25 shrink-0"
          >
            <Image
              src={
                scrolled ? newNavData.logo.scrolled : newNavData.logo.default
              }
              alt="IVARA Logo"
              fill
              priority
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7 text-golden flex-1">
            {newNavData.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  text-sm
                  whitespace-nowrap
                  hover:text-primary
                  transition-colors
                  duration-300
                "
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center gap-1 text-white">
            <MenuButton />
            <span>Menu</span>
          </div>

          {/* Logo */}

          {/* Book Stay */}
          <div className="flex justify-end flex-1">
            <LinkButton
              href="#form"
              label="Book Stay"
              className={`
                w-fit rounded-lg
                max-md:hidden
                uppercase
                ${
                  scrolled
                    ? "bg-transparent text-white border border-white"
                    : "text-primary border border-primary"
                }
              `}
            />
          </div>
        </nav>

        {/* Mobile Navigation */}
        <NavMenu />
      </header>
    </>
  );
};

export default NewNav;
