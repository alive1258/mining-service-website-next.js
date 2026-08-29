"use client";

import Link from "next/link";
import { Phone, X } from "lucide-react";
import Logo from "../Logo/Logo";
import { CONTACT_PHONE, MENU_ITEMS, OPEN_HOURS } from "../Navbar/menuItems";

interface MobileMenuSheetProps {
  isOpen: boolean;
  onClose: () => void;
  openSubmenu: string | null;
  onToggleSubmenu: (href: string) => void;
}

const MobileMenuSheet = ({ isOpen, onClose }: MobileMenuSheetProps) => {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-x-0 top-0 bottom-16 z-95 bg-black/60 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* SHEET */}
      <div
        className={`fixed inset-x-0 bottom-[calc(2rem+env(safe-area-inset-bottom))] z-95 mx-auto max-h-[80vh] max-w-md rounded-t-3xl border border-white/10 bg-ink-900 shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-y-0" : "translate-y-[calc(100%+2rem)]"
        }`}
      >
        <div className="mx-auto mt-3 h-1.5 w-12 rounded-full bg-white/15" />

        <div className="flex items-center justify-between px-6 pb-4 pt-3">
          <Logo size="sm" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition hover:bg-white/5 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <div className="max-h-[calc(80vh-72px)] overflow-y-auto px-6 pb-24">
          <div className="space-y-4">
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="font-body block w-full text-left text-base font-medium text-white/85 transition hover:text-lime-400"
              >
                {item.display}
              </Link>
            ))}

            <a
              href={`tel:${CONTACT_PHONE.replace(/[^+\d]/g, "")}`}
              className="font-body flex items-center gap-2 text-base font-medium text-white/85 transition hover:text-lime-400"
            >
              <Phone size={16} className="text-lime-400" />
              {CONTACT_PHONE}
            </a>
            <p className="text-xs text-white/40">{OPEN_HOURS}</p>

            <Link
              href="/contact"
              onClick={onClose}
              className="mt-2 block w-full rounded-full bg-lime-400 py-2.5 text-center font-semibold text-lime-950 transition hover:bg-lime-300"
            >
              Get A Free Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenuSheet;
