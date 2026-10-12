import Image from "next/image";
import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  WhatsappIcon,
} from "./Icons";
import { Reveal } from "./Reveal";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative z-10 -mt-px flex min-h-[420px] flex-col overflow-hidden text-white sm:min-h-[500px]">
      <Image
        src="/images/bg2.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-bottom"
      />
      <div className="pointer-events-none absolute inset-0 bg-[#065a86]/55" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ice via-ice/80 to-transparent" />
      <Reveal className="relative z-10 mx-auto grid w-full max-w-[1100px] gap-10 px-6 pt-12 pb-8 text-base sm:grid-cols-2 lg:grid-cols-4">
        <Logo className="h-16 w-auto" />

        <div>
          <p className="font-ui text-sm font-semibold tracking-[0.16em]">ABOUT</p>
          <ul className="mt-4 space-y-2">
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
          <p className="font-ui text-sm font-semibold tracking-[0.16em]">CONTACT US</p>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="tel:+15573423423"
                className="inline-flex items-center gap-2 hover:text-white/80"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-ice">
                  <PhoneIcon size={16} weight="fill" />
                </span>
                557 - 3ICE (423)
              </a>
            </li>
            <li>
              <a
                href="mailto:info@pureicebahamas.com"
                className="inline-flex items-center gap-2 hover:text-white/80"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-ice">
                  <MailIcon size={16} weight="fill" />
                </span>
                info@pureicebahamas.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-ui text-sm font-semibold tracking-[0.16em]">
            WE ARE SOCIAL
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="https://wa.me/15573423423"
              aria-label="WhatsApp"
              className="hover:text-white/80"
            >
              <WhatsappIcon size={26} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61557694084589"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex hover:text-white/80"
            >
              <FacebookIcon size={26} />
            </a>
            <a
              href="https://www.instagram.com/pureicebahamas?utm_source=ig_web_button_share_sheet&vrfl=ZDNlZDc0MzIxNw=="
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex hover:text-white/80"
            >
              <InstagramIcon size={26} />
            </a>
          </div>
        </div>
      </Reveal>

      <p className="relative z-10 mt-auto px-6 pb-5 text-center text-sm font-medium text-white">
        <Link href="/privacy" className="hover:underline">
          Privacy Policy
        </Link>
        <span>
          {" "}
          &nbsp;|&nbsp; Copyright © 2024 Pure Ice All Rights Reserved
        </span>
      </p>
    </footer>
  );
}
