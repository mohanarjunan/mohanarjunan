import React from 'react'
import socials from '@/lib/data/social.json'
import { Mail, MailCheck, Phone } from 'lucide-react'

export const Footer = () => {
  return (
    <div className='text-dark-100 flex flex-col justify-center items-center'>
      <div className="w-8/12 my-10 flex justify-center space-x-30">
        <div className='w-3/12 flex flex-col gap-0.5'>
          <div className='text-2xl font-black font-avenir'>Quick Connect</div>
          <div className='flex gap-3 items-center'>
            <div className='h-1 w-5 bg-surface-100'></div>
            {socials.map((social: any, index: number) => (
              <img key={index} src={social.icon} className='w-6 gra' alt={social.name} />
            ))}
          </div>
        </div>
        <div className='w-4/12 flex flex-col gap-3'>
          <div className='flex flex-col'>
            <span className="text-2xl font-black font-avenir">Mohan Arjunan</span>
            <span className='text-dark-200'>@mohanarjunan</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-2xl font-black font-avenir'>Also Can Reach In,</span>
            <div className='flex flex-col px-5 gap-1 text-dark-200'>
              <div className='flex gap-2 items-center text-md'>
                <MailCheck size={16} /> mohan.arjunan@hotmail.com
              </div>
              <div className='flex gap-2 items-center text-md'>
                <MailCheck size={16} /> admohan2002@gmail.com
              </div>
              <div className='flex gap-2 items-center text-md'>
                <Phone size={16} /> +91 6374 85****
              </div>
            </div>
          </div>
        </div>
        <div className='w-5/12 flex flex-col gap-1.5'>
          <div className='text-2xl font-black font-avenir'>Contact Form</div>
          <form className='flex flex-col gap-2.5 items-center'>
            <input type="text" className='border-1 w-full focus:outline-dark-300 outline-1 outline-transparent border-dark-300 py-2 px-3' placeholder='From *' />
            <textarea className='border-1 w-full focus:outline-dark-300 outline-1 outline-transparent border-dark-300 py-2 px-3' placeholder='Message for Me *' ></textarea>
            <button className='border-1 border-dark-300 w-full py-2 cursor-pointer transition-all duration-300 relative z-0 after:absolute after:w-full after:h-full after:bg-dark-400 after:-left-full after:top-0 after:transition-all after:duration-300 hover:after:left-0 overflow-hidden after:-z-1'>
              Sent
            </button>
          </form>
        </div>
      </div>
      <div className='p-2 w-full text-dark-200 text-center'>@ All Rights Reserved By <strong className='italic'>Mohan Arjunan</strong>
      </div>
    </div>
  )
}
