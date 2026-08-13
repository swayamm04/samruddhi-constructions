import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home - Samruddhi Constructions",
  description: "Samruddhi Constructions is a leading interior and architecture design consultancy firm.",
  icons: {
    icon: "/image/01_intereal_thumbnail.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        {/* CSS Plugins */}
        <link rel="stylesheet" href="/css/plugin.css" />
        {/* Custom CSS */}
        <link rel="stylesheet" href="/css/style.css" />
        {/* Font Awesome 4.7.0 */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
