import type { ReactNode } from "react";
import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ice text-white ">
      <div className="relative z-10 mx-auto grid max-w-[1100px] gap-10 px-6 pt-14 pb-10 sm:grid-cols-2 lg:grid-cols-4">
        <Logo className="h-14 w-auto" />

        <div>
          <p className="text-xs font-semibold tracking-[0.16em]">ABOUT</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/#about" className="hover:text-white/80">
                About
              </Link>
            </li>
            <li>
              <Link href="/#products" className="hover:text-white/80">
                Our Products
              </Link>
            </li>
            <li>
              <Link href="/#find" className="hover:text-white/80">
                Where to Find Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.16em]">CONTACT US</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href="tel:+15573423423"
                className="inline-flex items-center gap-2 hover:text-white/80"
              >
                <PhoneIcon />
                557 - 3ICE (423)
              </a>
            </li>
            <li>
              <a
                href="mailto:info@PureIceBahamas.com"
                className="inline-flex items-center gap-2 hover:text-white/80"
              >
                <MailIcon />
                info@PureIceBahamas.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.16em]">
            WE ARE SOCIAL
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="https://wa.me/15573423423"
              aria-label="WhatsApp"
              className="hover:text-white/80"
            >
              <SocialBubble>
                <path d="M12 6.2A5.7 5.7 0 0 0 7.2 14.8l-.7 2.4 2.5-.7A5.8 5.8 0 1 0 12 6.2zm3.2 8c-.14.38-.8.7-1.1.75-.28.04-.63.06-1.02-.06-.23-.07-.53-.17-.92-.34-1.63-.7-2.7-2.34-2.78-2.45-.08-.11-.67-.89-.67-1.7 0-.8.42-1.2.58-1.36.15-.17.33-.2.44-.2h.32c.1 0 .24-.04.37.28.14.34.47 1.16.5 1.24.04.08.07.18.02.29-.05.11-.08.18-.16.28-.08.1-.16.21-.23.28-.08.08-.16.16-.07.32.09.15.39.64.84 1.03.57.51 1.06.67 1.2.75.15.07.24.06.33-.04.09-.11.37-.43.47-.58.1-.15.2-.12.33-.07.14.05.86.4 1.01.48.15.07.25.11.28.17.04.06.04.35-.1.73z" />
              </SocialBubble>
            </a>
            <span aria-label="Facebook" className="inline-flex">
              <SocialBubble>
                <path d="M13.2 18v-5.2h1.7l.3-2h-2V9.4c0-.6.2-1 1-1h1.1V6.6c-.2 0-.8-.1-1.6-.1-1.6 0-2.6 1-2.6 2.7v1.6H9.4v2h1.7V18h2.1z" />
              </SocialBubble>
            </span>
            <span aria-label="Instagram" className="inline-flex">
              <SocialBubble>
                <path d="M12 8.2A3.8 3.8 0 1 0 12 15.8 3.8 3.8 0 0 0 12 8.2zm0 6.2a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8zM16.4 8a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0zM17.7 7.3a3.2 3.2 0 0 0-1.7-1.8 5.3 5.3 0 0 0-1.8-.3c-.7 0-1.3 0-1.9 0s-1.2 0-1.9.1a5.3 5.3 0 0 0-1.8.3 3.2 3.2 0 0 0-1.7 1.8 5.3 5.3 0 0 0-.3 1.8c0 .7 0 1.3 0 1.9s0 1.2.1 1.9a5.3 5.3 0 0 0 .3 1.8 3.2 3.2 0 0 0 1.8 1.7c.5.2 1.1.3 1.8.3.7 0 1.3 0 1.9 0s1.2 0 1.9-.1a5.3 5.3 0 0 0 1.8-.3 3.2 3.2 0 0 0 1.7-1.8c.2-.5.3-1.1.3-1.8 0-.7 0-1.3 0-1.9s0-1.2-.1-1.9a5.3 5.3 0 0 0-.3-1.8zm-1.1 6.5a2.6 2.6 0 0 1-1.5 1.5c-.4.15-.9.25-1.5.25-.6 0-1.2 0-1.6 0s-.8 0-1.6-.1c-.6 0-1.1-.1-1.5-.25a2.6 2.6 0 0 1-1.5-1.5c-.15-.4-.25-.9-.25-1.5 0-.6 0-1.2 0-1.6s0-.8.1-1.6c0-.6.1-1.1.25-1.5a2.6 2.6 0 0 1 1.5-1.5c.4-.15.9-.25 1.5-.25.6 0 1.2 0 1.6 0s.8 0 1.6.1c.6 0 1.1.1 1.5.25a2.6 2.6 0 0 1 1.5 1.5c.15.4.25.9.25 1.5 0 .6 0 1.2 0 1.6s0 .8-.1 1.6c0 .6-.1 1.1-.25 1.5z" />
              </SocialBubble>
            </span>
          </div>
        </div>
      </div>

      <div className="relative h-44 sm:h-52">
        <img
          src="/images/footer-ice.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ice via-ice/20 to-transparent" />
        <p className="absolute inset-x-0 bottom-5 text-center text-[11px] text-white/95 sm:text-xs">
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <span>
            {" "}
            &nbsp;|&nbsp; Copyright © 2024 Pure Ice All Rights Reserved
          </span>
        </p>
      </div>
    </footer>
  );
}

function SocialBubble({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="currentColor"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M7.2 3.6h2l1 2.6-1.5 1a11.4 11.4 0 0 0 5.5 5.5l1-1.5 2.6 1v2c0 .6-.4 1.1-1 1.2A12.8 12.8 0 0 1 6 4.6c.1-.6.6-1 1.2-1z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="m4.5 7 7.5 6L19.5 7" />
    </svg>
  );
}
