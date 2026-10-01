import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HighlightIcon, PlaceIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";

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
  { src: "/images/ice10.png", label: "10 Pounds", width: 900, height: 1260, className: "h-28 sm:h-56" },
  { src: "/images/ice20.png", label: "20 Pounds", width: 1236, height: 1732, className: "h-32 sm:h-72" },
  { src: "/images/ice40.png", label: "40 Pounds", width: 1624, height: 2053, className: "h-36 sm:h-80" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-ice">
        <section className="relative text-white">
          <Image
            src="/images/bg1.png"
            alt=""
            width={1855}
            height={848}
            priority
            sizes="100vw"
            className="block h-[300px] w-full object-cover object-[center_35%] sm:h-[380px] md:h-auto md:object-contain"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent via-ice/30 to-ice sm:h-28 md:h-56" />
          <div className="absolute inset-0 flex items-center pb-8 sm:pb-12 md:pb-24">
            <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-10">
              <p className="hero-line text-2xl font-bold tracking-[0.12em] [text-shadow:0_2px_10px_rgba(0,70,120,0.35)] [animation-delay:80ms] sm:text-4xl sm:tracking-[0.16em] md:text-5xl md:tracking-[0.18em]">
                KEEPING YOU
              </p>
              <p className="hero-cool mt-1 text-5xl font-bold tracking-wide [text-shadow:0_2px_10px_rgba(0,70,120,0.35)] [animation-delay:220ms] sm:text-7xl md:text-8xl">
                COOL
              </p>
              <p className="hero-line mt-2 text-lg font-bold tracking-[0.08em] [text-shadow:0_2px_10px_rgba(0,70,120,0.35)] [animation-delay:520ms] sm:text-2xl sm:tracking-[0.12em] md:text-3xl">
                in the <span className="uppercase">Bahamas</span>
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="relative z-10 -mt-px scroll-mt-20 bg-ice text-white">
          <div className="mx-auto grid max-w-[1100px] items-center gap-8 px-6 pb-16 md:grid-cols-[0.9fr_1.1fr] md:pb-20">
            <Image
              src="/images/iceBag1.png"
              alt="Pure Ice freezer and bagged ice"
              width={3116}
              height={4184}
              className="load-rise relative z-10 mx-auto -mt-8 h-auto w-full max-w-[260px] [animation-delay:280ms] sm:-mt-[8vw] sm:max-w-[420px] md:-mt-[11vw] md:max-w-md"
            />
            <div className="load-rise [animation-delay:420ms]">
              <p className="text-base font-medium">About Us</p>
              <h1 className="mt-1 text-3xl font-semibold tracking-wide sm:text-4xl">
                WE&apos;VE GOT HIGH STANDARDS
              </h1>
              <div className="mt-5 space-y-4 text-[15px] leading-7 text-white sm:text-base">
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

        <section id="products" className="relative z-10 scroll-mt-20 bg-ice pt-6 pb-16 text-white md:pt-8">
          <div className="mx-auto max-w-[1100px] px-6">
            <Reveal>
              <p className="text-base font-medium">Our Products</p>
              <h2 className="mt-1 text-3xl font-semibold tracking-wide sm:text-4xl">
                HOW COOL DO YOU WANT TO BE?
              </h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-3 items-end gap-2 sm:gap-8">
              {bags.map((bag, index) => (
                <Reveal key={bag.label} delay={index * 90} className="min-w-0 text-center">
                <figure>
                  <Image
                    src={bag.src}
                    alt={`${bag.label} bag of Pure Ice`}
                    width={bag.width}
                    height={bag.height}
                    className={`mx-auto w-auto max-w-full object-contain drop-shadow-[0_18px_18px_rgba(0,70,110,0.35)] ${bag.className}`}
                  />
                  <figcaption className="mt-4 text-sm font-medium sm:text-lg">{bag.label}</figcaption>
                </figure>
                </Reveal>
              ))}
            </div>
            <Reveal className="mx-auto mt-10 max-w-3xl space-y-4 text-left text-[15px] leading-7 text-white sm:text-base">
              <p>
                You no longer have to choose between purchasing a costly, maintenance-intensive piece of
                equipment or entering into a standard ice machine rental or leasing contract, both of which
                require you to pay for maintenance, repairs, and bagged ice if your machine breaks down.
              </p>
              <p>
                We provide a cooler answer. Our all-inclusive ice program includes top-notch ice freezers
                that will keep your ice cool, as well as restocking and equipment repairs.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="relative z-10 -mt-px bg-ice pb-20 text-white">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <h2 className="text-left text-xl font-semibold tracking-[0.08em] sm:text-center sm:text-2xl">
                OUR ALL-INCLUSIVE PROGRAM HIGHLIGHTS
              </h2>
            </Reveal>
            <ul className="mx-auto mt-8 max-w-md space-y-4 text-left text-[15px] sm:text-base">
              {highlights.map((item, index) => (
                <li key={item.title}>
                  <Reveal delay={index * 70} className="flex items-center gap-4">
                    <HighlightIcon name={item.icon} />
                    <span>{item.title}</span>
                  </Reveal>
                </li>
              ))}
            </ul>
            <Reveal>
              <a
                href="#contact"
                className="mt-10 inline-flex rounded-sm bg-white px-10 py-2.5 text-sm font-medium text-ice hover:bg-white/90"
              >
                Buy Now
              </a>
            </Reveal>
          </div>
        </section>

        <section id="find" className="relative z-10 -mt-px scroll-mt-20 bg-white">
          <div className="mx-auto max-w-[1100px] px-6 py-16 md:py-20">
            <Reveal>
              <p className="text-base font-medium text-ice">Where to Find Us</p>
              <h2 className="mt-1 text-3xl font-semibold tracking-wide text-ice sm:text-4xl">
                FIND OUR ICE IN MORE PLACES THAN EVER BEFORE
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-12 sm:grid-cols-2">
              {places.map((place, index) => (
                <article key={place.id} id={place.id} className="scroll-mt-24">
                  <Reveal delay={index * 90} className="px-4 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center text-ice">
                    <PlaceIcon name={place.icon} />
                  </div>
                  <h3 className="text-base font-semibold tracking-[0.12em] text-ice uppercase sm:text-lg">
                    {place.title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-sm text-[15px] leading-7 text-ice">{place.body}</p>
                  </Reveal>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative z-10 -mt-px scroll-mt-20 bg-ice py-16 text-white md:py-20">
          <Reveal className="mx-auto max-w-[1100px] px-6 text-center">
            <p className="text-base font-medium">Contact Us</p>
            <h2 className="mt-1 text-3xl font-semibold tracking-wide sm:text-4xl">WE ARE COOL FOR YOU</h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 sm:text-base">
              Let us help you stay cool. Whether it is an all-inclusive ice program or a delivery, we are
              here for you.
            </p>
            <ContactForm />
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}

