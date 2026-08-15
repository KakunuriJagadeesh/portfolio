import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-display", subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Jagadeesh Kakunuri — Senior Software Engineer",
  description:
    "Senior backend engineer with 5+ years building scalable distributed systems, event-driven microservices, and enterprise platforms in Java, Scala, and Spring Boot.",
  openGraph: {
    title: "Jagadeesh Kakunuri — Senior Software Engineer",
    description: "Backend & distributed systems engineer. Java, Scala, Spring Boot, Kafka.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-bg text-text">{children}</body>
    </html>
  );
}
