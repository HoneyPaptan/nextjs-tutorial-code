"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
function OrderProduct() {
    const router = useRouter()
    const handleClick = () =>{
        console.log("order placed successfully")
        router.push("/")

    }
    const RandomNumber = (count) =>{
      return Math.floor(Math.random() * count )
    }
    const random = RandomNumber(2)

 
    
    
    {
        if (random === 1) {
          throw new Error("Error loading review")
          
        }else{
          return (
            <>
            <button onClick={handleClick} className='bg-blue-500 w-40 h-7 rounded-2xl font-medium text-white'>Place Order</button>
            
            
            </>
          )
        }
    }
        

        
    
  
}

export default OrderProduct