import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PhoneIcon, WhatsappIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Late Night Delivery | Pure Ice Bahamas",
  description:
    "Running out of ice at a late-night party or event? Call or WhatsApp Pure Ice and we will be there in no time.",
};

export default function LateNightDeliveryPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col bg-white text-ice">
        <section className="mx-auto w-full max-w-4xl flex-1 px-6 py-16 md:py-24">
          <p className="load-rise text-lg sm:text-xl">Late Night Delivery</p>
          <h1 className="load-rise mt-2 text-2xl font-semibold tracking-wide [animation-delay:140ms] sm:text-4xl">
            STAY COOL AT NIGHT
          </h1>
          <p className="load-rise mt-8 max-w-3xl text-[15px] leading-7 [animation-delay:260ms] sm:text-base">
            Running out of ice at a late-night party or event? Simply call us or send us a WhatsApp
            message indicating how much ice you require and your location, and we will be there in no
            time.
          </p>
          <div className="load-rise mt-14 flex flex-col items-center gap-6 [animation-delay:400ms] sm:flex-row sm:gap-16">
            <a href="tel:+15573423423" className="inline-flex items-center gap-3 text-base font-medium">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ice text-white">
                <PhoneIcon size={18} weight="fill" />
              </span>
              557 - 3ICE (423)
            </a>
            <a
              href="https://wa.me/15573423423"
              className="inline-flex items-center gap-3 text-base font-medium"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ice text-white">
                <WhatsappIcon size={18} />
              </span>
              557 - 3ICE (423)
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
