import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CodingLoader from "@/components/CodingLoader";
import CustomCursor from "@/components/Cursor";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MD Baizid Tanvir — Full Stack Developer",
  description: "Hi, I’m MD Baizid Tanvir — Full Stack Developer specialized in Python, Django, React, and full-stack product development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <CustomCursor/>
        <CodingLoader/>
        {children}
      </body>
    </html>
  );
}
