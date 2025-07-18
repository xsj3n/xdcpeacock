'use client';

import React, { useEffect, useState} from 'react';
import Image from 'next/image';
interface PresaleProp {
  classNames?: string
}

export default function PresaleCountdown({classNames}: PresaleProp) {
 
  const promoBoxClasses = `
    flex
    flex-col
    justify-center
    items-center
    bg-zinc-900
    border-4 border-green-500
    rounded-2xl
    p-8
    my-10 mx-auto
    w-[90%] max-w-[700px]
    shadow-[0_0_5px_#00FF00]
    font-black font-sans
    text-center
    text-white
    relative
  `


  const imgClasses = "max-w-full rounded-[15px] shadow-[0_0_5px_#00FF00]"

  const countDownClasses = "text-2xl font-bold text-cyan-400 [text-shadow:1px_1px_2px_#000] mt-8"

  return (
    <div className={`${promoBoxClasses} ${classNames}`}>
    <a href="https://xdc.sale/presale/0x3b8063BB8F27fEb4eA6224faBfcd281D095fB648">
      <Image
        src="/presale_live.png"
        width={450}
        height={450}
        alt="XDCPeacock Presale Banner"
        className={imgClasses}
      ></Image>
    </a>
      <div className={`${countDownClasses} -mb-5`}>Presale ends on the 25th, and will then launch!</div>
    </div>
  );
};
