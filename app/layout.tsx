import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { useAuth } from "@clerk/clerk-react";
import { ConvexReactClient } from "convex/react";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";
import Header from "@/components/Header";
import SyncUserWithConvex from "@/components/SyncUserWithConvex";
import { ThemeProvider } from "@/components/theme-provider"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!)

export const metadata: Metadata = {
  title: "Moksy - Best place to buy tickets",
  description: "A place to buy tickets for events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ConvexClientProvider>
        <ClerkProvider>
          <Header />
          <SyncUserWithConvex />
            {/* <ConvexProviderWithClerk client={convex} useAuth={useAuth}> */}
              {children}
            {/* </ConvexProviderWithClerk> */}
        </ClerkProvider>
        </ConvexClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
