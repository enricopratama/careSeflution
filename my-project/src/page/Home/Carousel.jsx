import React, { useState, useEffect } from "react"
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs"

const Promo = () => {
  const images = [
    "https://images.pexels.com/photos/5926239/pexels-photo-5926239.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/6114606/pexels-photo-6114606.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/5662862/pexels-photo-5662862.png?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3905874/pexels-photo-3905874.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1591055/pexels-photo-1591055.jpeg?auto=compress&cs=tinysrgb&w=800",
  ]
  const [activeSlide, setActiveSlide] = useState(0) // active slide state
  const totalSlides = 5 // number of slides

  useEffect(() => {
    // To loop through slides
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % totalSlides)
    }, 3000) // change slide every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white mx-auto rounded-lg p-8">
      <div
        id="default-carousel"
        className="relative max-w-5xl mx-auto rounded-xl h-auto"
      >
        <div className="relative h-40 overflow-hidden rounded-lg shadow-lg">
          {images.map((imgUrl, idx) => (
            <div
              key={idx}
              className={`duration-700 ease-in-out ${
                activeSlide !== idx && "hidden"
              }`}
            >
              <img
                src={imgUrl}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={`Slide ${idx + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          {[...Array(totalSlides)].map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`${activeSlide === idx ? "bg-white" : "bg-gray-300"}`}
              aria-label={`Slide ${idx + 1}`}
              onClick={() => setActiveSlide(idx)}
            />
          ))}
        </div>
        <button
          type="button"
          className="bg-gray-300 bg-opacity-50 absolute top-1/2 left-4 z-30 flex items-center justify-center w-12 h-12 rounded-full cursor-pointer group focus:outline-none transform -translate-y-1/2"
          onClick={() =>
            setActiveSlide(
              (prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides,
            )
          }
        >
          <BsFillArrowLeftCircleFill className="text-white" size={20} />
        </button>

        <button
          type="button"
          className="bg-gray-300 bg-opacity-50 absolute top-1/2 right-4 z-30 flex items-center justify-center w-12 h-12 rounded-full cursor-pointer group focus:outline-none transform -translate-y-1/2"
          onClick={() =>
            setActiveSlide((prevSlide) => (prevSlide + 1) % totalSlides)
          }
        >
          <BsFillArrowRightCircleFill className="text-white" size={20} />
        </button>
      </div>
    </div>
  )
}

export default Promo
