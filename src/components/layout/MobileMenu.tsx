import { useState, useEffect } from "react";
import * as en from "../../data/site";
import * as es from "../../data/site-es";

export default function MobileMenu({ lang = "en" }: { lang?: "en" | "es" }) {
  const [open, setOpen] = useState(false);
  const data = lang === "es" ? es : en;
  const switchUrl = lang === "en" ? "/es" : "/";
  const switchLabel = lang === "en" ? "Español" : "English";
  const ctaLabel = lang === "en" ? "Get Free Quote" : "Cotización Gratis";

  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);

  return (
    <>
      <button onClick={() => setOpen(!open)} className="lg:hidden flex items-center justify-center w-10 h-10" style={{ position: "relative", zIndex: 70 }} aria-label="Menu">
        <div className="flex flex-col gap-1.5">
          <span className={`block w-6 h-[1.5px] transition-all duration-300 ${open ? "rotate-45 translate-y-[7px] bg-[#0a1628]" : "bg-[#0a1628]"}`} />
          <span className={`block w-6 h-[1.5px] transition-all duration-300 ${open ? "opacity-0" : "bg-[#0a1628]"}`} />
          <span className={`block w-6 h-[1.5px] transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px] bg-[#0a1628]" : "bg-[#0a1628]"}`} />
        </div>
      </button>
      {open && (
        <div className="lg:hidden" style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, width: "100vw", height: "100vh", backgroundColor: "#ffffff", zIndex: 60, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1.5rem" }}>
          <a
            href={lang === "en" ? "/" : "/es"}
            onClick={() => setOpen(false)}
            style={{ position: "absolute", top: "1rem", left: "1rem" }}
          >
            <img src="/logo.png" alt="SmilePort" style={{ height: "48px" }} />
          </a>
          {data.navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-2xl font-semibold text-[#0a1628] hover:text-[#2bb5b2] transition-colors">{item.label}</a>
          ))}
          <div className="flex items-center gap-4 mt-4">
            <a href={switchUrl} className="flex items-center gap-2 text-sm font-semibold text-[#0a1628]/50 border border-[#0a1628]/15 rounded-full px-5 py-2.5 hover:text-[#0e4d6e] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582"/></svg>
              {switchLabel}
            </a>
            <button onClick={() => { setOpen(false); setTimeout(() => window.dispatchEvent(new CustomEvent("open-booking")), 150); }} className="bg-[#2bb5b2] text-white font-semibold rounded-full px-6 py-2.5 text-sm hover:bg-[#1f8e8c] transition-colors">
              {ctaLabel}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
