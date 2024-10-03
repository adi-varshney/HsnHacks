import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HSN Hacks",
  description:
    "HSN Hacks is a coding competition where students can create solutions to problems through technology, run by students from the High School North CS Club and Girls Who Code.",
  keywords:
    "High School North, hackathon, programming, coding, competition, software development, app development, computer science",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
