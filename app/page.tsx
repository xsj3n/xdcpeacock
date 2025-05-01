import Image from "next/image";
import { Honk } from "next/font/google"; 
import HeroSection from "./components/hero"; 

const honk = Honk({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap"
})


export default function Home() {
  return (
    <main>
    <HeroSection imageOn={true} buyOn={false}></HeroSection>
    <section className="w-full min-h-screen border-solid border-t-2 border-black">
  
      <div className="flex flex-col justify-center gap-1 p-4 mb-10 items-center">
        <h2 className={`p-2 text-center text-4xl ${honk.className}`}>About XDCPeacock</h2>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et volutpat justo, ut lacinia ligula. Donec ultrices commodo malesuada. Curabitur placerat lorem urna, nec commodo neque aliquet in. Integer in ipsum ut lorem porta vestibulum. Ut id ligula gravida dui lobortis placerat vitae nec tortor. Fusce elementum non massa ut mattis. Sed laoreet orci ante, sit amet ornare sem cursus quis. </p>
      </div>

      
      <div className="flex flex-col justify-center items-center gap-1 p-10">
        <p className={`text-center text-4xl ${honk.className}`}>A memecoin for all, or some shit</p>
      </div>
      <div className="justify-center flex w-full">
        <div className="grid grid-cols-4 w-75 gap-4">
          
          <div className="col-span-2">
          <div className="grid grid-rows-2 gap-1 justify-items-center">
            <Image src="/x.svg" width={36} height={36} alt="X social icon"></Image>
            <p className="text-center">Twitter</p>
          </div>
          </div>
        
          <div className="col-span-2">
          <div className="grid grid-rows-2 gap-1 justify-items-center">
            <Image src="/telegram.svg" width={36} height={36} alt="X social icon"></Image>
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
    </section>
    </main>
  );
}
