import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import colors from "./constants/colors";

const poppins = Poppins({
  weight: ["400", "600", "900"],
  display: "swap",
  subsets: ["latin"],
  variable: "--poppins-font",
});

export const metadata: Metadata = {
  title: "astro-project",
  description: "Website description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
        style={{
          background: colors.pageBackground,
          color: colors.text.white,
        }}
      >
        {children}
      </body>
    </html>
  );
}
