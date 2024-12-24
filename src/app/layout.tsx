import Header from "@/components/layout/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aditya Sharma",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray text-gray-600 antialiased`}>
          <Header />
          <main className="flex min-h-screen w-full flex-col">{children}</main>
          <Footer />
      </body>
    </html>
  );
}
