import React from 'react'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
import { WishlistProvider } from './Context/WishlistContext.jsx'
import { CartProvider } from './Context/CartContext.jsx'

function Layout() {
  return (
    <>
        <WishlistProvider>
          <CartProvider>
            <Header />
            <Outlet />
            <Footer />
          </CartProvider>
        </WishlistProvider>
    </>
  )
}

export default Layout