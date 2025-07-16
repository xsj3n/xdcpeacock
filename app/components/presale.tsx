'use client';

import React, { useEffect, useState} from 'react';

interface PresaleProp {
  classNames?: string
}

export default function PresaleCountdown({classNames}: PresaleProp) {
  const [timeLeft, setTimeLeft] = useState<string>('');

  useEffect(() => {
    const countDownDate = new Date('July 18, 2025 12:00:00 UTC').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        setTimeLeft('🚀 Presale is LIVE!');
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`⏳ Presale starts in: ${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  const promoBoxClasses = `
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
      <img
        src="https://i.ibb.co/cKz5jJMT/56ea5b91-ee2a-4e66-91e4-d5ec2bec96cd.png"
        alt="XDCPeacock Presale Banner"
        className={imgClasses}
      />
    </a>
      <div className={countDownClasses}>{timeLeft}</div>
    </div>
  );
};
