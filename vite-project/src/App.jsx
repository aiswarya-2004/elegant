import React from 'react'
import './App.css'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import SignUp from './SignUp/SignUp'
import SignIn from './SignIn/SignIn'
import HomePage from './HomePage/HomePage'
import Shop from  './Shop/Shop'
import AddToCart from './AddToCart/AddToCart'
import Product from './Product/Product'
import Cart from './Cart/Cart'
import Check from './Check/Check'
import OrderPage from './OrderPage/OrderPage'
import Dashboard1 from './Dashboard1/Dashboard1'
import ProductCart from './ProductCart/ProductCart'
import EditProductPage from './EditProductPage/EditProductPage'
import ProductTitle from './ProductTitle/ProductTitle'
import ProductStock from './ProductStock/ProductStock'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path = '/' element = { <SignUp/> }></Route>
        <Route path = '/SignIn' element = { <SignIn/> }></Route>
        <Route path='/HomePage' element = { <HomePage/> }></Route>
        <Route path='/Shop' element= { <Shop/> }></Route>
        <Route path='/AddToCart' element={<AddToCart/>}></Route>
        <Route path='/Product' element={<Product/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
        <Route path='/Check' element={<Check/>}></Route>
        <Route path='/OrderPage' element={<OrderPage/>} ></Route>
        <Route path='/Dashboard1' element={<Dashboard1/>}></Route>
        <Route path= '/ProductCart' element ={<ProductCart/>}></Route>
        <Route path = '/EditProductPage' element = {<EditProductPage/>}></Route>
        <Route path = '/ProductTitle' element ={<ProductTitle/>}></Route>
        <Route path='/ProductStock' element = {<ProductStock/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App

