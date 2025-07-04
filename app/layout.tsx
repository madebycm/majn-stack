// @author madebycm (2025)
// Root layout configuration for Next.js app with metadata and providers
import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { Navigation9 } from "@/components/layout/header";

export const metadata: Metadata = {
  title: "majn-stack",
  description: "Built with majn-stack",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
  ],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <TRPCReactProvider>
          <Navigation9>
            {children}
          </Navigation9>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
