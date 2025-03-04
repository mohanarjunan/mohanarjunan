import Image from 'next/image'
import React from 'react'

export default function Profile() {
  return (
    <div className={`w-48 h-48 rounded-full border-[0.4rem] relative border-white overflow-hidden mb-4`}>
      <Image src={"/assets/img/male-profile.jpg"} className='scale-125' fill alt='' />
    </div>
  )
}