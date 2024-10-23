import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import HomePage from './components/HomePage/HomePage.jsx'
import ShopPage from './components/ShopPage/ShopPage.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Cart from './components/Cart/Cart.jsx'
import ProductPage from './components/ProductPage/ProductPage.jsx'
import Wishlist from './components/Wishlist/Wishlist.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<HomePage />}></Route>
        <Route path="shop" element={<ShopPage />}></Route>
        <Route path="wishlist" element={<Wishlist />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="product/:id" element={<ProductPage />}></Route>
      </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
