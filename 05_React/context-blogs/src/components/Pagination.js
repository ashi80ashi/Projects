import React, { useContext } from 'react'
import { AppContext } from '../context/AppContecxt'

function Pagination() {
  
  const {page,handelpagechang,totalPages} = useContext(AppContext)
  return (
    <div className='flex justify-between px-10 py-5 font-semibold text-lg shadow shadow-inner shadow-black'>
      <div className=' flex justify-between w-1/12'>
      {
        page > 1 &&
        <button onClick={() => handelpagechang(page - 1)}>Previous</button>
      }
      {
        page < totalPages &&
        <button onClick={() => handelpagechang(page + 1)}>Next</button>
      }
    </div>
    <p>page {page} of {totalPages}</p>
    </div>
  )
}

export default Pagination
