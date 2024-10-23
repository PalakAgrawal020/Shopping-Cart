import React, { useState, useEffect } from 'react'
import ProductCard from '../Common/ProductCard.jsx'
import axiosInstance from '../../axios/axiosInstance.js';

function ShopPage() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/products');
        setProduct(response.data);
      } catch (error) {
        console.log("Error fetching data : ", error);
      }
    }

    fetchData();
  }, [])

  return (
    <>
      <div className='flex flex-wrap gap-20 justify-center mt-10 mb-10'>
        {product.map((product) => (
          <ProductCard product={product}/>
        ))}
      </div>
    </>
  )
}

export default ShopPage