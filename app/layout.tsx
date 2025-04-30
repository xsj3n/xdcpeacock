import type { Metadata } from "next";
import { Anonymous_Pro, Inter } from "next/font/google";
import { Honk } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { FlipSwitch } from "./flip_switch"
import "./global.css"

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

  return (
    <html lang="en">
      <body className={`bg-grey-800  ${anon_pro.className}`}>
        
      <nav className="">
      <div id="nav" className="flex justify-between border-b-2 border-solid border-black z-10 h-18 sticky">
        <h2 className={`text-3xl p-2 ${honk.className} mt-2`}>XDCP</h2>
        
        <div className="flex justify-end-safe gap-4 pr-2">
          <h2 className={`text-4xl ${honk.className} mt-2`}>EN</h2>
          <div className="">
            <FlipSwitch></FlipSwitch>
          </div>
          <h2 className={`text-4xl ${honk.className} mt-2`}>Buy</h2>
        </div>
      
      </div>
      </nav>
    
        {children}
        
      <footer>
        <p>Icon here</p>
        <p>XDCP is a memecoin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. The coin is for entertainment purposes only.</p>
        <p style={{fontWeight: 700}}>Sitemap</p>
        <p>Insert row of social icons here</p>
        <p style={{fontWeight: 700}}>FAQ</p>
      </footer>
    
      </body>
    </html>
  );
}
