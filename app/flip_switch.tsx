"use client";
import Image from "next/image"; 
import { useEffect, useState } from "react";


interface FlipSwitchClassProp {
  className?: string
}


export function FlipSwitch({className}: FlipSwitchClassProp ) {

  const [isFlipped, setIsFlipped] = useState<boolean>(false)
 

  function toggleSwitch() {
    let theme = localStorage.getItem("theme")
    if (!theme) localStorage.setItem("theme", "dark")
    if (theme === "light") {
      localStorage.setItem("theme", "dark")
      document.documentElement.classList.add("dark")
    }
    if (theme === "dark") {
      localStorage.setItem("theme", "light")
      document.documentElement.classList.remove("dark")
    }
    
    setIsFlipped(!isFlipped)
  }
  return (
    <div className={`"bg-transparent perspective-midrange ${className}"` } onClick={ () => toggleSwitch()}>
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
