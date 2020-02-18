import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Home from './components/home/Home'
import Partner from './components/partner/Partner'
import Customer from './components/customer/Customer'
import { Route, BrowserRouter } from 'react-router-dom'
export default function App() {
  const [state, setstate] = useState({
    customer:[{},{}],
    partner:[]
  })
  const setCustomerData=(data)=>{
    setstate({
      ...state,
      customer:data
      
    })
  }
  const setPartnerData=(data)=>{
    setstate({
      ...state,
      partner:data
    })
  }
  return (
    <>
       <BrowserRouter>
       <Navbar />
      

      <Route exact path='/' render={() => 
      <Home 
      setCustomerData={setCustomerData} 
      setPartnerData={setPartnerData}
      />} />
      <Route exact path='/customer'  render={() => <Customer customer={state.customer} />}/>
      <Route exact path='/partner'  render={() => <Partner partner={state.partner} />}/>
        
      
      </BrowserRouter>
    </>
  )
}
