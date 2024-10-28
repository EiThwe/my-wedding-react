import type { Metadata } from "next";

import { Montserrat, Parisienne } from "next/font/google";
import "./globals.css";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const parisienne = Parisienne({
  weight: ["400"], // Parisienne only has a regular weight
  subsets: ["latin"],
  variable: "--font-parisienne", // Optional CSS variable
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "D & T - Save the date",
  description:
    "Join us in celebrating a special occasion! Mark your calendars and save the date for a memorable event filled with love and joy.",
  openGraph: {
    images: ["https://i.postimg.cc/vmBx1SBR/photo-2024-09-20-16-14-12.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(parisienne);
  return (
    <html lang="en">
      <body
        className={`${parisienne.variable} ${montserrat.variable}  antialiased`}
      >
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
