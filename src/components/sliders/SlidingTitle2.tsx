"use client";
import "./sliding.title.scss";

export default function SlidingTitle2({
  items,
  className,
  useIcon = false,
}: {
  items: string[];
  className?: string;
  useIcon?: boolean;
}) {
  const titles = [...items, ...items];

  return (
    <div
      className={`relative overflow-hidden text-secondary max_screen_width ${className || ""}`}
    >
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {titles.map((t, i) => (
            <span key={i} className="marquee-item font-primary text-xl">
              <span dangerouslySetInnerHTML={{ __html: t }}></span>
              {useIcon ? (
                <ICon />
              ) : (
                <span className="separator w-2 bg-primary aspect-square rounded-full"></span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export const ICon = () => (
  <svg
    width={12}
    height={12}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.544 11.077L-4.60818e-06 5.544L5.544 3.57628e-07L11.077 5.544L5.544 11.077ZM5.544 10.076L10.076 5.544L5.544 1.001L1.012 5.544L5.544 10.076ZM5.544 7.843L3.234 5.544L5.544 3.234L7.854 5.544L5.544 7.843Z"
      fill="#CC9B49"
    />
  </svg>
);
