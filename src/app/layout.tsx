import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Asanbekov",
  description: "Asanbekov's Portfolio Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* three.js */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
          strategy="beforeInteractive"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable}`}
      >
        {/* vanta */}
        <Script
          src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"
          strategy="afterInteractive"
        />

        {/* background layer */}
        <div
          id="vanta-canvas"
          style={{
            position: "fixed",
            inset: 0,
            width: "100%",
            height: "100svh",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        {/* init */}
        <Script id="vanta-init" strategy="afterInteractive">
          {`
            (function startVanta() {
              if (window.VANTA && window.VANTA.NET) {
                window.VANTA.NET({
                  el: "#vanta-canvas",
                  mouseControls: true,
                  touchControls: true,
                  gyroControls: false,
                  minHeight: 200,
                  minWidth: 200,
                  scale: 1,
                  scaleMobile: 1,
                  color: 0x3f62ff,
                  backgroundColor: 0x23153c,
                  points: 20,
                  maxDistance: 20,
                  spacing: 15,
                  showDots: true
                });
              } else {
                setTimeout(startVanta, 200);
              }
            })();
          `}
        </Script>

        <ToastContainer />

        {/* content */}
        <main style={{ position: "relative", zIndex: 1 }}>{children}</main>
      </body>
    </html>
  );
}
