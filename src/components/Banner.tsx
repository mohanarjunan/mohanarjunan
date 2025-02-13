import Image from 'next/image'
import React from 'react'
import Profile from './Profile'

export default function Banner() {
  return (
    <>
      <div className="w-full h-screen relative">
        <div className="w-full lg:h-[850px] overflow-hidden relative">
          <Image
          className='w-full absolute lg:-top-40'
          src={"/assets/img/banner/bg-banner-1.jpg"} width={1582} height={923} alt='?'/>
          <div className='absolute -top-2 w-full h-full flex flex-col justify-center items-center'>
            <div className='pb-3 text-primaryLight  flex flex-col items-center'>
              <span className='text-8xl -mb-1 font-bold uppercase'>Mohan Arjunan</span>
              <span className='w-3/4 h-[2px] bg-danger'></span>
            </div>
            <div className='text-2xl font-avenir text-secondaryLight uppercase tracking-wider'>
              Full-Stack Web Development Enthusiast
            </div>
          </div>
        </div>
        <Profile />
      </div>
    </>
  )
}
