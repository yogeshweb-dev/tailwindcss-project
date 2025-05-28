import React, { useEffect, useState } from 'react'
import HomeSlider from './HomeSlider'
import ProductCard from './ProductCard'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function Home() {
  const [bastSelling, steBastSelling] = useState([])
  const [topRated, setTopRated] = useState([])

  useEffect(() => {
    axios.get('https://wscubetech.co/ecommerce-api/products.php', {
      params:{
        limit: 8,
        categories: 'mens-shirts,mens-shoes'
      }
    })
    .then((result) => {
      steBastSelling(result.data.data);
    })
    .catch(() => {
      toast.error('Something went wrong !')
    })
  },[])
    console.log('bastSelling', bastSelling)
  useEffect(() => {
    axios.get('https://wscubetech.co/ecommerce-api/products.php',{
      params:{
        limit: 8,
      }
    })
    .then((result) => {
      setTopRated(result.data.data)
      console.log('setTopRated',result.data.data)
    })
    .catch(() =>{
       toast.error('Something went wrong !')
    })
  },[])
console.log('topRated',topRated)
  return (
    <>
      <HomeSlider/>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Best Sellings</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            
            {
              bastSelling.map((item) => {
               return <ProductCard key={item.id} itm={item}/>
              })
            }
            
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Top Rated</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
           
             {
              topRated.map((item) => {
               return <ProductCard key={item.id} itm={item}/>
              })
            }
          </div>
        </div>
      </div>
          
    </>
  )
}
