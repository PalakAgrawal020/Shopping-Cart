import React from 'react';
import tag from "../../assets/tag.svg"

function ProductCard({ product }) {
  return (
    <div className='flex flex-wrap w-56'>
      <div key={product.id} className='bg-[#F4F5F7] mb-7'>
        <div className='relative'>
          <img src={product.image} className='w-56' />
          <div className='absolute top-0 right-0 p-2'>
            <img src={tag} />
          </div>
          <div className='absolute top-2 right-2 p-2 text-white'>New</div>
        </div>
        <div className='p-3'>
          <div className='text-lg font-bold'>{product.title}</div>
          <div className='text-sm text-[#898989]'>{product.category}</div>
          <div className='text-md font-semibold'>{product.price}</div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
