import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Cabin } from "next/font/google";
import "./globals.css";

const cabin = Cabin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ashenafiDL",
  description: "Frontend developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" color="dark">
      <body className={`text-text-100 ${cabin.className}`}>
        <ThemeProvider defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
