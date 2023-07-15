import React from 'react'
import "./single.css"
import Api from './Api';

import { useParams } from 'react-router-dom'
const Single = ({handleadd}) => {
  const  {id}=useParams()
  
const product= Api.find((item)=>+item.id==id)
const{image}=product

  return (
    <div className='big'>

      <div className='main-i'>
        <img className="imn" id="imn"src={`/${image}`} alt='img'/>
      </div>
      <div className='main-item'>
        <div className=''>

          <h1 className='n1m'>Brown Checks shirt</h1>
          <h3 className='prc3'>$139.00</h3>
          <select>
          <option>slect size</option>
            <option>m</option>
            <option>s</option>
            <option>l</option>
            <option>xl</option>
            <option>xxl</option>
            
          </select>
          <input type='number' defaultValue='1'/>
          <button className='btns' onClick={() => handleadd
              (product)}>add to cart</button>
          <h4 className='prd'>Product Details</h4>
          <span className='inf2'>i have some good shirt for selling and many other brands like peter england etc. at very lower price hight discount</span>

        </div>
      </div>
    </div>
  )
}

export default Single