import React from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { store } from '../reduxToolkit/reduxstore'


export default function RooteLayout() {
  return (
    <>
     <Provider store={store}>
      <ToastContainer/>
      <Header/>
      <Outlet/>
      <Footer/> 
     </Provider>
    </>
  )
}
