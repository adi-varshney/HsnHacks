import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

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
      <body
        className={`${inter.variable} ${spaceMono.variable} bg-transparent font-sans antialiased`}
      >
        <div className="min-h-screen bg-[#030712]/80">{children}</div>
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(0,204,255,0.12),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(168,85,247,0.1),_transparent_45%)] blur-3xl" />
      </body>
    </html>
  );
}
