import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/src/lib/utils";
import { Layout } from "@/src/components/shared/layout";

const interExtrabold = localFont({
  src: "./fonts/Inter_18pt-ExtraBold.ttf",
  variable: "--font-inter-extrabold",
  weight: "800",
});
const interBold = localFont({
  src: "./fonts/Inter_18pt-Bold.ttf",
  variable: "--font-inter-bold",
  weight: "700",
});
const interSemibold = localFont({
  src: "./fonts/Inter_18pt-SemiBold.ttf",
  variable: "--font-inter-semibold",
  weight: "600",
});
const interMedium = localFont({
  src: "./fonts/Inter_18pt-Medium.ttf",
  variable: "--font-inter-medium",
  weight: "500",
});

const fontsStyles = [
  interExtrabold.className,
  interBold.className,
  interSemibold.className,
  interMedium.className,
];

export const metadata: Metadata = {
  title: "Мий блог",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(...fontsStyles, "antialiased")}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
