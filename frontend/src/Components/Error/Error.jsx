import React from 'react'
import {Link} from 'react-router-dom'
function Error() {
  return (
    <div className='flex justify-center items-center text-xl'>
       <div className='bg-[#5197cf] flex justify-center items-center text-gray-400 flex-col max-w-[60%] my-8 p-8 shadow-lg shadow-slate-950'>
        <h1 className='md:text-9xl text-5xl bg-transparent py-4 text-white font-bold'>Oops!</h1>
        <p className='text-purple-300 p-4 m-4'>We are sorry! This page does not exist</p>
        <Link to = '/'>
          <button className='bg-[#3acca5] shadow-md shadow-gray-950 text-white hover:text-blue-700 px-4 py-0.5 font-bold mt-4'>Go to home</button>
        </Link>
       </div>
    </div>
  )
}

export default Error