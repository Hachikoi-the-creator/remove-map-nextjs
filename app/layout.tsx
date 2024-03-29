import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import NavBar from "@/components/NavBar";
import { ResultsProvider } from "@/context/ResultsContext";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* className="overflow-hidden" */}
      <body className={outfit.className+" overflow-hidden"}>
        <ResultsProvider>
          <NavBar />
          {children}
        </ResultsProvider>
      </body>
    </html>
  );
}
