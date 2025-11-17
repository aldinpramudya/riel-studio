import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const lato = Lato({ subsets: ['latin'], weight: ["100", "300", "400", "700", "900"] });

export const metadata: Metadata = {
  title: "RIEL.studio | Kickstart Your Idea, Empower Your Journey | #StudentKickstart",
  description: "RIEL.studio is a creative web studio helping students and creators to kicktart their ideas to a digital journey. Specialized in modern website development, digital solutions, and special #StudentKickstart program.",
  keywords: [
    "RIEL.studio",
    "web development",
    "student kickstart",
    "#StudentKickstart",
    "digital studio",
    "startup website",
    "landing page"
  ],
  authors: [{name: "RIEL.studio"}],
  creator: "RIEL.studio",
  publisher: "RIEL.studio",
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
        <main className="md:px-30 md:py-5 py-10">
          {children}
        </main>
        {/* Main Content End */}
        <Footer />
      </body>
    </html>
  );
}
