import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "./client-layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Toozyx Media — Premium Video Production in Cairo",
    template: "%s | Toozyx Media",
  },
  description:
    "Toozyx Media is a Cairo-based video production company specializing in commercial production, documentary films, motion graphics, AI video production, and post production.",
  metadataBase: new URL("https://media.toozyx.com"),
  alternates: {
    canonical: "https://media.toozyx.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Toozyx Media",
    title: "Toozyx Media — Premium Video Production in Cairo",
    description:
      "We craft compelling visual stories through commercial production, documentaries, motion graphics, AI-driven video, and post production.",
    url: "https://media.toozyx.com",
    images: [
      {
        url: "https://media.toozyx.com/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Toozyx Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Toozyx Media — Premium Video Production in Cairo",
    description:
      "We craft compelling visual stories through commercial production, documentaries, motion graphics, AI-driven video, and post production.",
    images: ["https://media.toozyx.com/assets/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/assets/icons/favicon.ico", sizes: "any" },
      { url: "/assets/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/icons/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/assets/icons/apple-touch-icon.png" }],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
