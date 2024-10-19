import React from 'react';
import tag from "../../assets/tag.svg"
import { useWishlist } from '../../Context/WishlistContext';
// import { Link } from 'react-router-dom';


function ProductCard({ product }) {

  const {addToWishlist} = useWishlist();

  return (
    <div className='flex flex-wrap w-56'>
      {/* <Link 
        to={`/product/${product.id}`}
        key={product.id} 
        className='relative bg-[#F4F5F7] mb-7 group'
      > */}
        <div className='relative '>
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
          <button 
            onClick={() => addToWishlist(product)}
            className='border-2'
          >Wishlist</button>
        </div>
      {/* </Link> */}
    </div>
  )
}

export default ProductCard
