"use client";
import Image from "next/image"; 
import { useEffect, useState } from "react";


interface FlipSwitchClassProp {
  className?: string
}

function darkClassToggle() {
  let theme = localStorage.getItem("theme")
  document.documentElement.classList.toggle("dark", theme === "dark")
  if (theme === "light") {
    localStorage.setItem("theme", "dark")
  }
  if (theme === "dark") {
    localStorage.setItem("theme", "light")
  }
}

export function FlipSwitch({className}: FlipSwitchClassProp ) {

  const [isFlipped, setIsFlipped] = useState<boolean>(false)
 

  function toggleSwitch() {
    darkClassToggle()
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
