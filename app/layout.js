import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./_components/ThemeProvider";

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
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${inter.variable} ${spaceMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
