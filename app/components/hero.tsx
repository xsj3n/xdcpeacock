import React from "react"
import Image from "next/image"
import XPayIframe from "./xpay_embed"


interface heroSectionImageProp {
  imageOn: boolean,
  fontClassName?: string
}

interface heroSectionBuyProp {
  buyOn: boolean
}

export default function HeroSection({imageOn, fontClassName,  buyOn}: heroSectionImageProp & heroSectionBuyProp){
  const imageOnElements = (
    <div className="flex flex-col justify-center text-center mt-20">
      <h2 className={`${fontClassName} text-6xl -mb-20`} style={{ color: "#57A845" }}>XDCPeacock</h2>
      <Image src="/hero_img.png" width={600} height={600} alt="mascot image" ></Image>
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
