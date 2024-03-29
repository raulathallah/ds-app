import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NavigationBar from "@/components/NavigationBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    //absolute: "",
    default: "DS",
    template: "%s | Dance Space Studio",
  },
  description: "Dance Space Studio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={inter.className} style={{ backgroundColor: "white" }}>
        <header>
          <NavigationBar></NavigationBar>
        </header>
        <Providers>
          <div className="mt-4 px-72">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
