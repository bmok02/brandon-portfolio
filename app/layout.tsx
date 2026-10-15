import type { Metadata, Viewport } from "next";
import { Inter, Nanum_Pen_Script } from "next/font/google";
import { Defs } from "@/components/objects";
import { Scenery } from "@/components/Scenery";
import "./globals.css";

const sans = Inter({
  variable: "--font-sans-face",
  subsets: ["latin"],
});


const hand = Nanum_Pen_Script({
  variable: "--font-hand-face",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Brandon Mok — AI product, data, people",
  description:
    "Brandon Mok — AI Product Manager Intern at GovTech, NUS Business Analytics. Projects, internships and community work.",
  openGraph: {
    title: "Brandon Mok — AI product, data, people",
    description: "Projects, internships and community work.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f6f4" },
    { media: "(prefers-color-scheme: dark)", color: "#141414" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${hand.variable}`}>
      <body>
        <Defs />
        <Scenery />
        {children}
      </body>
    </html>
  );
}
