import React from "react";

interface OfferTickerProps {
  text?: string;
}

export default function OfferTicker({
  text = "LIMITED TIME OFFER: UP TO 10% OFF – ENDS THIS SEPTEMBER!",
}: OfferTickerProps) {
  const items = Array(6).fill(text);

  return (
    <div className="bg-[#1C2618] text-[#F3ECE5] py-2.5 overflow-hidden border-y border-[#354330] uppercase text-xs sm:text-sm tracking-[0.2em] font-medium">
      <div className="marquee-wrapper flex whitespace-nowrap gap-12 animate-marquee">
        {items.map((item, idx) => (
          <span key={idx} className="flex items-center gap-6">
            <span>{item}</span>
            <span className="text-[#C4A482] text-xs">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
