import React from "react"
import Image from "next/image"
import XPayIframe from "./xpay_embed"
import { color } from "chart.js/helpers"

interface heroSectionImageProp {
  imageOn: boolean,
  fontClassName: string
}

interface heroSectionBuyProp {
  buyOn: boolean
}

export default function HeroSection({imageOn, fontClassName,  buyOn}: heroSectionImageProp & heroSectionBuyProp){
  const imageOnElements = (
    <div className="flex flex-col justify-center text-center">
      <Image src="/xdcpeacock_logo_nobg.png" width={400} height={400} alt="mascot image" style={{color: "#625750"}}></Image>
      <h2 className={`${fontClassName} text-5xl`} style={{ color: '#57A845' }}>Presale (not) Live </h2>
      <h2 className={`${fontClassName} text-5xl`} style={{ color: '#57A845' }}>Goal: $100,000</h2>
    </div>
    
  )
  return (
    <section className="w-full min-h-screen sticky bg-[url('../public/bg-colors.jpg')] bg-fixed bg-cover">
    <div className="backdrop-blur-sm min-h-screen justify-items-center inset-0">
      <div className="flex relative justify-center min-h-screen top-[20vh]">
        <div className="w-[400px] h-[400px]">
          {imageOn ? imageOnElements : (<></>)}
          {buyOn ? (<XPayIframe></XPayIframe>) : (<></>)}
        </div>
       </div>
     </div>
  </section>
  )
}
