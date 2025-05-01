import Image from "next/image"
import { Honk } from "next/font/google"

const honk = Honk({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap"
})


export default function UnderConstruction() {
  return (
    <section className="w-full min-h-[80vh]">
    <div className="flex flex-col gap-2 justify-center items-center">
      <Image src="/xdcpeacock_logo_nobg.png" width={400} height={400} alt="mascot image" className="max-w-[400px] max-h-[400px]"></Image>
      <h2 className={`${honk.className} text-2xl`}>Under Construction</h2>
      <hr className={`text-black h-0 w-85 border-black border-solid border-1`}  />
      <p>This page will be available soon.</p>
    </div>
    </section>
  )
}
