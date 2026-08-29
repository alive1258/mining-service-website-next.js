"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Clock, Menu, Phone, Search } from "lucide-react";
import Logo from "../Logo/Logo";
import MessageWidget from "../MessageWidget/MessageWidget";
import MobileBottomNav from "../MobileBottomNav/MobileBottomNav";
import MobileMenuSheet from "../MobileMenuSheet/MobileMenuSheet";
import { useAppSelector } from "@/src/redux/hooks";
import { useChatSocket } from "@/src/hooks/useChatSocket";
import { useGetMyMessagesQuery } from "@/src/redux/api/chatApi";
import { CONTACT_PHONE, MENU_ITEMS, OPEN_HOURS } from "./menuItems";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState<string | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const pathname = usePathname();
  const user = useAppSelector((state) => state.auth.user);

  const { data: myMessagesRes, isLoading: isMessagesLoading } =
    useGetMyMessagesQuery(undefined, { skip: !user });
  const chat = useChatSocket({
    enabled: Boolean(user),
    role: "customer",
    isActive: isChatOpen,
    initialMessages: myMessagesRes?.data,
  });

  /* close the mobile drawer / chat panel whenever the route changes */
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
    setIsChatOpen(false);
  }

  /* stop body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 z-50 w-full">
        {/* TOP UTILITY BAR */}
        <div className="hidden bg-ink-950 text-white/60 lg:block">
          <div className="container flex h-9 items-center justify-between text-xs">
            <div className="flex items-center gap-6">
              <a
                href={`tel:${CONTACT_PHONE.replace(/[^+\d]/g, "")}`}
                className="flex items-center gap-2 transition hover:text-white"
              >
                <Phone size={13} className="text-lime-400" />
                {CONTACT_PHONE}
              </a>
              <span className="flex items-center gap-2">
                <Clock size={13} className="text-lime-400" />
                {OPEN_HOURS}
              </span>
            </div>
            <Link
              href="/contact"
              className="rounded-full bg-lime-400 px-3.5 py-1 text-xs font-semibold text-lime-950 transition hover:bg-lime-300"
            >
              Get A Free Quote
            </Link>
          </div>
        </div>

        {/* MAIN NAVBAR */}
        <div className="border-b md:block hidden border-white/5 bg-ink-950/95 backdrop-blur-sm">
          <div className="container flex h-16 items-center justify-between lg:h-[70px]">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Logo size="md" />
            </Link>

            {/* DESKTOP MENU */}
            <nav className="hidden items-center gap-9 lg:flex">
              {MENU_ITEMS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`font-body text-sm font-medium transition ${
                      isActive ? "text-white" : "text-white/55 hover:text-white"
                    }`}
                  >
                    {item.display}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              {user && (
                <Link
                  href="/my-bookings"
                  className={`font-body text-sm font-medium transition ${
                    pathname.startsWith("/my-bookings")
                      ? "text-white"
                      : "text-white/55 hover:text-white"
                  }`}
                >
                  My Account
                </Link>
              )}
              <button
                type="button"
                aria-label="Search"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-ink-800 text-white/70 transition hover:text-white"
              >
                <Search size={15} />
              </button>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-ink-800 text-white/70 transition hover:text-white lg:hidden"
            >
              <Menu size={17} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenuSheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        openSubmenu={null}
        onToggleSubmenu={() => {}}
      />

      {/* spacer for the fixed header above */}
      <div className="h-16 md:block hidden lg:h-[calc(70px+36px)]" />

      <MessageWidget
        isOpen={isChatOpen}
        onToggle={() => setIsChatOpen((prev) => !prev)}
        onClose={() => setIsChatOpen(false)}
        isLoggedIn={Boolean(user)}
        isHistoryLoading={isMessagesLoading}
        messages={chat.messages}
        connected={chat.connected}
        otherPartyTyping={chat.otherPartyTyping}
        unreadCount={chat.unreadCount}
        onSend={chat.sendMessage}
        onTyping={chat.notifyTyping}
      />
      <MobileBottomNav
        isChatOpen={isChatOpen}
        onToggleChat={() => setIsChatOpen((prev) => !prev)}
        isMenuOpen={isOpen}
        onToggleMenu={() => setIsOpen((prev) => !prev)}
        unreadChatCount={chat.unreadCount}
      />
    </>
  );
};

export default Navbar;
