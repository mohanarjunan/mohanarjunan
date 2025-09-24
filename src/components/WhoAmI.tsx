import React from 'react'

export const WhoAmI = () => {
  return (
    <div className='w-full py-12 bg-light-200 flex justify-center items-center'>
      <div className='w-3/6 bg-surface-100 px-20 py-10 flex flex-col gap-2'>
        <span className='font-bold text-3xl text-dark-500'>Who Am I?</span>
        <p className='text-md text-justify'>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"I'm a backend dev'loper with a love for full-stack development. I enjoy working with Spring Boot, Next.js, NestJS, Angular, and React, and I'm always exploring new technologies. I'm a fast learner, a team player, and I love turning ideas into efficient, real-world solutions."
          </p>
        <span className='flex justify-end italic font-bold text-sm text-dark-500'>- Mohan Arjunan</span>
      </div>'    </div>
  )
}
