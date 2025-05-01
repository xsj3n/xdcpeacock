import React from "react"
import Image from "next/image"
import XPayIframe from "./xpay_embed"

interface heroSectionImageProp {
  imageOn: boolean
}

interface heroSectionBuyProp {
  buyOn: boolean
}

export default function HeroSection({imageOn, buyOn}: heroSectionImageProp & heroSectionBuyProp){
  return (
    <section className="w-full min-h-screen sticky bg-[url('../public/bg-colors.jpg')] bg-fixed bg-cover">
    <div className="backdrop-blur-sm min-h-screen justify-items-center inset-0">
      <div className="flex relative justify-center min-h-screen top-[20vh]">
        <div className="w-[400px] h-[400px]">
          {imageOn ? (<Image src="/xdcpeacock_logo_nobg.png" width={400} height={400} alt="mascot image"></Image>) : (<></>)}
          {buyOn ? (<XPayIframe></XPayIframe>) : (<></>)}
        </div>
       </div>
     </div>
  </section>
  )
}
