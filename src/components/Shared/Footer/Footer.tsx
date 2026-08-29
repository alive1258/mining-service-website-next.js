"use client";

import Link from "next/link";
import { MapPin, Mail, PhoneCall, ArrowRight, ArrowUp } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from "../Logo/Logo";
import { CONTACT_PHONE, OPEN_HOURS } from "../Navbar/menuItems";

/* ================= CONSTANTS ================= */
// TODO: replace with the client's real contact details.
const CONTACT_EMAIL = "info@minvip.com";
const OFFICE_ADDRESS = "North Star Avenue, Perth, Australia";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const SERVICE_LINKS = [
  { label: "Crushing & Screening", href: "/projects" },
  { label: "Tailings Management", href: "/projects" },
  { label: "Conveyor Systems", href: "/projects" },
  { label: "Site Engineering", href: "/projects" },
];

// TODO: swap in the client's real social profile URLs
const SOCIAL_LINKS = [
  { icon: FaFacebookF, label: "Facebook", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
];

/* ================= COMPONENT ================= */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 bg-ink-950 pb-10 pt-16 text-white lg:pt-20">
      <div className="container">
        {/* NEWSLETTER CTA */}
        <div className="mb-14 flex flex-col items-center justify-between gap-6 rounded-3xl bg-lime-400 p-8 sm:flex-row sm:p-10 lg:mb-16">
          <div className="text-center sm:text-left">
            <h3 className="font-display text-2xl font-semibold text-lime-950">
              Get the latest information
            </h3>
            <p className="mt-1.5 text-sm text-lime-950/70">
              Project updates and industry insights, straight to your inbox.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-sm items-center gap-2 rounded-full bg-lime-950 py-1.5 pl-5 pr-1.5 sm:w-auto"
          >
            <input
              type="email"
              required
              placeholder="Email address"
              className="w-full min-w-0 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime-400 text-lime-950 transition hover:bg-lime-300"
            >
              <ArrowRight size={16} />
            </button>
          </form>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-12 border-b border-white/10 pb-10 lg:grid-cols-12">
          {/* BRAND */}
          <div className="space-y-5 lg:col-span-4">
            <div>
              <Link href="/" className="inline-flex">
                <Logo size="lg" />
              </Link>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
                Global mining and industrial engineering services, built on
                safety, compliance and results.
              </p>
            </div>

            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={href === "#" ? (e) => e.preventDefault() : undefined}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:bg-lime-400 hover:text-lime-950"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* LINK COLUMNS */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-8 lg:grid-cols-4">
            <div className="space-y-5">
              <h3 className="font-display text-sm font-semibold text-white">
                Navigation
              </h3>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/55 transition-colors duration-300 hover:text-lime-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <h3 className="font-display text-sm font-semibold text-white">
                Services
              </h3>
              <ul className="space-y-3">
                {SERVICE_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/55 transition-colors duration-300 hover:text-lime-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 space-y-5 lg:col-span-2">
              <h3 className="font-display text-sm font-semibold text-white">
                Contact
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`tel:${CONTACT_PHONE.replace(/[^+\d]/g, "")}`}
                    className="flex items-start gap-2.5 text-sm text-white/55 transition-colors duration-300 hover:text-lime-400"
                  >
                    <PhoneCall size={15} className="mt-0.5 shrink-0" />
                    {CONTACT_PHONE}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="flex items-start gap-2.5 text-sm text-white/55 transition-colors duration-300 hover:text-lime-400"
                  >
                    <Mail size={15} className="mt-0.5 shrink-0" />
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/55">
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  {OFFICE_ADDRESS}
                </li>
                <li className="text-sm text-white/40">{OPEN_HOURS}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-center text-xs text-white/40 md:text-left">
            Copyright © {currentYear}{" "}
            <span className="text-lime-400">Minvip</span>. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link
              href="/terms-conditions"
              className="text-xs text-white/40 transition-colors hover:text-lime-400"
            >
              User Terms &amp; Conditions
            </Link>
            <Link
              href="/privacy-policy"
              className="text-xs text-white/40 transition-colors hover:text-lime-400"
            >
              Privacy Policy
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40 transition-all hover:text-lime-400"
          >
            Back to top
            <ArrowUp
              size={12}
              className="transition-transform group-hover:-translate-y-1"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
