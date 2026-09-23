"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "/#about", label: "About Us" },
  { href: "/#products", label: "Our Products" },
  { href: "/#find", label: "Where to Find Us" },
  { href: "/#delivery", label: "Late Night Delivery" },
  { href: "/#contact", label: "Contact Us" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ice text-white">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-6 px-5 md:px-8">
        <Link href="/" aria-label="Pure Ice home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium tracking-[0.14em] uppercase hover:text-white/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://wa.me/15573423423"
            aria-label="WhatsApp Pure Ice"
            className="inline-flex hover:opacity-80"
          >
            <WhatsAppIcon />
          </a>
          <a href="tel:+15573423423" aria-label="Call Pure Ice" className="inline-flex hover:opacity-80">
            <PhoneIcon />
          </a>
          <a
            href="mailto:info@PureIceBahamas.com"
            aria-label="Email Pure Ice"
            className="inline-flex hover:opacity-80"
          >
            <MailIcon />
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="flex w-5 flex-col gap-1.5">
              <span className="h-0.5 w-full bg-white" />
              <span className="h-0.5 w-full bg-white" />
              <span className="h-0.5 w-full bg-white" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-white/20 px-5 py-4 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium tracking-[0.12em] uppercase"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
      <circle cx="16" cy="16" r="14" fill="none" stroke="white" strokeWidth="1.6" />
      <path
        fill="white"
        d="M16.2 8.2a7.6 7.6 0 0 0-6.5 11.5l-.8 2.9 3-.8a7.6 7.6 0 1 0 4.3-13.6zm4.3 10.7c-.18.52-1.07.96-1.48 1.02-.37.05-.85.08-1.37-.09-.31-.1-.72-.23-1.24-.46-2.18-.95-3.6-3.15-3.71-3.3-.1-.15-.9-1.2-.9-2.29 0-1.09.57-1.62.78-1.84.2-.22.44-.28.59-.28h.42c.14 0 .32-.05.5.38.18.45.63 1.56.68 1.67.05.11.09.24.02.39-.07.15-.1.24-.21.37-.1.13-.22.29-.31.38-.1.1-.21.22-.09.42.12.2.52.86 1.12 1.39.77.69 1.42.9 1.62 1 .2.1.32.09.44-.05.12-.15.5-.58.63-.78.13-.2.27-.16.45-.1.18.07 1.16.55 1.36.65.2.1.33.15.38.23.05.08.05.48-.13 1z"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="14" stroke="white" strokeWidth="1.6" />
      <path
        fill="white"
        d="M12.2 10.2h1.7l.9 2.2-1.2.9a8.6 8.6 0 0 0 4.1 4.1l.9-1.2 2.2.9v1.7c0 .5-.4 1-.9 1.1a10.2 10.2 0 0 1-9.7-9.7c.1-.5.6-1 1.1-1z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="14" stroke="white" strokeWidth="1.6" />
      <rect x="9" y="12" width="14" height="9" rx="1.2" stroke="white" strokeWidth="1.5" />
      <path d="m9.5 12.6 6.5 4.6 6.5-4.6" stroke="white" strokeWidth="1.5" />
    </svg>
  );
}
