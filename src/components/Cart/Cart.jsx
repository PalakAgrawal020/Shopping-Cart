import React from 'react'
import { useContextProvider } from '../../Context/Context';

function Cart() {

    const { cart, removeFromCart, addToWishlist } = useContextProvider();

    return (
        <>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
                {cart.length === 0 ? (
                    <p>No items in cart.</p>
                ) : (
                    <ul>
                        {cart.map((product, index) => (
                            <li key={index} className="mb-10 shadow-md p-3">
                                <div className='flex justify-between'>
                                    <div>
                                        <img src={product.image} alt={product.title} className="w-16 h-16 object-cover inline-block mr-4" />
                                        <div>{product.title}</div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <button
                                            className='mr-10 bg-[#B88E2F] text-white p-2 mb-2'
                                            onClick={() => removeFromCart(product.id)}
                                        >Delete</button>
                                        <button
                                            className='mr-10 bg-[#B88E2F] text-white p-2'
                                            onClick={() => addToWishlist(product)}
                                        >Move to Wishlist</button>
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

export default Cart