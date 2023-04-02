import React from 'react'

function Footer() {
  return (
    <div className="mt-10  flex justify-end">
     
      <div className="flex justify-between  items-center w-4/6 px-10 py-4 bg-gray-800 rounded-tl-full font-bold  shadow-inner shadow-gray-400">
        <div className=" flex justify-evenly w-1/2">
          <a href="https://github.com/ashi80ashi" className="text-white hover:text-gray-300 mr-4 border-b-2 border-gray-500">Github</a>
          <a href="https://www.linkedin.com/in/ashish-singh-93a163215" className="text-white hover:text-gray-300 border-b-2 border-gray-500">LinkedIn</a>
        </div>
        <div className="text-white hover:text-gray-300 text-sm hidden md:block">
          © {new Date().getFullYear()} Ashish
        </div>
      </div>
      
    </div>
  )
}

export default Footer
