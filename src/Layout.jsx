import React from 'react'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
import { ContextProvider } from './Context/Context.jsx'

function Layout() {
  return (
    <>
      <ContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </ContextProvider>
    </>
  )
}

export default Layout