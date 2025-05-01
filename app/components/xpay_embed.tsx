import React from "react";

interface xPayIframeProp {
  className?: string
}

export default function XPayIframe({className}: xPayIframeProp) {
  let url: string = "https://app.xspswap.finance/swap#/swap?chainName=xinfin&outputCurrency=0xFa4dDcFa8E3d0475f544d0de469277CF6e0A6Fd1"
  return(
  <div className={`${className}`}>
    <div className="relative h-[558px] w-[403px] border-2 border-solid border-black rounded-md" >
      <div className="absolute z-20 w-full h-[140px] bg-(--background)"></div>
      <iframe src={url} className="absolute  z-10 max-w-[500px]" width={399} height={550} scrolling="no"></iframe>
      <div className="absolute top-[490px] z-20 w-full h-[65px] bg-(--background) border-b-2 border-solid border-black rounded-b-md"></div>
    </div>
  </div>
  );
}
