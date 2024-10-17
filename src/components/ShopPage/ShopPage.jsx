import React, { useState, useEffect } from 'react'
import ProductCard from '../Common/ProductCard'

function ShopPage() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setProduct(data))
    .catch(error => console.log("Error fetching data : ", error))
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