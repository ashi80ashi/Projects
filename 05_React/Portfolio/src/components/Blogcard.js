import React from 'react'

function Blogcard({ imageUrl, title, link }) {
  return (<>
    <div className='bg-slate-100 h-56 w-5/6 flex flex-col pt-1 shadow-md shadow-black rounded-xl hover:scale-105 duration-300 '>
    <img src={imageUrl} alt='ImageHere' className='h-36 w-auto object-fill rounded-t-lg animate__animated animate__jackInTheBox' />
    <div className='flex flex-col justify-center items-center animate__animated animate__jackInTheBox'>
      <h2 className='text-lg font-bold text-gray-900 mt-2'>{title}</h2>
      <a href={link} className='lg:mt-1 text-blue-600 hover:text-blue-800'>
        Read More
      </a>
    </div>
  </div></>
  )
}

export default Blogcard
