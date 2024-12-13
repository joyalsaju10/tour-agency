import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// layout.js

export const metadata = {
  title: "Royal Odyssey | Explore Amazing Tours",
  description: "Discover stunning destinations and exciting tour packages to start your adventure today!",
  keywords: "travel, tours, adventure, holidays, vacation packages",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </head>
      <body>{children}</body>
    </html>
  );
}

