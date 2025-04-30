import Image from "next/image";
import { Honk } from "next/font/google"; 
import { XPayIframe } from "./xpay_embed";


const honk = Honk({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap"
})


export default function Home() {
  return (
    <main>
    <section className="w-full min-h-screen sticky bg-[url('../public/bg-colors.jpg')] bg-fixed bg-cover border-b-2 border-solid border-black">
      <div className="backdrop-blur-sm min-h-screen justify-items-center inset-0">
        <div className="flex relative justify-center min-h-screen top-[20vh]">
        <div className="w-[400px] h-[400px]">
          <Image src="/xdcpeacock_logo_nobg.png" width={400} height={400} alt="mascot image"></Image>
        </div>
       </div>
       </div>
    </section>
    <section className="w-full min-h-screen">
      <div className="justify-center p-5">
        <p className="text-center">Icon here</p>
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
      <div className="justify-center gap-1 p-4">
        <h2 className={`p-4 text-center text-4xl ${honk.className}`}>About XDCPeacock</h2>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et volutpat justo, ut lacinia ligula. Donec ultrices commodo malesuada. Curabitur placerat lorem urna, nec commodo neque aliquet in. Integer in ipsum ut lorem porta vestibulum. Ut id ligula gravida dui lobortis placerat vitae nec tortor. Fusce elementum non massa ut mattis. Sed laoreet orci ante, sit amet ornare sem cursus quis. </p>
      </div>
    </section>
    </main>
  );
}
