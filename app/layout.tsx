import type { Metadata } from "next";
import { Anonymous_Pro, Inter } from "next/font/google";
import { Honk } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { FlipSwitch } from "./flip_switch"
import "./global.css"
import { ImageOptimizerCache } from "next/dist/server/image-optimizer";

const anon_pro = Anonymous_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap"
})

const honk = Honk({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap"
})

export const metadata: Metadata = {
  title: "XDCPeacock",
  description: "XDCPeacock home site",
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  let themeBgClassName = "bg-light dark:bg-dark"
  let themeTextClassName = "text-dark dark:text-light"
  return (
    <html lang="en">
      <body className={`${themeBgClassName} ${themeTextClassName} ${anon_pro.className}`}>
        
      <nav className="fixed top-0 left-0 right-0 z-50 shadow bg-light dark:bg-dark">
      <div id="nav" className="flex justify-between  border-b-2 border-solid border-black z-10 h-18 text-3xl sm:text-4xl">
        
        
        <div className={`${honk.className} p-2`}>
          <Link href="/">XDCP</Link>
        </div>
        
        <div className="flex justify-end-safe sm:gap-4 pr-2">
          <h2 className={` ${honk.className} mt-2`}>EN</h2>
          
          <div className="">
            <FlipSwitch></FlipSwitch>
          </div>
        
          <h2 className={`${honk.className} mt-2`}>
            <Link href="/buy">Connect</Link>
          </h2>
        </div>
      
      </div>
      </nav>
    
        {children}

        <footer className="p-3 h-15 border-solid border-t-2 border-black ">
          <p className={`${honk.className} text-xl`}>XDCP</p>
          <hr className={`text-black h-0.5 w-10 pt-1 pb-1`}  />
          <div className="text-sm">
            <p>XDCP is a memecoin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. The coin is for entertainment purposes only.</p>
            <hr className={`text-black h-0.5 w-7.5`}  />
            <p style={{fontWeight: 700}}>Sitemap</p>
            <div className="flex flex-row gap-3">
              <Link href="/">Home</Link>
              <Link href="/buy">Purchase</Link>
            </div>
            <hr className={`text-black h-0.5 w-5`}  />
            <Link href="/under_construction" style={{fontWeight: 700}}>FAQ</Link>
          </div>
      </footer>

      </body>
    </html>
  );
}
