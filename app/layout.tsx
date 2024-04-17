import Footer from "@/shared-components/Footer/Footer";
import StyledComponentsRegistry from "@/utils/lib/registry";
import { GlobalStyles } from "@/utils/styles/globalStyles";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], fallback: ["sans-serif"] });

export const metadata: Metadata = {
  title: "PokeDex - A Pokemon Collection",
  description: "Pokedex - A Pokemon Collection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
