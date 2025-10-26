import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const lato = Lato({ subsets: ['latin'], weight: ["100", "300", "400", "700", "900"] });

export const metadata: Metadata = {
  title: "RIEL.studio",
  description: "Kickstart Your Idea, Empower Your Journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={lato.className}>
        <Navbar />
        {/* Main Content - Padding Y-axis Only */}
        <main className="py-40 grow">
          {children}
        </main>
        {/* Main Content End */}
        <Footer />
      </body>
    </html>
  );
}
