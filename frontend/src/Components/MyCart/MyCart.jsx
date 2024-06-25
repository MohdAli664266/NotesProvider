import React from 'react'
import CartSample from './CartSample';

function MyCart() {
    const cart = [1, 2, 3];
  return (
    <div className='relative top-16 sm:px-24 sm:py-16 px-10 w-full'>
        <div className='text-center flex flex-col gap-4'>
            <h1 className='text-4xl bg-white/50 py-2'>My Cart</h1>  
            {cart.map((item, index)=>
            <div key={index}><CartSample/></div>
            )}  
        </div>
    </div>
  )
}

export default MyCart