import React from 'react'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
import { WishlistProvider } from './Context/WishlistContext.jsx'

function Layout() {
  return (
      <>
        <WishlistProvider>
          <Header />
          <Outlet />
          <Footer />
        </WishlistProvider>
      </>
  )
}

export default Layout