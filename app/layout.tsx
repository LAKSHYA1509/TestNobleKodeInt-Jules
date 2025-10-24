"use client"
import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/floatingwhatsapp"
import { useEffect, useState } from "react"
const inter = Inter({ subsets: ["latin"] })
import {Navbar} from "@/components/layout/Navbar"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [isMobile, setIsMobile] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {

    function handleMobileMenu() {
      setIsMobile(window.innerWidth <= 1024)
    }
    handleMobileMenu()

    window.addEventListener("resize", handleMobileMenu)

    return () => {
      window.removeEventListener("resize", handleMobileMenu);
    };
  }, [])


  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1756880604866874');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript><img height="1" width="1" style={{display:"none"}}
        src="https://www.facebook.com/tr?id=1756880604866874&ev=PageView&noscript=1"
        /></noscript>
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="ZUfZieiQVg9Q+5rqb8IvhA" async></script>
      </head>
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

          <div>
          <Navbar/>
            <main className="flex-grow">{children}</main>
            <Footer />
            <WhatsAppButton />
        
          </div>

        </ThemeProvider>    </body>
    </html>
  )
}
