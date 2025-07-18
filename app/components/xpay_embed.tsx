import React from "react";

interface xPayIframeProp {
  className?: string
}

export default function XPayIframe({className}: xPayIframeProp) {
  let url: string = "https://app.xspswap.finance/swap#/swap?chainName=xinfin&outputCurrency=0xF9e69907da6fbDDe786a085bab29fa794FaC66e4&inputCurrency=XDC"
  return(
  <div className={`${className} flex justify-center items-center mt-25`}>
    <div className="relative sm:h-[558px] sm:w-[403px] h-[536px] w-[370px] border-2 border-solid border-black rounded-md" >
      <iframe src={url} className="absolute z-10 sm:h-[554px] sm:w-[396px] h-[532px] w-[366px] rounded-md"  scrolling="no"></iframe>
    </div>
  </div>
  );
}
