import React from "react";

interface xPayIframeProp {
  className?: string
}

export function XPayIframe({className}: xPayIframeProp) {
  let url: string = "https://app.xspswap.finance/swap#/swap?chainName=xinfin&outputCurrency=0xFa4dDcFa8E3d0475f544d0de469277CF6e0A6Fd1"
  return(
  <div className={`${className} relative`}>
    <iframe src={url} className="absolute z-1" width={500} height={500}></iframe>
    <div className="absolute z-2 w-[100px] h-[100px]"></div>
  </div>
  );
}
