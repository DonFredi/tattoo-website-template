import Link from "next/link";
import { SITE, NAV_LINKS } from "@/lib/data";

const POLICY_LINKS = [
  { label: "Deposit & Cancellation", href: "#" },
  { label: "Aftercare Guide", href: "#" },
  { label: "Touch-Up Policy", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-void border-t border-gold/10 px-10 md:px-[60px] pt-20 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-14 pb-16 border-b border-gold/8 mb-10">
        {/* Brand */}
        <div>
          <div className="font-display text-2xl font-medium tracking-[0.2em] uppercase text-bone mb-5">
            Nova<span className="text-gold">.</span>Ink
          </div>
          <p className="font-sans text-[13px] text-ash leading-relaxed max-w-[240px]">
            {SITE.tagline} Work that lasts longer than trends.
          </p>
          <div className="flex gap-4 mt-8">
            {[
              { label: "IG", href: SITE.instagram },
              { label: "X", href: SITE.twitter },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-gold/25 flex items-center justify-center
                           font-sans text-[10px] text-ash
                           hover:border-gold hover:text-gold transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Navigate */}
        <div>
          <div className="font-sans text-2xs uppercase tracking-[0.3em] text-gold mb-6">Navigate</div>
          <ul className="space-y-3">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-sans text-[13px] text-ash hover:text-bone transition-colors duration-300 tracking-[0.05em]"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#booking"
                className="font-sans text-[13px] text-ash hover:text-bone transition-colors duration-300 tracking-[0.05em]"
              >
                Book a Session
              </Link>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <div className="font-sans text-2xs uppercase tracking-[0.3em] text-gold mb-6">Policies</div>
          <ul className="space-y-3">
            {POLICY_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="font-sans text-[13px] text-ash hover:text-bone transition-colors duration-300 tracking-[0.05em]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Location */}
        <div>
          <div className="font-sans text-2xs uppercase tracking-[0.3em] text-gold mb-6">Location</div>
          <ul className="space-y-3">
            {[SITE.location, SITE.email].map((item) => (
              <li key={item} className="font-sans text-[13px] text-ash tracking-[0.05em] leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <p className="font-sans text-[11px] text-ash/40 tracking-[0.1em]">
          © {new Date().getFullYear()} Nova Ink Studio · All rights reserved
        </p>
        <p className="font-sans text-[11px] text-ash/40 tracking-[0.1em]">Developed by ScriptTagg</p>
      </div>
    </footer>
  );
}
