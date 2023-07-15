 import React, { useState } from 'react'
import { useEffect } from 'react';
import "./cart.css";

const Cart = ({ cart,setcart,incr,dec}) => {
  const[lprice,setlprice]=useState(0)


  
  const data=()=>{
   let ans=0
    
    cart.map((item)=>{
      return( ans += item.price*item.amount)
     
      // console.log(item.price)
    })
    setlprice(ans)
  }
useEffect(()=>{
  data()
  
})
const remove=(id)=>{
const rem= cart.filter((item)=>{
  return item.id!=id
})
setcart(rem)

}




  return (
    <div  className='ttt'>
      {/* <div className='maderchod'><h3>Shopping cart</h3></div> */}
      <div className='wrapper'>
        {


          cart?.map((item) => {
            const{id,category,price,image,amount}=item
            return (
              <div key={id}>
              <div className='cart-cont' >
            <div className='cart-it' >
                <div className='cart-img'>
                    <img className='cart-i'  width="80px"src={image} alt='prodct'></img>
                </div>

                <div className='cart-name'>
                    <span className='cart-n'>{category}</span>
                </div>
                <div className='cart-bt'>
                    <button className='cart-bt1' onClick={() => incr
              (id)} >+</button>
                    <button className='cart-bt1'>{amount}</button>
                    <button className='cart-bt1' 
                   onClick={() => dec
                    (item)} >-</button>
                </div>
                <div className='prc'>
                    <div className='cart-price'>{price*amount}</div>

                </div>
                <div className='cart-rmv'>
                    <button className='cart-buton' onClick={() => remove
              (id)}>Remove</button>
              
                </div>

            </div>
            
</div>

              </div>
            )
          }
          )
        }
 
      </div>
   
      <div className='cart-ttl'>
                <div className='cart-spn'>
                    <div className='cart-spn1'>
                      <div className='cart-spn2'>Order summary</div>
                        <span className='cart-spn2'>Total Amount :{lprice}</span>
                        {/* <span className='cart-spn3'>{lprice}</span> */}
                    </div>
                    <button className='cart-po'>Place Order</button>
                </div>

            </div>
    </div>
    
  )
}

export default Cart