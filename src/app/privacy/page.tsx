import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Privacy Policy | Pure Ice Bahamas",
  description: "How Pure Ice Bahamas handles information submitted through this website.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-white text-ice">
        <article className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-sm font-medium">Pure Ice</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-wide">Privacy Policy</h1>
          <p className="mt-6 text-sm leading-7">
            Pure Ice serves clients across the Bahamas from www.pureicebahamas.com. This page explains how
            information sent through this website is used.
          </p>
          <h2 className="mt-8 text-lg font-semibold">Information you send us</h2>
          <p className="mt-3 text-sm leading-7">
            If you use the contact form, we receive the name, email address, phone number, and message you
            choose to provide so we can respond about ice products, delivery, or our all-inclusive program.
          </p>
          <h2 className="mt-8 text-lg font-semibold">How we use it</h2>
          <p className="mt-3 text-sm leading-7">
            We use that information to answer your request, arrange delivery or pickup, and keep a record of
            the conversation. We do not sell contact details.
          </p>
          <h2 className="mt-8 text-lg font-semibold">Contact</h2>
          <p className="mt-3 text-sm leading-7">
            Phone: <a href="tel:+15573423423">557 - 3ICE (423)</a>
            <br />
            Email: <a href="mailto:info@PureIceBahamas.com">info@PureIceBahamas.com</a>
          </p>
          <p className="mt-10">
            <Link href="/" className="text-sm font-medium underline">
              Back to home
            </Link>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
