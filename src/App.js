import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './files/about/About';
import Cart from './files/cart/Cart';
import Api from './files/main/Api';
import Home from './files/main/Home';
import Navbar from './files/nav/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './files/Login/Login';
import Single from './files/main/Single';

const App = () => {
  const [Apidata, setApidata] = useState(Api)
  const [cart, setcart] = useState([])

  const [hide, sethide] = useState(true)

  


// onchnage event for search
  const vijay = (item) => {


    const mydata = Api.filter((data) => {
      return data.category.toLowerCase().includes(item)

    })
  
    setApidata(mydata)
  }
// for incerement 

  const incr = (id) => {
    setcart(cart.map((myqua) => {
      return myqua.id === id ? { ...myqua, amount: myqua.amount + 1 } : myqua
    })
    )
  }
  // for decrement
  const dec = (id) => {
    
 (setcart(cart.map((datas)=>{
  if(datas.amount<2){
    return({...datas,amount:datas.amount=1})
  }
 else if(datas.id===id.id){
  return ({...datas,amount:datas.amount-1})
} 

    }))
 )  
    
  }

  const handleadd = (data) => {
    let present = false;
    cart.forEach((product) => {
      if (data.id === product.id)
        present = true
    })
    if (present)
      return
    setcart([...cart, data])
  }
  const click = (item) => {
    const mydata = Api.filter((data) => {
      return data.category.includes(item)

    })
    setApidata(mydata)
  }


  return (
    <div className='contc'>
      <Router>
        <Navbar size={cart.length} vijay={vijay} Api={Api} setApidata={setApidata} sethide={sethide} />


        <Routes>

          <Route path='/' element={<  Home setApidata={setApidata} Apidata={Apidata} hide={hide} sethide={sethide} handleadd={handleadd} click={click} />} />
          <Route path='/Cart' element={<Cart cart={cart} incr={incr} dec={dec} setcart={setcart} />} />

         <Route path='/Login' element={<Login />} />
          <Route path='/Home/Main/:id' element={<Single handleadd={handleadd} />} />

        </Routes>
        <About />

      </Router>


    </div>
  )
}

export default App;