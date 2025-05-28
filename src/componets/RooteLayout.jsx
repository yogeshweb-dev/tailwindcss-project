import React from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

export default function RooteLayout() {
  return (
    <>
    <ToastContainer/>
     <Header/>
     <Outlet/>
     <Footer/> 
    </>
  )
}
