
import React from 'react'

const SkeletonProduct = () => {
  return (
    <div className=' animate-pulse bg-gray-200 duration-300 rounded-t-2xl  rounded-2xl shadow-lg cursor-pointer'>
        <div className='h-48 cursor-pointer  rounded-t-2xl rounded-tl-2xl'  >
        </div>
        <div className='h-16  px-2 flex justify-between w-full'></div>
    </div>
  )
}

export default SkeletonProduct
