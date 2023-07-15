import React from 'react'
import "./style.css";
import { NavLink } from 'react-router-dom';

const Main = ({ data, handleadd }) => {
const {id,image,price,category}=data
  return (
    <div className='cont' >

      <div className='cm' >
        <div className='box1'  >
    <NavLink to={`/Home/Main/${id}`}>


          <img className='img' src={image} alt="1" height="270px" width="250px"></img>
          
    </NavLink>

          <div className='box2'>
            <span className='man'>{category}</span>
            <span className='ps'>Price ~ {price}</span>
            <div className='bts' onClick={() => handleadd
              (data)}><button className='bts1'>Buy Now</button>
              <button className='bts1'>Add To Cart</button></div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Main