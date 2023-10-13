"use client"
import Image from 'next/image';

export const Header = () => {
  return (
    <header >
      <div className="py-10">
        <Image
          src="/powered.png"
          alt="Presentation logo"
          width={220}
          height={220}
        />
      </div>
    </header>
  )
}