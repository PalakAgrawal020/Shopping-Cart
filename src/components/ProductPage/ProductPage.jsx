import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../../axios/axiosInstance';
import { useContextProvider } from '../../Context/Context';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const { addToWishlist, addToCart } = useContextProvider();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosInstance.get(`products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.log("Error fetching data : ", error);
      }
    }
    fetchData();
  }, [id])

  return (
    <>
      <div className='w-56 m-10'>
        <img src={product.image} />
        <div>{product.title}</div>
        <div>{product.description}</div>
        <div>{product.price}</div>
        <button
          className='border-2 bg-grey-100'
          onClick={addToWishlist}
        >Add to Wishlist</button>
        <button
          className='border-2 bg-grey-100'
          onClick={addToCart}
        >
          Add to Cart
        </button>
      </div>
    </>
  )
}

export default ProductPage
