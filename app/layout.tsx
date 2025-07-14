import type { Metadata } from "next";
import { Anonymous_Pro } from "next/font/google";
import { Jost } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { FlipSwitch } from "./flip_switch"
import "./global.css"
import { Nunito_Sans } from "next/font/google";
import { ACTION_HMR_REFRESH } from "next/dist/client/components/router-reducer/router-reducer-types";


const anon_pro = Nunito_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap"
})

const honk = Jost({
  weight: ["500"],
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
    <html lang="en" className="dark">
      <body className={`${themeBgClassName} ${themeTextClassName} ${anon_pro.className}`}>
        
      <nav className="fixed top-0 left-0 right-0 z-50 shadow bg-light dark:bg-dark">
      <div id="nav" className="flex justify-between  border-b-2 border-solid border-black z-10 h-18 text-3xl sm:text-4xl">
        
        
        <div className={`${honk.className} p-2 mt-2`} style={{ color: "#57A845" }}>
          <Link href="/">XDCP</Link>
        </div>
        
        <div className="flex justify-end-safe sm:gap-4 pr-2">
          <h2 className={`${honk.className} p-2 -mr-3 mt-2`} style={{ color: '#57A845' }}>EN</h2>
          
          <div className=" -mr-3">
            <FlipSwitch></FlipSwitch>
          </div>
        
          <h2 className={`${honk.className} p-2 mt-2`} style={{ color: '#57A845' }}>
            <Link href="/under_construction">Connect</Link>
          </h2>
        </div>
      
      </div>
      </nav>
    
        {children}

        <footer className="p-2 h-15 border-solid border-t-2 border-black">
          <p className={`${honk.className} text-xl`} style={{color: "#57A845"}}>XDCP</p>
          <hr className={`text-black h-0.5 w-10 pt-1 pb-1`}  />
          <div className="text-sm">
            <p className="mb-1">XDCP is a memecoin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. The coin is for entertainment purposes only. Coin will still launch if presale goal is not met.</p>
            <hr className={`dark:text-white text-black h-0.5 w-7.5 pb-1`}  />
            <p style={{fontWeight: 700}}>Sitemap</p>
            <div className="flex flex-row gap-1 pb-1">
              <Link className="underline" href="/">Home</Link>
              <div>|</div>
              <Link className="underline" href="/buy">Purchase</Link>
            </div>
            <hr className={`dark:text-white text-black h-0.5 w-5 pb-1`}  />
            <div className="flex flex-row gap-1">
              <Link href="/under_construction"  className="pb-2 underline">FAQ</Link>
              <div>|</div>
              <Link href="/whitepaper.pdf"  className="pb-2 underline">Whitepaper</Link>
            </div>
          </div>
      </footer>

      </body>
    </html>
  );
}
