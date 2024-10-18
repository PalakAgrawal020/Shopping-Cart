import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../../axios/axiosInstance';

function ProductPage() {
  const {id} = useParams();
  const [product, setProduct] = useState([]);


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
  },[id])

  return (
    <>
      <div className='w-56 m-10'>
        <img src={product.image}/>
        <div>{product.title}</div>
        <button
          className='border-2 bg-grey-100' 
        >Add to Wishlist</button>
      </div>
    </>
  )
}

export default ProductPage
