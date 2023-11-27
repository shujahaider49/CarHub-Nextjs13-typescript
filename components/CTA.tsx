"use client"

import Link from 'next/link'
import React from 'react'

const CTA = () => {
    const handleScroll = () => {
        const carSection = document.getElementById("discover");

        if(carSection){
            carSection.scrollIntoView({behavior: "smooth"})
        }
    }
  return (
    <div>
      <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <img src="https://readymadeui.com/cardImg.webp" alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />
      <div className="min-h-[300px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6">Explore the World</h2>
        <p className="text-lg text-center text-gray-200">Embark on unforgettable journeys. Book your dream vacation today!</p>
        <Link 
          href=""
          onClick={handleScroll}
          className="bg-primary-blue rounded-full text-white p-3 px-5 mt-4">
          Book Now
        </Link>
      </div>
    </div>
    </div>
  )
}

export default CTA
