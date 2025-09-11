import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Using Inter as a close substitute for TT Commons Pro
const ttCommonsPro = Inter({
  subsets: ["latin"],
  variable: "--font-tt-commons-pro",
  weight: ["400", "500", "600", "700"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "RiditStack - Procurement Centralization & Automation Platform",
  description: "Track, Control, and Save on Purchases Across Projects, Locations, or Business Units with RiditStack's comprehensive procurement software.",
  keywords: "procurement software, automation, purchasing, spend management, supplier management",
  openGraph: {
    title: "RiditStack - Procurement Centralization & Automation Platform",
    description: "Track, Control, and Save on Purchases Across Projects, Locations, or Business Units with RiditStack's comprehensive procurement software.",
    type: "website",
    locale: "en_US",
    url: "https://riditstack.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ttCommonsPro.variable} ${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
