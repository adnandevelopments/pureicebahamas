"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MailIcon, PhoneIcon, WhatsappIcon } from "./Icons";
import { Logo } from "./Logo";

const links = [
  { href: "/#about", label: "About Us", id: "about" },
  { href: "/#products", label: "Our Products", id: "products" },
  { href: "/#find", label: "Where to Find Us", id: "find" },
  { href: "/delivery", label: "Late Night Delivery", id: "delivery" },
  { href: "/#contact", label: "Contact Us", id: "contact" },
];

const sectionIds = ["about", "products", "find", "contact"];

function ContactIcons({ className }: { className?: string }) {
  return (
    <div className={`items-center ${className ?? ""}`}>
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
        href="mailto:info@pureicebahamas.com"
        aria-label="Email Pure Ice"
        className="inline-flex hover:opacity-80"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-ice">
          <MailIcon size={16} weight="fill" />
        </span>
      </a>
    </div>
  );
}

function menuClass(active: boolean, mobile = false) {
  return [
    "relative inline-block w-fit uppercase",
    mobile ? "text-[15px] font-medium tracking-[0.12em]" : "text-xs font-medium tracking-[0.14em]",
    "after:absolute after:right-0 after:-bottom-1 after:left-0 after:h-0.5 after:origin-left after:bg-white after:transition-transform after:duration-200",
    active ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100",
  ].join(" ");
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState("");

  useEffect(() => {
    if (pathname !== "/") return;

    const nodes = sectionIds
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    const hash = window.location.hash.replace("#", "");
    if (sectionIds.includes(hash)) setSection(hash);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.15, 0.4, 0.7] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [pathname]);

  function isActive(id: string) {
    if (id === "delivery") return pathname === "/delivery";
    return pathname === "/" && section === id;
  }

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
              aria-current={isActive(link.id) ? "page" : undefined}
              className={menuClass(isActive(link.id))}
              onClick={() => {
                if (link.id !== "delivery") setSection(link.id);
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <ContactIcons className="hidden gap-3 lg:flex" />
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
                  aria-current={isActive(link.id) ? "page" : undefined}
                  className={menuClass(isActive(link.id), true)}
                  onClick={() => {
                    setOpen(false);
                    if (link.id !== "delivery") setSection(link.id);
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ContactIcons className="mt-5 flex gap-4 border-t border-white/20 pt-4" />
        </nav>
      ) : null}
    </header>
  );
}

