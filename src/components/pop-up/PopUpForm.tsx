"use client";

import { useWebContext } from "@/context-api/WebContext";
import { MdClose } from "react-icons/md";
import Form1 from "../forms/Form1";

const PopUpForm = () => {
  const { isOpenFormPopUp, setIsOpenFormPopUp } = useWebContext();

  return (
    <section
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300 ${
        isOpenFormPopUp
          ? "visible opacity-100 pointer-events-auto"
          : "invisible opacity-0 pointer-events-none"
      }`}
      onClick={() => setIsOpenFormPopUp(false)}
    >
      <div
        className="max-w-lg w-full p-6 sm:p-8 bg-[#FAF6F2] relative rounded-2xl shadow-2xl border border-[#E8DFC0]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpenFormPopUp(false)}
          className="absolute top-4 right-4 text-2xl text-[#4A5A3E] hover:text-[#CA9D4C] transition-colors cursor-pointer"
          aria-label="Close form"
          type="button"
        >
          <MdClose />
        </button>

        {/* Form Container */}
        <div className="max-md:max-h-[70vh] max-md:overflow-y-auto mt-6">
          <Form1
            gridView
            buttonText="Book Now"
            buttonBgClass="bg-[#4A5A3E] hover:bg-[#4A5A3E]/90 text-white"
            showCalendarIcon={true}
          />
        </div>
      </div>
    </section>
  );
};

export default PopUpForm;
