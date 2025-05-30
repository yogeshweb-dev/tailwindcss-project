import React from 'react'

export default function AboutUs() {
  return (
    <>
      <div class="grid grid-cols-6 gap-4">
        <div class="col-span-4 col-start-2 bg-red-500">01</div>
        <div class="col-start-1 col-end-3 bg-amber-400">02</div>
        <div class="col-span-2 col-end-7 bg-red-900">03</div>
        <div class="col-start-1 col-end-7 bg-green-600">04</div>
      </div>
      <div class="grid grid-cols-3 gap-4">
        <div class="bg-red-300">1</div>
        <div class="bg-green-300">2</div>
        <div class="bg-blue-300">3</div>
      </div>
    </>
  )
}


