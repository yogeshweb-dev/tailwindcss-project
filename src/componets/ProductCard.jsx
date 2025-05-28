import React from 'react'
import product1 from '../assets/images/product1.jpg'
import product2 from '../assets/images/product2.jpg'
import product3 from '../assets/images/product3.jpg'

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc: product1,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc: product2,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: '#',
    imageSrc: product3,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
]


export default function ProductCard({itm}) {
  return (
    <>
      <div className="group relative">
        <img
          alt=""
          src={itm.image}
          className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
        />
        <div className="mt-4 flex justify-between">
          <div>
            <div className="text-sm text-gray-700">
              <a href="">
                <span aria-hidden="true" className="absolute inset-0" />
                {itm.name}
              </a>
              <h2>{itm.category_name}</h2>
            </div>
            <p className="mt-1 text-sm text-gray-500">
              {itm.rating}
            </p>
            <p className="text-sm font-medium text-gray-900">
            {itm.price}
          </p>
          </div>
          <button type="button" className=" text-white bg-purple-700 hover:bg-purple-800  focus:ring-purple-300 font-medium rounded-lg text-sm px-5 mx-2  my-4">Add to Cart</button>
        </div>
      </div>
    </>
  )
}
