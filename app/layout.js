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
        className={`${inter.variable} ${spaceMono.variable} bg-[#010205] font-sans antialiased`}
      >
        <div className="relative min-h-screen bg-[rgba(1,2,5,0.95)]">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_15%,rgba(14,165,233,0.18),transparent_55%),radial-gradient(circle_at_90%_10%,rgba(56,189,248,0.16),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(2,132,199,0.12),transparent_60%)] opacity-80 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(135deg,rgba(12,13,23,0.6)_0%,rgba(1,2,5,0.9)_40%,rgba(1,1,3,0.95)_100%)]" />
          {children}
        </div>
      </body>
    </html>
  );
}
