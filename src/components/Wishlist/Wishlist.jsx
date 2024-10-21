import React from 'react'
import { useWishlist } from '../../Context/WishlistContext'

function Wishlist() {

  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
        {wishlist.length === 0 ? (
          <p>No items in wishlist.</p>
        ) : (
          <ul>
            {wishlist.map((product, index) => (
              <li key={index} className="mb-10 shadow-md p-3">
                <div className='flex justify-between'>
                  <div>
                    <img src={product.image} alt={product.title} className="w-16 h-16 object-cover inline-block mr-4" />
                    <div>{product.title}</div>
                  </div>
                  <div className='flex flex-col'>
                    <button 
                      className='mr-10 bg-[#B88E2F] text-white p-2 mb-2'
                      onClick={() => removeFromWishlist(product.id)}
                    >Delete</button>
                    <button className='mr-10 bg-[#B88E2F] text-white p-2'>Add to cart</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default Wishlist