import { Geist, Geist_Mono, Nunito_Sans, Nunito, Plaster } from "next/font/google";
import Script from "next/script";
import SmoothScroll from "./components/SmoothScroll.jsx";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
}); 
const plaster = Plaster({
  weight: "400",
  variable: "--font-plaster",
  subsets: ["latin"],
})

export const metadata = {
  title: "Zaw Ye Htoo | Web Developer",
  description:
    "Portfolio of Zaw Ye Htoo, a passionate web developer specializing in modern frontend and backend development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${nunitoSans.variable} ${nunito.variable} ${plaster.variable} antialiased`}
      >
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();`}
        </Script>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
