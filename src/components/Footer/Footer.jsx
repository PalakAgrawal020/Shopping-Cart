import React from 'react'

function Footer() {
  return (
    <>
      <div className='border-2 border-t mt-9 p-24'>
        <div className='flex flex-wrap gap-40 border-b-2'>
          <div>
            <div className='font-bold text-2xl pb-12'>Funiro.</div>
            <div className='text-[#9F9F9F]'>400 University Drive Suite 200 Coral Gables,FL 33134 USA</div>
          </div>

          <div>
            <div className='text-[#9F9F9F] pb-12'>Links</div>
            <div className='font-semibold pb-12'>Home</div>
            <div className='font-semibold pb-12'>Shop</div>
            <div className='font-semibold pb-12'>About</div>
            <div className='font-semibold pb-12'>Contact</div>
          </div>

          <div>
            <div className='text-[#9F9F9F] pb-12'>Help</div>
            <div className='font-semibold pb-12'>Payment Options</div>
            <div className='font-semibold pb-12'>Returns</div>
            <div className='font-semibold pb-12'>Privacy Policies</div>
          </div>

          <div>
            <div className='text-[#9F9F9F] pb-12'>Newsletter</div>
            <div>Enter your email address</div>
            <div>Subscribe</div>
          </div>
        </div>
        <div className='pt-10'>2023 Furniro. All rights reserved</div>
      </div>
    </>
  )
}

export default Footer