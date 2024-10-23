import React, { useEffect, useState } from 'react'
import { useContextProvider } from '../../Context/Context.jsx';

function Cart() {

    const { cart, removeFromCart, addToWishlist, increaseCount, decreaseCount, productCount } = useContextProvider();
    const [price, setPrice] = useState(0);

    useEffect(() => {
        const totalPrice = cart.reduce((sum, product) => sum + product.price * (productCount[product.id] || 1), 0)
        setPrice(totalPrice);
    }, [cart, productCount]);

    return (
        <>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
                <h3 className='text-xl font-semibold mb-4'>Total Amount : {price}</h3>
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
                                        <div>
                                            <button
                                                onClick={() => decreaseCount(product.id)}
                                                className='bg-[#B88E2F] text-lg text-white font-bold px-2 rounded mr-2'
                                            >
                                                -
                                            </button>
                                            <span>{productCount[product.id]}</span>
                                            <button
                                                onClick={() => increaseCount(product.id)}
                                                className='bg-[#B88E2F] text-lg text-white font-bold px-2 rounded ml-2'
                                            >
                                                +
                                            </button>
                                        </div>
                                        <div>Subtotal : ${(product.price * productCount[product.id])}</div>
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