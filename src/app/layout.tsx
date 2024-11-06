import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header"; // Import the Header component

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-customGray flex">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <main className="flex-1 p-4">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
