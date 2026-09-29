"use client";

import { useWebContext } from "@/context-api/WebContext";

export default function MenuButton({ color = "white" }: { color?: string }) {
  const { isOpenNavBar, setIsOpenNavBar } = useWebContext();

  const colorClass = color === "primary" ? "bg-primary" : "bg-white";

  return (
    <button
      onClick={() => setIsOpenNavBar(!isOpenNavBar)}
      className="relative flex h-10 w-10 items-center justify-center z-50 cursor-pointer"
      aria-label="Menu"
      type="button"
    >
      {/* TOP LINE */}
      <span
        className={`absolute h-0.5 w-6 ${colorClass} transition-all duration-500 ease-in-out ${
          isOpenNavBar ? "rotate-45" : "-translate-y-2"
        }`}
      />
      {/* MIDDLE LINE */}
      <span
        className={`absolute h-0.5 w-6 ${colorClass} transition-all duration-500 ease-in-out ${
          isOpenNavBar ? "opacity-0" : "opacity-100"
        }`}
      />
      {/* BOTTOM LINE */}
      <span
        className={`absolute h-0.5 w-6 ${colorClass} transition-all duration-500 ease-in-out ${
          isOpenNavBar ? "-rotate-45" : "translate-y-2"
        }`}
      />
    </button>
  );
}
