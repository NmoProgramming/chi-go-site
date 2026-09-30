import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chi-Go | Rides and delivery",
  description:
    "Chi-Go is a smart fleet for city rides, order delivery, and hourly hire. Book in the app and follow the trip.",
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#070708",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" className={outfit.className}>
      <body>
        <a className="skip" href="#home">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
