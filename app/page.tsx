import Image from "next/image";
import { Honk } from "next/font/google"; 



const honk = Honk({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap"
})


export default function Home() {
  return (
    <main>
    <section className="w-fulli min-h-screen sticky bg-[url('../public/bg-colors.jpg')] bg-fixed bg-cover border-b border-solid border-black">
      <div className="backdrop-blur-sm min-h-screen"></div>
    </section>
    <section className="w-full min-h-screen">
      <div className="grid grid-cols-2 gap-4 p-4">
        <div className="rounded-md border-2 border-black"></div>
        <div className="rounded-md border-2 border-black"></div>
        <div className="rounded-md border-2 border-black"></div>
        <div className="rounded-md border-2 border-black"></div>
      </div>
      <div className="justify-center p-5">
        <p className="text-center">Icon here</p>
        <p className={`text-center text-4xl ${honk.className}`}>A memecoin for all, or some shit</p>
      </div>
      <div className="justify-center gap-1 p-4">
        <h2 className={`p-4 text-center text-4xl ${honk.className}`}>About XDCPeacock</h2>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et volutpat justo, ut lacinia ligula. Donec ultrices commodo malesuada. Curabitur placerat lorem urna, nec commodo neque aliquet in. Integer in ipsum ut lorem porta vestibulum. Ut id ligula gravida dui lobortis placerat vitae nec tortor. Fusce elementum non massa ut mattis. Sed laoreet orci ante, sit amet ornare sem cursus quis. </p>
      </div>
    </section>
    </main>
  );
}
