import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './componets/Home'
import AboutUs from './componets/AboutUs'
import RooteLayout from './componets/RooteLayout'
import './assets/css/style.css'
import ProductListing from './componets/ProductListing'
import Cart from './componets/Cart'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route element={<RooteLayout/>}>
      <Route path='/' element={<Home/>} />
      <Route path='/about-us' element={<AboutUs/>} />
      <Route path='/product' element={<ProductListing/>} />
       <Route path='/cart' element={<Cart/>} />
    </Route>
  </Routes>
  </BrowserRouter>,
)
