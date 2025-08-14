import React, { useEffect, useRef } from "react";

/** Reusable right-side panel (stats + logo slider) */
export default function RightStatsPanel({
  heading = "Company’s Stats",
  stats = [],
  logos = [],
  intervalMs = 2500,
}) {
  const viewportRef = useRef(null);

  // Auto-scroll the logo rail; reset to start at the end
  useEffect(() => {
    if (!viewportRef.current || logos.length === 0) return;

    const el = viewportRef.current;
    const id = setInterval(() => {
      // advance roughly one “card” worth of width
      const step = Math.max(el.clientWidth / 3, 160); // responsive step
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, intervalMs);

    return () => clearInterval(id);
  }, [logos, intervalMs]);

  return (
    <aside className="rounded-2xl border border-blue-100 bg-gray-50/60 p-6 lg:p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-6">{heading}</h3>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-6">
        {stats.map((s, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center p-3 rounded-xl"
          >
            {/* icon can be a URL string or a React node */}
            {typeof s.icon === "string" ? (
              <img src={s.icon} alt={s.label} className="h-10 w-auto mb-2" />
            ) : (
              <div className="mb-2">{s.icon}</div>
            )}
            <p className="text-2xl font-bold leading-none">{s.value}</p>
            <p className="text-sm text-gray-600 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-200 my-6" />

      {/* Logo slider */}
      <div
        ref={viewportRef}
        className="overflow-hidden rounded-xl border border-gray-200 bg-white"
      >
        <div className="flex items-center gap-6 p-4 w-max">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex-none w-40 md:w-48 h-16 rounded-xl border bg-white grid place-items-center"
            >
              <img
                src={logo.src}
                alt={logo.alt || "logo"}
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
