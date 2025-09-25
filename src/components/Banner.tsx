import React from 'react'

const Banner = () => {
  return (
    <>
      <div className='relative w-full h-screen flex flex-col gap-3 justify-center items-center'>
        <img src={"/assets/img/shape/grid.svg"} className='w-2/4 absolute right-0 top-0' />
        {/* <img src={"/assets/img/shape/grid.svg"} className='w-2/4 absolute right-0 top-0' /> */}
        {/* <img src={"/assets/img/shape/grid.svg"} className='w-2/4 absolute right-0 bottom-0 rotate-x-180' /> */}
        <img src={"/assets/img/shape/grid.svg"} className='w-2/4 absolute right-0 bottom-0 rotate-x-180' />

        <img src={"/assets/img/shape/grid.svg"} className='w-2/4 absolute left-0 top-0 rotate-y-180' />
        {/* <img src={"/assets/img/shape/grid.svg"} className='w-2/4 absolute left-0 top-0 rotate-y-180' /> */}
        {/* <img src={"/assets/img/shape/grid.svg"} className='w-2/4 absolute left-0 bottom-0 rotate-y-180 rotate-x-180' /> */}
        <img src={"/assets/img/shape/grid.svg"} className='w-2/4 absolute left-0 bottom-0 rotate-y-180 rotate-x-180' />
        <div className='w-48 h-48 rounded-full border-5 border-dark-100 shadow overflow-hidden'>
          {/* <img src={'/assets/img/male-profile.jpg'} className='w-full' /> */}
        </div>
        <div className='text-5xl font-bold font-avenir text-dark-100'>Mohan Arjunan</div>
        {/* <div className='text-md font-avenir text-gray-500'>@mohanarjunan</div> */}
        <div className=' font-avenir text-dark-200 '>Full Stack Developer / UI & UX / DevOps Engineer</div>
      </div>
    </>
  )
}

export default Banner