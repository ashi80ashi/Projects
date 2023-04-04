import React, { useContext } from 'react'
import { AppContext } from '../context/AppContecxt'
import Spinner from './Spinner';

function Blogs() {
  const {posts,loading} = useContext(AppContext);
 
  return (
    <div className=" min-h-96 max-w-full  p-8 flex gap-10 flex-wrap justify-center ">
    {loading ? (
      <Spinner />
    ) : posts.length === 0 ? (
      <div className="text-gray-700 text-center">No post available</div>
    ) : (
      posts.map((post) => (
        <div className="bg-white shadow-md shadow-black w-1/4 rounded-md p-6 mb-6" key={post.id}>
          <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span className="mr-2">{post.author}</span>
            <span className="mx-2 text-slate-300">|</span>
            <span className="mr-2 ">{post.category}</span>
            <span className="mx-2 text-slate-300">|</span>
            <span>{post.date}</span>
          </div>
          <p className="text-gray-700 my-4">{post.content}</p>
          <div className="flex flex-wrap">
            {post.tags.map((tag, id) => (
              <span key={id} className="text-sm bg-gray-200 text-gray-700 px-2 py-1 rounded-md mr-2 mb-2">
                {` #${tag} `}
              </span>
            ))}
          </div>
        </div>
      ))
    )}
  </div>
  )
}

export default Blogs
