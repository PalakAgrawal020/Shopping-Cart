import React from 'react'
import { useWishlist } from '../../Context/WishlistContext'

function Wishlist() {

  const { wishlist } = useWishlist();

  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
        {wishlist.length === 0 ? (
          <p>No items in wishlist.</p>
        ) : (
          <ul>
            {wishlist.map((product, index) => (
              <li key={index} className="mb-2">
                <img src={product.image} alt={product.title} className="w-16 h-16 object-cover inline-block mr-4" />
                {product.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default Wishlist