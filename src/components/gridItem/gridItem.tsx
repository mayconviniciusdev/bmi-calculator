"use client"
import Image from 'next/image';
import { Weight } from "@/helper/bmiCalculation"

type Props = { item: Weight}

export const Grid = ({item}: Props) => {
  return (
    <div className='flex flex-1 justify-center items-center flex-col p-24 text-white rounded-xl' style={{backgroundColor: item.color}}>
      <div className='w-20 h-20 rounded-full bg-black/5 flex justify-center items-center'>
        {item.icon === 'up' && 
        <Image
        src="/up.png"
        alt="Presentation logo"
        width={30}
        height={30}/>}

        {item.icon === 'down' && 
        <Image
        src="/down.png"
        alt="Presentation logo"
        width={30}
        height={30}/>}
      </div>

      <div className='text-xl font-semibold mt-3'>{item.title}</div>
      <div className='text-xs mt-2'>
        <>IMC entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong></>
      </div>
    </div>
  )
}