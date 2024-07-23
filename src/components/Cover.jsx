import React from 'react'
import foto from "../assets/new3.webp"
import fotoM from "../assets/fotoM.png"

const Cover = () => {
  return (
    <div className='mm:h-fit lg:h-auto w-auto flex flex-col lg:flex-row'>
        <div className='flex flex-col mm:items-center lg:items-end text-center font-Sora justify-center w-full lg:w-1/2 text-white '>
            <div className='uppercase text-4xl mm:pt-[10%] lg:pt-0 mm:text-4xl sm:text-6xl md:text-7xl lg:pr-4 font-bold drop-shadow-xl'>bruno alves</div>
            <div className='text-lg mm:text-[10px] mm:px-10 lg:px-0  mm:pt-[0%] lg:pt-0 sm:text-2xl drop-shadow-xl'>Consultoria especializada em Pecuária Leiteira</div>
           
        </div>
        <div className='flex items-center   mm:pt-[10%] lg:pt-0 justify-center lg:justify-center w-full h-full lg:w-[60%] '>
            <img src={foto} alt="Consultoria" className=' hidden lg:flex w-[70%] lg:w-[80%] z-10'/>
            <img src={fotoM} alt="Consultoria" className='flex lg:hidden w-[100%] lg:w-[80%] z-10'/>
        </div>
    </div>
  )
}

export default Cover
