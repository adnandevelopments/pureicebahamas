import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const highlights = [
  { title: "Top quality ice freezers", icon: "check" },
  { title: "Delivery and installation", icon: "truck" },
  { title: "Preventive maintenance and cleaning", icon: "spark" },
  { title: "All repairs, including parts and labour", icon: "gear" },
  { title: "Ice bags restocking upon order", icon: "bag" },
] as const;

const places = [
  {
    id: "delivery",
    title: "Late Night Delivery",
    icon: "bags",
    body: "Hosting a major evening event and want to avoid running out of ice? don't worry, we have you covered. With our first-of-a kind late night delivery ice service, running out of ice at night is now a thing of the past.",
  },
  {
    id: "hospitality",
    title: "Hospitality Sector",
    icon: "dining",
    body: "We have high-quality ice and reliability, which can help relieve some of the stress at your bar, restaurant or hotel. If you have high standards for your clients, we are the ideal ice partner for you.",
  },
  {
    id: "wholesale",
    title: "Wholesale",
    icon: "cart",
    body: "Need a significant amount of ice? We help you stay loaded with ice when you need it most. Don't leave clients without ice, and make sure it's always in your inventory.",
  },
  {
    id: "stores",
    title: "Individual Stores",
    icon: "store",
    body: "Find pure ice bags at your local store. If your local store does not stock ice, please let us know, and we will see if we can help.",
  },
] as const;

const bags = [
  { src: "/images/ice10.png", label: "10 Pounds", width: 900, height: 1260, className: "h-48 sm:h-56" },
  { src: "/images/ice20.png", label: "20 Pounds", width: 1236, height: 1732, className: "h-56 sm:h-72" },
  { src: "/images/ice40.png", label: "40 Pounds", width: 1624, height: 2053, className: "h-64 sm:h-80" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-[#8ed4f3] text-white">
          <Image
            src="/images/hero-ice.png"
            alt=""
            width={420}
            height={270}
            priority
            className="pointer-events-none absolute top-0 right-0 h-full w-[70%] max-w-none object-cover object-left sm:w-[58%]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#7ecff2] via-[#8ed4f3]/85 to-transparent" />
          <div className="relative mx-auto flex min-h-[420px] max-w-[1200px] flex-col justify-center px-6 py-16 md:min-h-[520px] md:px-10">
            <p className="text-3xl font-light tracking-[0.18em] sm:text-5xl">KEEPING YOU</p>
            <p className="mt-1 text-6xl font-light tracking-wide sm:text-8xl">COOL</p>
            <p className="mt-2 text-xl font-light tracking-[0.12em] sm:text-3xl">
              in the <span className="uppercase">Bahamas</span>
            </p>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 bg-ice text-white">
          <div className="mx-auto grid max-w-[1100px] items-center gap-10 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-20">
            <Image
              src="/images/iceBag.png"
              alt="Pure Ice freezer and bagged ice"
              width={3116}
              height={4184}
              className="mx-auto h-auto w-full max-w-md"
            />
            <div>
              <p className="text-sm font-medium">About Us</p>
              <h1 className="mt-1 text-2xl font-semibold tracking-wide sm:text-3xl">
                WE&apos;VE GOT HIGH STANDARDS
              </h1>
              <div className="mt-5 space-y-4 text-sm leading-7 text-white/95 sm:text-[15px]">
                <p>
                  Pure Ice has arrived in the Bahamas to serve clients with the purest and clearest ice.
                  With our local production facilities and our all-inclusive ice program, we are happy to
                  serve Nassau&apos;s ice needs.
                </p>
                <p>
                  We are passionate about quality; therefore, we collaborate with similarly passionate
                  restaurants and bars, retailers, hotels and independent businesses.
                </p>
                <p>
                  If you would like to learn more about Pure Ice, please contact us. Cheers to keeping you
                  cool in the Bahamas!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="scroll-mt-20 bg-ice pb-16 text-white">
          <div className="mx-auto max-w-[1100px] px-6">
            <p className="text-sm font-medium">Our Products</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-wide sm:text-3xl">
              HOW COOL DO YOU WANT TO BE?
            </h2>
            <div className="mt-10 grid grid-cols-3 items-end gap-4 sm:gap-8">
              {bags.map((bag) => (
                <figure key={bag.label} className="text-center">
                  <Image
                    src={bag.src}
                    alt={`${bag.label} bag of Pure Ice`}
                    width={bag.width}
                    height={bag.height}
                    className={`mx-auto w-auto object-contain drop-shadow-[0_18px_18px_rgba(0,70,110,0.35)] ${bag.className}`}
                  />
                  <figcaption className="mt-4 text-sm font-medium sm:text-lg">{bag.label}</figcaption>
                </figure>
              ))}
            </div>
            <div className="mx-auto mt-10 max-w-3xl space-y-4 text-center text-sm leading-7 text-white/95">
              <p>
                You no longer have to choose between purchasing a costly, maintenance-intensive piece of
                equipment or entering into a standard ice machine rental or leasing contract, both of which
                require you to pay for maintenance, repairs, and bagged ice if your machine breaks down.
              </p>
              <p>
                We provide a cooler answer. Our all-inclusive ice program includes top-notch ice freezers
                that will keep your ice cool, as well as restocking and equipment repairs.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-ice pb-20 text-white">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-xl font-semibold tracking-[0.08em] sm:text-2xl">
              OUR ALL-INCLUSIVE PROGRAM HIGHLIGHTS
            </h2>
            <ul className="mx-auto mt-8 max-w-md space-y-4 text-left text-sm sm:text-base">
              {highlights.map((item) => (
                <li key={item.title} className="flex items-center gap-4">
                  <HighlightIcon name={item.icon} />
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-10 inline-flex rounded-sm bg-white px-10 py-2.5 text-sm font-medium text-ice hover:bg-white/90"
            >
              Buy Now
            </a>
          </div>
        </section>

        <section id="find" className="scroll-mt-20 bg-white">
          <div className="mx-auto max-w-[1000px] px-6 py-16 text-center md:py-20">
            <p className="text-sm font-medium text-ice">Where to Find Us</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-wide text-ice sm:text-3xl">
              FIND OUR ICE IN MORE PLACES THAN EVER BEFORE
            </h2>
            <div className="mt-12 grid gap-12 sm:grid-cols-2">
              {places.map((place) => (
                <article key={place.id} id={place.id} className="scroll-mt-24 px-4">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center text-ice">
                    <PlaceIcon name={place.icon} />
                  </div>
                  <h3 className="text-sm font-semibold tracking-[0.14em] text-ice uppercase">
                    {place.title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-ice">{place.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 bg-ice py-16 text-white md:py-20">
          <div className="mx-auto max-w-[1100px] px-6 text-center">
            <p className="text-sm font-medium">Contact Us</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-wide sm:text-3xl">WE ARE COOL FOR YOU</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7">
              Let us help you stay cool. Whether it is an all-inclusive ice program or a delivery, we are
              here for you.
            </p>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function HighlightIcon({ name }: { name: (typeof highlights)[number]["icon"] }) {
  const common = "h-7 w-7 shrink-0";
  if (name === "check") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" />
        <path d="m8.5 12.2 2.3 2.3 4.7-5" />
      </svg>
    );
  }
  if (name === "truck") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M3 7.5h11v8H3zM14 10h4l3 3v2.5h-7z" />
        <circle cx="7" cy="17.2" r="1.4" />
        <circle cx="17.2" cy="17.2" r="1.4" />
      </svg>
    );
  }
  if (name === "spark") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M12 3.5 13.4 9 19 10.5 13.4 12 12 17.5 10.6 12 5 10.5 10.6 9 12 3.5z" />
        <path d="m17.5 15 .6 2 2 .6-2 .6-.6 2-.6-2-2-.6 2-.6.6-2z" />
      </svg>
    );
  }
  if (name === "gear") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3.8v2.1M12 18.1v2.1M4.8 7.2l1.8 1.1M17.4 15.7l1.8 1.1M4.8 16.8l1.8-1.1M17.4 8.3l1.8-1.1" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M7 8.5h10l-1 10H8L7 8.5z" />
      <path d="M9 8.5V7a3 3 0 0 1 6 0v1.5" />
    </svg>
  );
}

function PlaceIcon({ name }: { name: (typeof places)[number]["icon"] }) {
  const common = "h-14 w-14";
  if (name === "bags") {
    return (
      <svg viewBox="0 0 64 64" className={common} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M18 28h16l-2 22H20L18 28z" />
        <path d="M22 28v-3a4 4 0 0 1 8 0v3" />
        <path d="M30 24h16l-2 26H32" />
        <path d="M34 24v-2a3.5 3.5 0 0 1 7 0v2" />
      </svg>
    );
  }
  if (name === "dining") {
    return (
      <svg viewBox="0 0 64 64" className={common} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M24 16v12a4 4 0 0 0 8 0V16" />
        <path d="M28 28v20" />
        <path d="M24 16v6M28 16v6M32 16v6" />
        <circle cx="42" cy="28" r="7" />
        <path d="M42 35v13" />
      </svg>
    );
  }
  if (name === "cart") {
    return (
      <svg viewBox="0 0 64 64" className={common} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M14 20h28l4 16H20L14 20z" />
        <path d="M18 20 14 12H8" />
        <circle cx="24" cy="44" r="3" />
        <circle cx="40" cy="44" r="3" />
        <path d="M36 16v8M32 20h8" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 64 64" className={common} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 28 32 14l20 14v22H12V28z" />
      <path d="M26 50V34h12v16" />
      <path d="M20 28h24" />
    </svg>
  );
}
