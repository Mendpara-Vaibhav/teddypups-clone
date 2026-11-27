import type { Metadata, Viewport } from "next";
import { Fraunces, Figtree, Shantell_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { PawTrailCanvas } from "@/components/PawTrailCanvas";
import { SmoothScrollAndReveal } from "@/components/SmoothScrollAndReveal";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "WONK"],
  variable: "--font-fraunces",
  weight: "variable",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const shantell = Shantell_Sans({
  subsets: ["latin"],
  axes: ["INFM", "BNCE"],
  variable: "--font-shantell",
  weight: "variable",
});

export const viewport: Viewport = {
  themeColor: "#fffdf8",
};

export const metadata: Metadata = {
  title: {
    default: "TeddyPups U.A.E. — Premium teacup puppies in Dubai",
    template: "%s | TeddyPups U.A.E.",
  },
  description:
    "Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders worldwide.",
  applicationName: "TeddyPups U.A.E.",
  openGraph: {
    locale: "en_AE",
    type: "website",
    siteName: "TeddyPups U.A.E.",
    title: "TeddyPups U.A.E. — Premium teacup puppies in Dubai",
    description:
      "Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders worldwide.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TeddyPups U.A.E. — Premium teacup puppies in Dubai",
    description:
      "Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders worldwide.",
  },
  icons: {
    icon: "/images/icon.png",
    apple: "/images/apple-icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${figtree.variable} ${shantell.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-milk text-cocoa antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] btn btn-primary"
        >
          Skip to content
        </a>
        <PawTrailCanvas />
        <SmoothScrollAndReveal>
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <MobileStickyBar />
        </SmoothScrollAndReveal>
      </body>
    </html>
  );
}
