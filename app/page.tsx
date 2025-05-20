import Image from "next/image";
import { Honk } from "next/font/google"; 
import HeroSection from "./components/hero";
import TokenChart from "./components/token_chart";
import Link from "next/link";
import { CSSProperties } from "react"; 

const honk = Honk({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap"
})

const aboutText = `
XDCP is a token in the XDC ecosystem. XDCP was built on the XDC network because it is
the leader in crypto speed and efficiency, has low fees, it is eco-friendly and has military
grade security. XDC has already been chosen as the ISO 20022 banking coin, and we want
to fly along for the ride. XDCP is a community driven memecoin that is dedicated to
meme’s and building the peacock gang community from the ground up, so let’s make this
peacock soar!
`

class TokenomicsText {
  header: string;
  text: string;
  constructor(header: string, text: string) {
    this.header = header;
    this.text = text;
  }
}


export default function Home() {
  let waveText: string[] = "Connect Wallet !".split("")
  return (
    <main>
    <HeroSection imageOn={true} buyOn={false}></HeroSection>
    <section className="w-full min-h-screen border-solid border-t-2 border-black flex flex-col gap-50">
  
      <div className="flex flex-col justify-center gap-1 p-4 mb-10 items-center">
        <h2 className={`p-2 text-center text-4xl ${honk.className}`}>About XDCPeacock</h2>
        <p className="text-center sm:w-1/2">{aboutText}</p>
      </div>

      <div className="flex flex-col justify-center text-center">
        <h2 className={`${honk.className} text-5xl`}>Presale (not) Live </h2>
        <h2 className={`${honk.className} text-5xl`}>Goal: $100,000</h2>
        
      </div>

      <div className="flex flex-col justify-center gap-4 p-4 mb-10 items-center">
        <h2 className={`p-2 text-center text-4xl ${honk.className}`}>Tokenomics</h2>
        <div className="sm:w-3/8 w-3/4">
          <TokenChart></TokenChart>
        </div>
      </div>


      <div className="flex flex-col justify-center items-center gap-5">
        <div>
          <Image src="/xdcpeacock_logo_alt.png" width={160} height={160} alt="Logo next to buy button"></Image>
        </div>
        <button className={`${honk.className} wave border-3 border-solid border-black p-2 rounded-lg bg-flirty-salmon sm:text-6xl text-4xl`}>
          <div className="wave">
            {waveText.map( (char, index) => (
              <span key={index} style={{"--i":index} as CSSProperties} className="p-1">{char}</span>
            ))}
          </div>
        </button>
      </div>

      <div>
        <div className="flex flex-col justify-center items-center gap-1 p-10">
          <p className={`text-center text-5xl ${honk.className}`}>Socials</p>
        </div>
        <div className="justify-center flex w-full">
          <div className="grid grid-cols-4 w-75 gap-4">
          
            <div className="col-span-2">
            <div className="grid grid-rows-2 gap-1 justify-items-center">
              <Link href="https://x.com/XDCPeacock">
                <Image src="/x.svg" width={36} height={36} alt="X social icon"></Image>
              </Link>
              <p className="text-center">Twitter</p>
            </div>
            </div>
        
            <div className="col-span-2">
            <div className="grid grid-rows-2 gap-1 justify-items-center">
              <Link href="https://www.instagram.com/xdcpeacock/">
                <Image src="/telegram.svg" width={36} height={36} alt="X social icon"></Image>
              </Link>
              <p className="text-center">Telegram</p>
            </div>
            </div>
        
            <div className="col-span-2">
            <div className="grid grid-rows-2 gap-1 justify-items-center">
              <Image src="/instagram.svg" width={36} height={36} alt="X social icon"></Image>
              <p className="text-center">Instagram</p>
            </div>
            </div>
        
            <div className="col-span-2">
            <div className="grid grid-rows-2 gap-1 justify-items-center ">
              <Image src="/reddit.svg" width={36} height={36} alt="X social icon"></Image>
              <p className="text-center">Reddit</p>
            </div>
            </div>

            <div className="col-span-4">
              <div className="grid grid-rows-2 gap-1 justify-items-center">
                <Image src="/discord.svg" width={36} height={36} alt="X social icon"></Image>
                <p className="text-center">Discord</p>
              </div>
            </div>
        
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}
