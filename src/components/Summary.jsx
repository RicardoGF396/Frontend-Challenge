import React from 'react'
 
function Summary({items, totalm, subtotal, tax, total, due}) {
  return (
    <div className='w-full flex flex-col mt-20 items-center'>
       <h2 className='text-4xl text-center'>Summary</h2>
       <div className='max-w-[415px] bg-[#F9F9F9] grid grid-cols-2 p-12 m-10'>
           <div className='flex flex-col gap-y-3'>
               <p>Total Items</p>
               <p>Total M²</p>
               <p>Subtotal</p>
               <p>Tax</p>
               <p className='font-bold'>Total</p>
               <p className='font-bold'>Due Today 50%</p>
           </div>
           <div className='flex flex-col gap-y-3'>
               <p className='text-right'> {items} </p>
               <p className='text-right'> {totalm} </p>
               <p className='text-right'>${subtotal} </p>
               <p className='text-right'>${tax} </p>
               <p className='text-right font-bold'>${total} </p>
               <p className='text-right font-bold'>${due} </p>
           </div>
       </div>
    </div>
  )
}

export default Summary