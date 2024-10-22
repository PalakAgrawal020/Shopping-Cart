import React from 'react'
import logo from "../../assets/logo.svg"
import cartImg from "../../assets/cart.svg"
import wishlistImg from "../../assets/wishlist.svg"
import { Link } from 'react-router-dom'
import { useWishlist } from '../../Context/WishlistContext'
import { useCart } from '../../Context/CartContext'

function Header() {

    const { wishlist } = useWishlist();
    const { cart } = useCart();

    return (
        <>
            <div className='h-16 flex justify-between p-5'>
                <Link to="/">
                    <div className='flex'>
                        <img src={logo} className='w-9 h-9 pb-2'></img>
                        <div className='font-bold font-Montserrat text-xl'>Furniro</div>
                    </div>
                </Link>

                <div className='flex gap-14 font-semibold text-sm'>
                    <Link to="">Home</Link>
                    <Link to="shop">Shop</Link>
                    <Link>About</Link>
                    <Link>Contact</Link>
                </div>
                <div className='flex gap-6'>
                    <Link to="wishlist">
                        <img src={wishlistImg} className='w-5' />
                        {wishlist.length > 0 && (
                            <span className='absolute top-3 right-14 text-xs bg-red-500 text-white rounded-full px-1'>
                                {wishlist.length}
                            </span>
                        )}
                    </Link>
                    <Link to="cart"><img src={cartImg} className='w-5' />
                        {cart.length > 0 && (
                            <span className='absolute top-3 right-3 text-xs bg-red-500 text-white rounded-full px-1'>
                                {cart.length}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header