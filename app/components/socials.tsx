'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SocialsSection() {
  return (
  <section className="relative mx-auto my-10 w-11/12 max-w-3xl rounded-2xl overflow-hidden p-[3px] bg-gradient-to-tr from-green-400 to-cyan-400">
    <div className="bg-black rounded-xl px-8 py-16 text-center">
      <h2 className="text-4xl font-black drop-shadow-lg animate-bounce" style={{ color: "#57A845" }}>
        Connect with us!
      </h2>
      <div className="grid grid-cols-5 gap-8 justify-items-center mt-8">
        <Link href="https://x.com/XDCPeacock" target="_blank" title="Follow us on X">
          <Image
            src="/x.svg"
            width={64}
            height={64}
            alt="Twitter"
            className="transition-transform duration-300 ease-in-out hover:scale-110 hover:drop-shadow-lg hover:drop-shadow-green-400 hover:drop-shadow-cyan-400"
          />
        </Link>
        <Link href="https://t.me/thexdcpeacock" target="_blank" title="Join our Telegram">
          <Image
            src="/telegram.svg"
            width={64}
            height={64}
            alt="Telegram"
            className="transition-transform duration-300 ease-in-out hover:scale-110 hover:drop-shadow-lg hover:drop-shadow-green-400 hover:drop-shadow-cyan-400"
          />
        </Link>
        <Link href="https://www.instagram.com/xdcpeacock/" target="_blank" title="Follow us on Instagram">
          <Image
            src="/instagram.svg"
            width={64}
            height={64}
            alt="Instagram"
            className="transition-transform duration-300 ease-in-out hover:scale-110 hover:drop-shadow-lg hover:drop-shadow-green-400 hover:drop-shadow-cyan-400"
          />
        </Link>
        <Link href="https://reddit.com/r/XDCPeacock/s/SrhrWnplo" target="_blank" title="Join our Reddit">
          <Image
            src="/reddit.svg"
            width={64}
            height={64}
            alt="Reddit"
            className="transition-transform duration-300 ease-in-out hover:scale-110 hover:drop-shadow-lg hover:drop-shadow-green-400 hover:drop-shadow-cyan-400"
          />
        </Link>
        <Link href="https://discord.gg/KcacUxZfHp" target="_blank" title="Join our Discord">
          <Image
            src="/discord.svg"
            width={64}
            height={64}
            alt="Discord"
            className="transition-transform duration-300 ease-in-out hover:scale-110 hover:drop-shadow-lg hover:drop-shadow-green-400 hover:drop-shadow-cyan-400"
          />
        </Link>
      </div>
    </div>
  </section>
);
}
