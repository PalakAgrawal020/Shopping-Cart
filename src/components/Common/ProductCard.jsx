import React from 'react';
import tag from "../../assets/tag.svg"
import { Link } from 'react-router-dom';
import { useContextProvider } from '../../Context/Context';


function ProductCard({ product }) {

  const { addToWishlist, removeFromWishlist, wishlist, addToCart, cart, removeFromCart } = useContextProvider();

  const isInWishlist = wishlist.some(item => item.id === product.id);
  const isInCart = cart.some(item => item.id === product.id);

  const handleClick = () => {
    if(isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  }

  const handleCartClick = () => {
    if(isInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  }

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
          >
            View Product
          </Link>
          <button
            onClick={handleClick}
            className='bg-[#B88E2F] text-white p-2 mt-3'
          >
            {isInWishlist? "Remove from Wishlist" : "Add to wishlist"}
          </button>
          <button
            onClick={handleCartClick}
            className='bg-[#B88E2F] text-white p-2 mt-3'
          >
            {isInCart? "Remove from Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
