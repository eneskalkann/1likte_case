import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { SearchProvider } from "@/utils/searchContext";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-white`}>
        <SearchProvider>
          <Header />
          {children}
          <Footer />
        </SearchProvider>
      </body>
    </html>
  );
}
