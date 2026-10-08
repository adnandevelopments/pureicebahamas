import type { Metadata } from "next";
import { Arimo, Montserrat } from "next/font/google";
import "./globals.css";

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Pure Ice Bahamas",
  description:
    "Pure Ice has arrived in the Bahamas with the purest and clearest ice, an all-inclusive ice program, and late-night delivery.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${arimo.variable} ${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <noscript>
          <style>{`.scroll-rise{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
