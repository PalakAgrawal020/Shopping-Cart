import React from 'react';
import tag from "../../assets/tag.svg"
import { useWishlist } from '../../Context/WishlistContext';
import { Link } from 'react-router-dom';


function ProductCard({ product }) {

  const { addToWishlist } = useWishlist();

  return (
    <div className='flex flex-wrap w-56 shadow-md mb-10'>
      <div className='relative'>
        <img src={product.image} className='w-56' />
        <div className='absolute top-0 right-0 p-2'>
          <img src={tag} />
        </div>
        <div className='absolute top-2 right-2 p-2 text-white'>New</div>
      </div>
      <div className='p-3 flex flex-col justify-between'>
        <div>
          <div className='text-lg font-bold'>{product.title}</div>
          <div className='text-sm text-[#898989]'>{product.category}</div>
          <div className='text-md font-semibold pb-2'>{product.price}</div>
        </div>
        <div>
          <Link
            to={`/product/${product.id}`}
            className='mr-10 bg-[#B88E2F] text-white p-2'
          >View Product</Link>
          <button
            onClick={() => addToWishlist(product)}
            className='bg-[#B88E2F] text-white p-2 mt-3'
          >Add to wishlist</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
