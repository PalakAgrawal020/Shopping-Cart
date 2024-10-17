import React, {useState, useEffect} from 'react'
import home from "../../assets/home.svg"
import dining from "../../assets/dining.svg"
import living from "../../assets/living.svg"
import bedroom from "../../assets/bedroom.svg"
import ProductCard from '../Common/ProductCard'
import { Link } from 'react-router-dom'
import setup1 from "../../assets/setup/setup1.svg"
import setup2 from "../../assets/setup/setup2.svg"
import setup3 from "../../assets/setup/setup3.svg"
import setup4 from "../../assets/setup/setup4.svg"
import setup5 from "../../assets/setup/setup5.svg"
import setup6 from "../../assets/setup/setup6.svg"
import setup7 from "../../assets/setup/setup7.svg"
import setup8 from "../../assets/setup/setup8.svg"
import setup9 from "../../assets/setup/setup9.svg"
import axiosInstance from '../../axios/axiosInstance.js'

function HomePage() {
  const [product, setProduct] = useState([]);
  const limitedProduct = product.slice(0,4);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axiosInstance.get('/products');
        setProduct(response.data);
      } catch (error) {
        console.log("Error fetching data : ", error);
      }
    }

    fetchdata();
  }, [])

  return (
    <>
      <div className='relative flex flex-col'>
        <img src={home} alt="" />
        <div className="absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2
                        bg-[#FFF3E3] p-5 w-[35%] h-96 flex flex-col justify-center">
          <div className='font-bold text-xs tracking-widest'>New Arrival</div>
          <div className="text-[#B88E2F] font-extrabold text-5xl pt-2">Discover Our New Collection</div>
          <div className='text-sm font-semibold pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</div>
          <Link to="shop"><button className='p-4 text-xs font-semibold bg-[#B88E2F] text-white w-36 mt-7'>BUY NOW</button></Link>
        </div>
      </div>

      <div className='flex flex-col text-center'>
        <div className='font-bold text-2xl pt-6 pb-1'>Browse the Range</div>
        <div className='text-[#666666] pb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div className='flex justify-center gap-7'>
          <div>
            <Link to="shop"><img src={dining}></img></Link>
            <div className='pt-5 font-bold'>Dining</div>
          </div>
          <div>
            <Link to="shop"><img src={living}></img></Link>
            <div className='pt-5 font-bold'>Living</div>
          </div>
          <div>
            <Link to="shop"><img src={bedroom}></img></Link>
            <div className='pt-5 font-bold'>Bedroom</div>
          </div>
        </div>
      </div>

      <div className='flex flex-col m-10'>
        <div className='font-bold text-3xl text-center pb-6'>Our Products</div>
        <div className='flex gap-32 justify-center flex-wrap'>
          {limitedProduct.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
        <div className='flex gap-32 justify-center flex-wrap'>
          {limitedProduct.map((product) => (
            <ProductCard product={product}/>
          ))}
        </div>
        <Link to="shop" className='flex justify-center'><button className='w-40 h-10 text-[#B88E2F] border-2'>Show More</button></Link>
      </div>

      <div>
        
      </div>

      <div>
        <div className='flex text-center flex-col p-5'>
          <div className=' text-[#616161] font-semibold'>Share your setup with</div>
          <div className='font-bold text-4xl'>#FuniroFurniture</div>
        </div>
        <div className='flex place-content-center'>
          <div className='flex flex-col'>
            <div className='flex items-end gap-6'>
              <img src={setup1} />
              <img src={setup3} />
            </div>
            <div className='flex items-start gap-8 pt-8'>
              <img src={setup2} />
              <img src={setup4} />
            </div>
          </div>
          
          <div className='flex p-8'>
            <img src={setup5} />
          </div>

          <div className='flex flex-col'>
            <div className='flex items-end gap-8'>
              <img src={setup6} />
              <img src={setup8} />
            </div>
            <div className='flex items-start gap-8 pt-8'>
              <img src={setup7} />
              <img src={setup9} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage