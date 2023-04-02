import React from 'react'
import Blogcard from '../components/Blogcard'
function Blog() {
  return (
  

   <div className=' mt-1 flex flex-col px-10'>

    <h1 className='text-3xl font-bold text-black text-center mb-4'>Blogs</h1>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pl-12 '>
  
        <Blogcard
          imageUrl='https://cdn.hashnode.com/res/hashnode/image/upload/v1673637355270/3841ed36-5245-4cea-a711-d214be4bccf8.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
          title='Rest & Spread Operators'
         link='https://ashii.hashnode.dev/rest-spread-operators'
        />
        <Blogcard
          imageUrl='https://cdn.hashnode.com/res/hashnode/image/upload/v1673635695770/981959e4-52a0-4740-a109-5bc1b07365db.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
          title='Maps in Js'
          link='https://ashii.hashnode.dev/maps-in-js'
        />
        <Blogcard
          imageUrl='https://cdn.hashnode.com/res/hashnode/image/upload/v1673627987382/a4a26894-5371-471d-bddc-01daa2b30cd5.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
          title='Understanding DOM in JS'
          link='https://ashii.hashnode.dev/understanding-dom-in-js'
        />
        <Blogcard
          imageUrl='https://cdn.hashnode.com/res/hashnode/image/upload/v1673623000823/36ee3a74-4e35-47cb-8cb1-fc82d602f1bc.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
          title='Functions in JS'
          link='https://ashii.hashnode.dev/functions-in-js'
        />
        <Blogcard
          imageUrl='https://cdn.hashnode.com/res/hashnode/image/unsplash/LAaSoL0LrYs/upload/v1669223136987/2i0xwOTe2A.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
          title='Positions & Flex in CSS✨'
          link='https://ashii.hashnode.dev/positions-and-flex-box-in-css-1'
        />
        <Blogcard
          imageUrl='https://cdn.hashnode.com/res/hashnode/image/unsplash/_t-l5FFH8VA/upload/v1668919841493/2KCMkIVt-.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
          title='HTML Refresher ✔✔'
          link='https://ashii.hashnode.dev/html-refresher'
        />
       
      </div>
   </div>


    )
}

export default Blog
