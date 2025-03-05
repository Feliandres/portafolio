import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "400", "700", "900"] });

export const metadata: Metadata = {
  title: "Mi Portafolio",
  description: "Portafolio creado con Next.js y Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
