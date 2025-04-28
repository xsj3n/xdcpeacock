import type { Metadata } from "next";
import { Anonymous_Pro, Inter } from "next/font/google";
import "./globals.css";

const anon_pro = Anonymous_Pro({
  weight: ["400", "700"],
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
      <body className={anon_pro.className}>
      <nav className="">
      <div className="flex justify-between">
      <p className="p-2">Icon</p>
      <div className="flex justify-end-safe h-10 gap-4 p-2">
          <p style={{fontWeight: 700}}>EN</p>
          <p style={{fontWeight: 700}}>Dark mode button</p>
          <p style={{fontWeight: 700}}>Buy button</p>
        </div>
      </div>
      </nav>
        {children}
      <footer>
        <p>Icon here</p>
        <p>XDCP is a memecoin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. The coin is for entertainment purposes only.</p>
        <p>Sitemap: insert sitemap portions below</p>
        <p>Insert row of social icons here</p>
        <p>FAQ? Copyright?</p>
      </footer>
      </body>
    </html>
  );
}
