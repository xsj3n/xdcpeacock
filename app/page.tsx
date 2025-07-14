import Image from "next/image";
import { Jost } from "next/font/google";
import HeroSection from "./components/hero";
import TokenChart from "./components/token_chart";
import Link from "next/link";
import { CSSProperties } from "react";
import PresaleCountdown from "./components/presale";

const honk = Jost({
  weight: ["500"],
  subsets: ["latin"],
  display: "swap"
})


const _honk = Jost({
  weight: ["600"],
  subsets: ["latin"],
  display: "swap"
})

const aboutText = `
XDCP is a token in the XDC ecosystem. XDCP was built on the XDC network because the XDC
network is a leader in crypto speed and efficiency, low fees, eco-friendly and has military grade
security. XDC has already been chosen as the ISOSS22 banking coin and we want to fly along for
the ride. XDCP is a community driven meme coin that is dedicated to meme’s and building the
peacock’s gang community from the ground up so let’s make this peacock soar.
`

export default function Home() {
  //let waveText: string[] = "Connect Wallet !".split("")
  return (
    <main>
    <HeroSection imageOn={true} buyOn={false} fontClassName={honk.className}></HeroSection>
    <section className="w-full min-h-screen border-solid border-t-2 border-black flex flex-col gap-25">
  
      <div className="flex flex-col justify-center gap-1 p-4 items-center">
        <h2 className={`p-2 text-center text-4xl ${honk.className}`} style={{ color: '#57A845' }}>About XDCPeacock</h2>
        <p className="text-center sm:text-[1.25rem] sm:w-3/4">{aboutText}</p>
      </div>

      <PresaleCountdown></PresaleCountdown>
      

      <div className="flex flex-col justify-center gap-4 p-4 items-center">
        <h2 className={`p-2 text-center text-4xl ${honk.className}`} style={{ color: '#57A845' }}>Tokenomics</h2>
        <div className="sm:w-3/8 w-3/4">
          <TokenChart className={honk.className}></TokenChart>
        </div>
      </div>


      <div className="flex flex-col justify-center items-center gap-5">
        <div>
          <Image src="/xdcpeacock_logo_alt.png" width={160} height={160} alt="Logo next to buy button"></Image>
        </div>
        <Link href="/buy">
          <button className={`${_honk.className}  wave border-3 font-bold border-solid border-black rounded-lg  sm:text-5xl text-4xl`} style={{ color: '#57A845', backgroundColor: "#9966FF" , WebkitTextStroke: "1px black"}}>
            <div className="p-1">Connect Wallet!</div>
          </button>
        </Link>
      </div>

      <div>
        <div className="flex flex-col justify-center items-center gap-1 p-10">
          <p className={`text-center text-5xl ${honk.className}`} style={{ color: '#57A845' }}>Socials</p>
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
              <Link href="https://www.instagram.com/xdcpeacock/">
                <Image src="/instagram.svg" width={36} height={36} alt="X social icon"></Image>
              </Link>
              <p className="text-center">Instagram</p>
            </div>
            </div>
        
            <div className="col-span-2">
            <div className="grid grid-rows-2 gap-1 justify-items-center ">
              <Link href="https://www.instagram.com/xdcpeacock/">
                <Image src="/reddit.svg" width={36} height={36} alt="X social icon"></Image>
              </Link> 
              <p className="text-center">Reddit</p>
            </div>
            </div>

            <div className="col-span-4">
              <div className="grid grid-rows-2 gap-1 justify-items-center">
                <Link href="https://www.instagram.com/xdcpeacock/">
                  <Image src="/discord.svg" width={36} height={36} alt="X social icon"></Image>
                </Link>
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
