import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
const Home = () => {
  return (
    <main className='w-screen px-[15%] pt-20'>
      <div className='flex flex-row items-center justify-around'>
        <div className='flex flex-col gap-6'>
          <h1 className='font-bold text-4xl'>
            Explore the World , One Country at a Time.
          </h1>
          <p className='text-sm'>
            Discover the history, culture, and beauty of every nation. Sort, 
            search, and filter through countries to find the details you need.
          </p>
          <button className='flex flex-row items-center gap-2 bg-[#202020] w-45 py-2 px-4 rounded-2xl border cursor-pointer'>
            Start Exploring <FaLongArrowAltRight />
          </button>
        </div>
        <div className='h-50 w-[70%]'>
          <img src="/images/world.png" alt="" />
        </div>
      </div>
    </main>
  )
}

export default Home