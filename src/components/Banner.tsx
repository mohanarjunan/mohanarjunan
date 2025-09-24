import React from 'react'

const Banner = () => {
  return (
    <>
      <div className='relative w-full h-screen flex flex-col gap-3 justify-center items-center'>
        <div className='w-48 h-48 rounded-full border-5 border-gray-700 shadow overflow-hidden'>
          {/* <img src={'/assets/img/male-profile.jpg'} className='w-full' /> */}
        </div>
        <div className='text-5xl font-bold font-avenir text-gray-700'>Mohan Arjunan</div>
        {/* <div className='text-md font-avenir text-gray-500'>@mohanarjunan</div> */}
        <div className='text-sm font-avenir text-gray-600 '>Full Stack Developer / UI & UX / DevOps Engineer</div>
      </div>
    </>
  )
}

export default Banner