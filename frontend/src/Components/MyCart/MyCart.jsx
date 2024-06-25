import React from 'react'
import CartSample from './CartSample';

function MyCart() {
    const cart = [1, 2, 3];
  return (
    <div className='relative top-16 px-24 py-16 w-full'>
        <div className='text-center flex flex-col gap-4'>
            <h1 className='text-4xl bg-white/75'>My Cart</h1>  
            {cart.map((item)=>
            <div key={Date.now()}><CartSample/></div>
            )}  
        </div>
    </div>
  )
}

export default MyCart