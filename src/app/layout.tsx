import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Myanmar } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansMyanmar = Noto_Sans_Myanmar({
  variable: "--font-myanmar",
  subsets: ["myanmar"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Juice - Software Design ရဲ့ လျှို့ဝှက်ချက်",
  description: "Software တွေကို သက်ရှိလောက်ခံစားရစေတဲ့ Juice အကြောင်း မြန်မာဘာသာဖြင့်ဖတ်ရှုပါ။ Game design, UX design နှင့် emotional design အကြောင်း လေ့လာလိုက်ပါ။",
  openGraph: {
    title: "Juice - Software Design ရဲ့ လျှို့ဝှက်ချက်",
    description: "Software တွေကို သက်ရှိလောက်ခံစားရစေတဲ့ Juice အကြောင်း မြန်မာဘာသာဖြင့်ဖတ်ရှုပါ။",
    type: "article",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="my">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansMyanmar.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
