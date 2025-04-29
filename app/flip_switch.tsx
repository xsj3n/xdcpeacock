"use client";
import Image from "next/image"; 
import { useState } from "react";


interface FlipSwitchProp {
  className?: string;
}

export function FlipSwitch({className}: FlipSwitchProp) {

  const [isFlipped, setIsFlipped] = useState<boolean>(false)
  return (
    <div className={`"bg-transparent perspective-midrange ${className}"` } onClick={() => setIsFlipped(!isFlipped)}>
    <div className={`transform-3 duration-200 ${isFlipped ? "rotate-y-180" : "" }`}>
      <div className="backface-hidden">
        <Image src="/light_toggle_trimmed2.png" width={70} height={56} alt="Dark/Light switch" ></Image>
      </div>
      <div className="backface-hidden rotate-y-180">
        <Image src="/light_toggle_trimmed2.png" width={70} height={56} alt="Dark/Light switch"></Image>
      </div>
    </div>
    </div>
   );
}
