import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.scss";
import { ToastContainer } from "react-toastify";

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
  subsets: ["latin", "cyrillic"], // Кирилица үчүн
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Asanbekov",
  description: "Asanbekov's Portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable}`}
        style={{ margin: 0 }}
      >
        <Script
          src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"
          strategy="afterInteractive"
        />

        <div
          id="vanta-canvas"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: -1,
          }}
        />

        <Script id="vanta-init" strategy="afterInteractive">
          {`
            function startVanta() {
              if (window.VANTA && window.VANTA.NET) {
                window.VANTA.NET({
                  el: "#vanta-canvas",
                  mouseControls: true,
                  touchControls: true,
                  gyroControls: false,
                  minHeight: 200.0,
                  minWidth: 200.0,
                  scale: 1.0,
                  scaleMobile: 1.0,
                  color: 0x3f62ff,
                  backgroundColor: 0x23153c,
                  points: 20.0,
                  maxDistance: 20.0,
                  spacing: 15.0,
                  showDots: true
                });
              } else {
                setTimeout(startVanta, 200);
              }
            }
            startVanta();
          `}
        </Script>
        <ToastContainer />
        <main style={{ position: "relative", zIndex: 1 }}>{children}</main>
      </body>
    </html>
  );
}
