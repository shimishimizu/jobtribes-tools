import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/GoogleAnalytics";

const NotoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | JobTribes Tools",
    default: "HOME | JobTribes Tools",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <Analytics />
      </head>
      <body className={NotoSansJP.className}>{children}</body>
    </html>
  );
}
