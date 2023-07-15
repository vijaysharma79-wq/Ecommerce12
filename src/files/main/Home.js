// import React, { useState } from 'react'
import Api from './Api';
import Main from './Main'
import "./style.css";
import About from '../about/About';





const Home = ({ Apidata, handleadd, click, setApidata,sethide,hide }) => {
  return (

    <>


      {<div className='btsi1'>
        <div onClick={() => click("Man", sethide(false))} className='center'>
          MAN
        </div>
        <div onClick={() => click("Women",sethide(false))} className='center'>
          WOMEN
        </div>
        <div onClick={() => click("Kid",sethide(false))} className='center'>
          KIDS
        </div>
        <div onClick={() => click("shoes",sethide(false))} className='center'>
          SHOES
        </div>
        <div onClick={() => click("winter",sethide(false))} className='center'>
          WINTER
        </div> <div onClick={() => (setApidata(Api),sethide(false))} className='center'>
          ALL
        </div>
      </div>}

      <div className='bcont'>
        <div onClick={() => click("Man")} className='image' >


        </div>

      </div>
      {hide?<div className='heading'> Sale 50%  off</div>:null}
      {hide ? <div className='slide' >
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className='slide1 d-block w-100'id='slide1' src="imagess/ban1.avif" alt="..."/>
    </div>
    <div className="carousel-item">
      <img className='slide1 d-block w-100'id='slide1' src="imagess/ban4.avif"  alt="..."/>
    </div>
    <div className="carousel-item">
      <img className='slide1 d-block w-100'  id='slide1' src="imagess/ban2.avif"  alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </div> : null}
      <div className='container1' width="600px" >



        {Apidata.map((data) => (
          <Main key={data.id} data={data} handleadd={handleadd} />
        ))}
      </div>
      </>
  )
}


export default Home