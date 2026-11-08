import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "HSN Hacks 2027 | Code for What Comes Next",
  description:
    "HSN Hacks 2027 is a student hackathon themed around environmental protection on January 30, 2027. Teams of up to four and a $500+ prize pool.",
  keywords:
    "High School North, hackathon, programming, coding, competition, software development, app development, computer science",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
