import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { AnalyticsInit } from "@/components/analytics-init";

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
  metadataBase: new URL("https://riditstack.com"),
  title: "RiditStack — Enterprise AI Company | ProcLeo AI Procurement",
  description:
    "RiditStack is an enterprise AI company building intelligent software for procurement, automation, cloud, and data. Meet ProcLeo, our flagship AI procurement product.",
  keywords:
    "enterprise ai, ai procurement, procleo, procurement software, digital transformation, ai consulting, automation, spend management",
  openGraph: {
    title: "RiditStack — Enterprise AI Company | ProcLeo AI Procurement",
    description:
      "Intelligent enterprise software from RiditStack — spanning AI procurement, automation, cloud, and data. Powered by ProcLeo, our flagship AI procurement product.",
    type: "website",
    locale: "en_US",
    url: "https://riditstack.com",
    siteName: "RiditStack",
  },
  twitter: {
    card: "summary_large_image",
    title: "RiditStack — Enterprise AI Company | ProcLeo AI Procurement",
    description:
      "Intelligent enterprise software from RiditStack, powered by ProcLeo — our flagship AI procurement product.",
  },
  alternates: { canonical: "https://riditstack.com" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${ttCommonsPro.variable} ${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
          <AnalyticsInit />
          <Toaster position="top-center" richColors closeButton theme="dark" />
        </ThemeProvider>
      </body>
    </html>
  );
}
