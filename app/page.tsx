import Image from "next/image";
import { Jost } from "next/font/google";
import HeroSection from "./components/hero";
import TokenChart from "./components/token_chart";
import Link from "next/link";
import { CSSProperties } from "react";
import PresaleCountdown from "./components/presale";
import SocialsSection from "./components/socials";
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
        <p className="text-center sm:text-[1.25rem] sm:w- 3/4">{aboutText}</p>
      </div>

      <PresaleCountdown></PresaleCountdown>
      

      <div className="flex flex-col justify-center gap-4 p-4 items-center">
        <h2 className={`p-2 text-center text-4xl ${honk.className}`} style={{ color: '#57A845' }}>Tokenomics</h2>
        <div className="sm:w-3/8 w-3/4">
          <TokenChart className={honk.className}></TokenChart>
        </div>
      </div>


      <div className="flex flex-col justify-center items-center gap-5">
        <Link href="/under_construction">
          <button className={`${_honk.className}  wave border-3 font-bold border-solid border-black rounded-lg  sm:text-5xl text-4xl`} style={{ color: '#57A845', backgroundColor: "#9966FF" , WebkitTextStroke: "1px black"}}>
            <div className="p-1">Connect Wallet!</div>
          </button>
        </Link>
      </div>

    
      <div className="flex justify-center">
      <Image alt="supported wallets" width={600} height={600} src="/xdcp_moon.png"></Image>
      </div>

    


      <SocialsSection></SocialsSection>
        
      <div className="flex justify-center">
      <Image alt="supported wallets" width={600} height={400} src="/supported_wallets.png"></Image>
      </div>
        
    </section>
    </main>
  );
}
      // <div className="flex flex-col justify-center gap-2 items-center">
      //   <h2 className={`text-4xl ${_honk.className}`} style={{ color: '#57A845' }}>Software Wallets</h2>
      //     <div className="w-3/5 text-center">
      //       <h3 className="text-center mb-1 text-lg">XDC Wallet (by XinFin)</h3>
      //       <ul>
      //         <li>- ✅ Official wallet for the XDC Network </li>
      //         <li>- Web-based, no download needed</li>
      //         <li>- Best for easy access & network-native functions</li>  
      //       </ul>
      //     </div>
      //     <div className="w-3/5 text-center">
      //       <h3 className="text-center mb-1 text-lg">D’Cent Wallet</h3>
      //       <ul>
      //         <li>- ✅ Mobile app with strong XDC support</li>
      //         <li>- Also has a hardware version</li>
      //       </ul>
      //     </div>
      //     <div className="w-3/5 text-center">
      //       <h3 className="text-center mb-1 text-lg">Bitrue Wallet (via app)</h3>
      //       <ul>
      //         <li>- ✅ Bitrue exchange allows storing & trading XDC</li>
      //       </ul>
      //     </div>
      //     <div className="w-3/5 text-center">
      //       <h3 className="text-center mb-1 text-lg">MetaMask (requires setup)</h3>
      //       <ul>
      //         <li>- 🔧 Add XDC Network manually</li>
      //         <li>
      //           <ul>
      //             <li></li>
      //           </ul>
      //         </li>
      //       </ul>
      //     </div>  
      // </div> 

