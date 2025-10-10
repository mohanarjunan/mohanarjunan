import { QuoteIcon } from 'lucide-react'
import React from 'react'

export const Quote = () => {
  return (
    <div className='w-full pt-12 bg-surface-200 flex justify-center items-center'>
      <div className='md:w-5/12 w-11/12 bg-surface-300 mx:px-20 px-10 py-10 flex flex-col gap-2 relative'>
        <QuoteIcon size={30} className='text-amber-400 font-light -ms-5' />
        <p className='text-lg text-justify text-dark-100 italic font-serif'>
          Development is not just about writing code; it's a journey of perpetual learning and innovation, where each challenge is a stepping stone to mastery.
        </p>
        <span className='flex justify-end italic font-bold text-lg text-dark-200 font-serif'>- Meeta Ahluwalia</span>
      </div>
    </div>
  )
}
