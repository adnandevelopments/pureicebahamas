"use client";

import Link from "next/link";
import { useState } from "react";
import { MailIcon, PhoneIcon, WhatsappIcon } from "./Icons";
import { Logo } from "./Logo";

const links = [
  { href: "/#about", label: "About Us" },
  { href: "/#products", label: "Our Products" },
  { href: "/#find", label: "Where to Find Us" },
  { href: "/delivery", label: "Late Night Delivery" },
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
              className="text-xs font-medium tracking-[0.14em] uppercase hover:text-white/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href="https://wa.me/15573423423"
            aria-label="WhatsApp Pure Ice"
            className="inline-flex hover:opacity-80"
          >
            <WhatsappIcon size={32} />
          </a>
          <a href="tel:+15573423423" aria-label="Call Pure Ice" className="inline-flex hover:opacity-80">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-ice">
              <PhoneIcon size={16} weight="fill" />
            </span>
          </a>
          <a
            href="mailto:info@PureIceBahamas.com"
            aria-label="Email Pure Ice"
            className="inline-flex hover:opacity-80"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-ice">
              <MailIcon size={16} weight="fill" />
            </span>
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
                  className="text-[15px] font-medium tracking-[0.12em] uppercase"
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

